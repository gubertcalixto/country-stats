using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Utils;
using CountriesGo.Reading.Classes.CountryIo;
using Newtonsoft.Json;

namespace CountriesGo.Reading.APIRequesters
{
    public static class CountryIoReader
    {
        private static readonly HttpClient Client = new HttpClient();

        public static async Task<List<CountryBase>> GetCountriesList()
        {
            const string url = "http://country.io/names.json";
            // Realiza a solicitação a API
            var response = await Client.GetAsync(url);
            // Checa se deu certo
            if (!response.IsSuccessStatusCode) return null;
            var responseString = await response.Content.ReadAsStringAsync();
            var countryNames = JsonConvert.DeserializeObject<CountryIoSiglas>(responseString);
            // Foreach property in countryNames
            var listCountries = countryNames
                .GetType()
                .GetProperties()
                .Select(prop => new CountryBase {CountryName = prop.GetValue(countryNames, null).ToString(), CountryIso2 = prop.Name})
                .ToList();
            
            return listCountries;
        }
        
        public static async Task<string> GetCountryCapital(string countryIso2)
        {
            const string url = "http://country.io/capital.json";
            // Realiza a solicitação a API
            var response = await Client.GetAsync(url);
            // Checa se deu certo
            if (!response.IsSuccessStatusCode) return null;
	        // Pega o resultado da requisição
            var responseString = await response.Content.ReadAsStringAsync();
            var countryCapitals = JsonConvert.DeserializeObject<CountryIoSiglas>(responseString);
            // Retorna apenas a capital daquele pais
            var countryCapital = Convert.ToString(UtilsResources.GetPropValue(countryCapitals, countryIso2.ToUpper().Trim())); 
            return countryCapital;
        }
    }
}