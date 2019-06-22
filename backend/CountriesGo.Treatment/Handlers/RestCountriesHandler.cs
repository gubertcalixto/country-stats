using System.Collections.Generic;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Reading.APIRequesters;
using CountriesGo.Reading.Classes.RestCountries;

namespace CountriesGo.Treatment.Handlers
{
    public static class RestCountriesHandler
    {
        public static RestCountriesRequest GetCountryInfo(string countryName)
        {
            return string.IsNullOrEmpty(countryName) ? null : RestCountriesReader.GetCountryInfo(countryName).Result;
        }

        public static void Treat(RestCountriesRequest countryInfo, Pais originalCountry, out Pais country)
        {
            country = originalCountry;
            country.QuantidadePopulacao = countryInfo.Population;
            country.NomenclaturaNativos = countryInfo.Demonym;
            country.ImagemBandeira = countryInfo.Flag;
            if (country.Localizacao == null)
                country.Localizacao = new LocalizacaoPais();
            country.Localizacao.Continente = countryInfo.Region;
            country.Localizacao.RegiaoContinental = countryInfo.Subregion;
        }
    }
}