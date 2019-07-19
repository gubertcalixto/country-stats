using System;
using System.Collections.Generic;

namespace CountriesGo.Reading.Classes.RestCountries
{
    public class RestCountriesRequest
    {
        public string Name { get; set; }
        public List<string> TopLevelDomain { get; set; }
        public string Region { get; set; }
        public string Subregion { get; set; }
        public int Population { get; set; }
        public string Demonym { get; set; }
        public double Area { get; set; }
        public List<string> Borders { get; set; }
        public string Flag { get; set; }
    }
}