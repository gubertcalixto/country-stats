using System;
using System.Linq;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Infrastructure;
using CountriesGo.Reading.APIRequesters;
using CountriesGo.Reading.Classes.TravelBriefing;
using Rebus.Handlers;

namespace CountriesGo.Treatment.Handlers
{
    public class TravelBriefingHandler: IHandleMessages<UpdateCountryEvent>
    {
        
        private readonly DefaultContext _context;

        public TravelBriefingHandler(DefaultContext context)
        {
            _context = context;
        }
        public async Task GetAllCountries()
        {
            var countries = await TravelBriefingReader.GetAllCountries();
            foreach (var country in countries)
            {
                var countryHandled = TreatCountry(country);
                await CreateOrUpdateCountry(countryHandled);
            }
        }
        private Pais TreatCountry(TravelBriefingGetRequest countryRequested)
        {
            throw new NotImplementedException();
        }

        private Task CreateOrUpdateCountry(Pais country)
        {
            var dataBaseCountry = _context.Paises.First(ct => ct.Nome == country.Nome ||
                                                              ct.SiglaPais2Digitos == country.SiglaPais2Digitos ||
                                                              ct.SiglaPais3Digitos == country.SiglaPais3Digitos);
            if (dataBaseCountry != null)
            {
                if (country.Id == Guid.Empty) country.Id = dataBaseCountry.Id;
                 _context.Paises.Update(country);
            }
            else
            {
                _context.Paises.Add(country);
            }
            _context.SaveChanges();
            return Task.FromResult(dataBaseCountry);
        }

        public Task GetCountry(string countryName)
        {
            // Verificações para que não haja requisições inválidas
            if (countryName == null) return Task.CompletedTask;
            var countryRegistered = _context.Paises.FirstOrDefault(ct => ct.Nome == countryName);
            if (countryRegistered != null) return Task.FromResult(countryRegistered);
            var url = $"https://travelbriefing.org/{countryName}?format=json";
            // Chama a camada de leitura para buscar o Pais
            var country = TravelBriefingReader.GetCountry(url).Result;
            if(country == null) return Task.CompletedTask;
            // Chama o método de tratamento
            var countryHandled = TreatCountry(country);
            // Chama o método de criar/atualizar pais
            return CreateOrUpdateCountry(countryHandled);
        }

        public Task Handle(UpdateCountryEvent countryEvent)
        {
            // O Tratador de UpdateCountryEvent chama o método de atualizar o Buscar Pais
            GetCountry(countryEvent.CountryName);
            return Task.CompletedTask;
        }
    }
}