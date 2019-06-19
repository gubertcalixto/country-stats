using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CountriesGo.Domain.Dtos;
using CountriesGo.Domain.Events;
using CountriesGo.Host.Config;
using CountriesGo.Infrastructure;
using CountriesGo.Treatment.Handlers;
using Microsoft.AspNetCore.Mvc;
using Rebus.Bus;

namespace CountriesGo.Host.Controllers
{
    [Route("[controller]/[action]")]
    public class SeedController: ControllerBase
    {
        private readonly DefaultContext _context;
        private readonly IBus _bus;

        public SeedController(DefaultContext context, IBus bus)
        {
            _context = context;
            _bus = bus;
        }

        [HttpGet]
        public Task Seed()
        {
            SeedCountries();
            return Task.CompletedTask;
        }
        private async void SeedCountries()
        {
            if (_context.Paises.Any()) return;
            
            var threadList = new List<Thread>(); 
            var countriesList = await CountryIoHandler.GetCountriesList();
            foreach (var countryToSearch in countriesList)
            {
                threadList.Add(new Thread( () => SeedCountry(countryToSearch)));
            }
            var tList = new Thread(() =>
            {
                foreach (var thread in threadList)
                {
                    thread.Start();
                    // Sleep to avoid DDOS Attack
                    Thread.Sleep(DatabaseConfig.SeedCountriesInterval * 1000);
                }
            });
            tList.Start();
        }

        private void SeedCountry(CountryToSearch countryToSearch)
        {
            _bus.Send(new UpdateCountryEvent(countryToSearch.Name, countryToSearch.Sigla));
        }
        
    }
}