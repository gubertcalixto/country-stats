using System;

namespace CountriesGo.Domain.Events
{
    public class UpdateCountryEvent: EventArgs
    {
        public string CountryName { get; set; }
        public string CountryIso2 { get; set; }

        public UpdateCountryEvent(string countryName, string countryIso2)
        {
            CountryName = countryName;
            CountryIso2 = countryIso2;
        }
    }
}