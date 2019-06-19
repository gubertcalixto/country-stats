using System;
using System.Linq;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Infrastructure;
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
            // TravelBriefingHandler
            var travelBriefingCountry = TravelBriefingHandler.GetCountry(countryEvent.CountryName);
            if (travelBriefingCountry != null)
                TravelBriefingHandler.Treat(travelBriefingCountry, pais, out pais);
            var countryIoCountryCapital = CountryIoHandler.GetCountryCapital(countryEvent.CountryIso2);
            if (countryIoCountryCapital != null)
                CountryIoHandler.Treat(countryIoCountryCapital, pais, out pais);
            CreateOrUpdateCountry(pais);
            return Task.CompletedTask;
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

        private Pais GetCountryFromDb(string nome, string siglaPais2Digitos = null, string siglaPais3Digitos = null)
        {
            return _defaultContext.Paises
                              .FirstOrDefault(ct =>
                                  ct.Nome == nome || ct.SiglaPais2Digitos == siglaPais2Digitos ||
                                  ct.SiglaPais3Digitos == siglaPais3Digitos) ?? new Pais();
        }
    }
}