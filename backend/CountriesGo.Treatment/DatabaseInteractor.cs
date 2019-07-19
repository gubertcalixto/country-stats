using System;
using System.Linq;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Infrastructure;
using CountriesGo.Reading.APIRequesters;
using CountriesGo.Treatment.Handlers;
using Rebus.Handlers;

namespace CountriesGo.Treatment
{
    public class DatabaseInteractor : IHandleMessages<UpdateCountryEvent>
    {
        private readonly DefaultContext _defaultContext;

        public DatabaseInteractor(DefaultContext defaultContext)
        {
            _defaultContext = defaultContext;
        }

        public Task Handle(UpdateCountryEvent countryEvent)
        {
            var pais = GetCountryFromDb(countryEvent.CountryName, countryEvent.CountryIso2);
            if (countryEvent.CountryName == null || countryEvent.CountryIso2 == null)
            {
                pais = GetCountryFromDbList(countryEvent.CountryName, countryEvent.CountryIso2);
                countryEvent.CountryName = pais.Nome;
                countryEvent.CountryIso2 = pais.SiglaPais2Digitos;
            }

            if (pais == null)
            {
                pais = new Pais();
                pais.SiglaPais2Digitos = countryEvent.CountryIso2;
                pais.Nome = countryEvent.CountryName;
            }
            
            var isCountryModified = false;
            // TravelBriefingHandler
            var travelBriefingCountry = TravelBriefingHandler.GetCountry(countryEvent.CountryName);
            // Avoid invalid default value 
            if (travelBriefingCountry != null && pais.SiglaPais2Digitos == travelBriefingCountry.Names.Iso2)
            {
                isCountryModified = true;
                TravelBriefingHandler.Treat(travelBriefingCountry, pais, out pais);
            }
            var countryIoCountryCapital = CountryIoHandler.GetCountryCapital(countryEvent.CountryIso2);
            if (!string.IsNullOrEmpty(countryIoCountryCapital))
            {
                isCountryModified = true;
                CountryIoHandler.Treat(countryIoCountryCapital, pais, out pais);
            }
            var restCountryInfo = RestCountriesHandler.GetCountryInfo(countryEvent.CountryName);
            if (restCountryInfo != null)
            {
                isCountryModified = true;
                RestCountriesHandler.Treat(restCountryInfo, pais, out pais);
            }

            if (isCountryModified)
                CreateOrUpdateCountry(pais);
            else
                RemovedInvalidCountry(countryEvent.CountryIso2);
            return Task.CompletedTask;
        }

        private Pais GetCountryFromDb(string nome, string siglaPais2Digitos = null, string siglaPais3Digitos = null)
        {
            return _defaultContext.Paises
                .FirstOrDefault(ct =>
                    ct.Nome == nome || ct.SiglaPais2Digitos == siglaPais2Digitos ||
                    ct.SiglaPais3Digitos == siglaPais3Digitos);
        }

        private Pais GetCountryFromDbList(string nome, string siglaPais2Digitos = null)
        {
            var paisInList = _defaultContext.ListaPaises
                .FirstOrDefault(ct => ct.CountryName == nome || ct.CountryIso2 == siglaPais2Digitos);
            var paisRetorno = new Pais();
            if (paisInList != null)
            {
                paisRetorno.Nome = paisInList.CountryName;
                paisRetorno.SiglaPais2Digitos = paisInList.CountryIso2;
            }
            return paisRetorno;
        }
        
        private void CreateOrUpdateCountry(Pais country)
        {
            country.TreatCountryBeforeSave();
            var dataBaseCountry = GetCountryFromDb(country.Nome, country.SiglaPais2Digitos, country.SiglaPais3Digitos);
            if (dataBaseCountry != null)
            {
                if (country.Id == Guid.Empty) country.Id = dataBaseCountry.Id;
                _defaultContext.Paises.Update(country);
            }
            else
                _defaultContext.Paises.Add(country);
            _defaultContext.SaveChanges();
        }

        private void RemovedInvalidCountry(string countryEventCountryIso2)
        {
            var countryInListToDelete =
                _defaultContext.ListaPaises.FirstOrDefault(lp => lp.CountryIso2 == countryEventCountryIso2);
            if (countryInListToDelete == null) return;
            _defaultContext.ListaPaises.Remove(countryInListToDelete);
            _defaultContext.SaveChanges();
        }
    }
}