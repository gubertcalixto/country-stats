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
    public class CountryIoHandler: IHandleMessages<UpdateCountryEvent>
    {
        private readonly DefaultContext _context;

        public CountryIoHandler(DefaultContext context)
        {
            _context = context;
        }

        private Task GetCountryCapital(string countryIso2)
        {
            // Verificações para que não haja requisições inválidas
            if (countryIso2 == null) return Task.CompletedTask;
            // http://country.io/capital.json
            // Chama a camada de leitura para buscar o Pais
            var countryCapital = CountryIoReader.GetCountryCapital(countryIso2).Result;
            if(countryCapital == null) return Task.CompletedTask;
            // Chama o método de tratamento
            return Task.FromResult(countryCapital);
        }

        public Task Handle(UpdateCountryEvent countryEvent)
        {
            // O Tratador de UpdateCountryEvent chama o método de atualizar o Buscar Capital de Pais
            GetCountryCapital(countryEvent.CountryIso2);
            return Task.CompletedTask;
        }
    }
}