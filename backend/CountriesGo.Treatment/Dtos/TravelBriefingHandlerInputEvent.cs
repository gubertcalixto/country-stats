using System;

namespace CountriesGo.Treatment.Dtos
{
    public class TravelBriefingHandlerInputEvent: EventArgs
    {
        public TravelBriefingHandlerInputEvent(string countryName)
        {
            CountryName = countryName;
        }
        public string CountryName { get; }
    }
}