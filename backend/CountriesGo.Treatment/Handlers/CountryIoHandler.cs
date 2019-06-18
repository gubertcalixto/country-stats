using System.Collections.Generic;
using System.Threading.Tasks;
using CountriesGo.Domain.Dtos;
using CountriesGo.Domain.Entities;
using CountriesGo.Reading.APIRequesters;

namespace CountriesGo.Treatment.Handlers
{
    public static class CountryIoHandler
    {
        public static Task<List<CountryToSearch>> GetCountriesList()
        {
            return CountryIoReader.GetCountriesList();
        }
        public static string GetCountryCapital(string countryIso2)
        {
            // Verificações para que não haja requisições inválidas
            if (countryIso2 == null) return null;
            // Chama a camada de leitura para buscar o Pais
            var countryCapital = CountryIoReader.GetCountryCapital(countryIso2).Result;
            if(countryCapital == null) return null;
            // Chama o método de tratamento
            return countryCapital;
        }

        public static void Treat(string capital, Pais originalCountry, out Pais country)
        {
            country = originalCountry;
            if (country.Localizacao == null)
                country.Localizacao = new LocalizacaoPais();
            country.Localizacao.Capital = capital;
        }
    }
}