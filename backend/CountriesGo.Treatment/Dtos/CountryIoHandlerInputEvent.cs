using System;

namespace CountriesGo.Treatment.Dtos
{
    public class CountryIoHandlerInputEvent: EventArgs
    {
        public CountryIoHandlerInputEvent(string countryIso2)
        {
            CountryIso2 = countryIso2;
        }

        public string CountryIso2 { get; }
    }
}