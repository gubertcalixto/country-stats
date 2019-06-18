using System;
using System.Collections.Generic;
using System.Threading;
using CountriesGo.Domain.Dtos;
using CountriesGo.Domain.Events;
using CountriesGo.Infrastructure;
using CountriesGo.Treatment.Handlers;
using Microsoft.EntityFrameworkCore.Internal;
using Rebus.Bus;

namespace CountriesGo.Host.Seeder
{
    public class DbSeeder
    {
        private DefaultContext _context;
        private IBus _bus;

        public DbSeeder(DefaultContext context, IBus bus)
        {
            _context = context;
            _bus = bus;
        }

        public void StartSeeding()
        {
            Thread t = new Thread(Seed);        
            t.Start();
        }
        
        private void Seed()
        {
            if (_context.Paises.Any()) return;
            
            var threadList = new List<Thread>(); 
            var countriesList = CountryIoHandler.GetCountriesList().Result;
            foreach (var countryToSearch in countriesList)
            {
                Thread.Sleep(5000);
                threadList.Add(new Thread( () => SeedCountry(countryToSearch)));
            }
        }

        private void SeedCountry(CountryToSearch countryToSearch)
        {
            Console.WriteLine(countryToSearch.Name);
            Console.WriteLine(countryToSearch.Sigla);
            return;
            _bus.Send(new UpdateCountryEvent(countryToSearch.Name, countryToSearch.Sigla));
        }
    }
}