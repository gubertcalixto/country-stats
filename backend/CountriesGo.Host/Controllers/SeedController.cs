using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Host.Config;
using CountriesGo.Infrastructure;
using CountriesGo.Treatment.Handlers;
using Microsoft.AspNetCore.Mvc;
using Rebus.Bus;

namespace CountriesGo.Host.Controllers
{
    [Route("/Seed")]
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
        public async Task Seed()
        {
            await SeedCountries();
        }
        private async Task SeedCountries()
        {
            var countriesList = _context.ListaPaises.ToList();
            if (countriesList.Count <= 0)
            {
                countriesList = await CountryIoHandler.GetCountriesList();
                foreach (var countryInList in countriesList)
                {
                    _context.ListaPaises.Add(new CountryBase
                    {
                        CountryName = countryInList.CountryName,
                        CountryIso2 = countryInList.CountryIso2
                    });
                }
                _context.SaveChanges();
            }
            
            var threadList = new List<Thread>(); 
            foreach (var countryInList in countriesList)
            {
                if(CheckIfShouldUpdateCountry(countryInList))
                    threadList.Add(new Thread( () => SeedCountry(countryInList)));
            }
            var tList = new Thread(() =>
            {
                foreach (var thread in threadList)
                {
                    thread.Start();
                    // Sleep to avoid DDOS Attack to API
                    Thread.Sleep(DatabaseConfig.SeedCountriesInterval * 1000);
                }
            });
            tList.Start();
        }

        private bool CheckIfShouldUpdateCountry(CountryBase countryInList)
        {
        // Get country from DB if exists and is not updated
            var country = _context.Paises
                .Select(p => new {p.SiglaPais2Digitos, p.CreationTime, p.LastTimeUpdated})
                .FirstOrDefault(p => p.SiglaPais2Digitos == countryInList.CountryIso2);
            // IF NULL = NOT IN DB
            // ELSE IF IS NOT UPDATED = UPDATE
            return country == null || DatabaseConfig.IsCountryNotUpdated(country.CreationTime, country.LastTimeUpdated);
        }

        private void SeedCountry(CountryBase countryBase)
        {
            _bus.Send(new UpdateCountryEvent(countryBase.CountryName, countryBase.CountryIso2));
        }
        
    }
}