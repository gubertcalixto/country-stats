using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Utils;
using CountriesGo.Reading.Classes.CountryIo;
using CountriesGo.Reading.Classes.RestCountries;
using Newtonsoft.Json;

namespace CountriesGo.Reading.APIRequesters
{
    public static class RestCountriesReader
    {
        private static readonly HttpClient Client = new HttpClient();

        public static async Task<RestCountriesRequest> GetCountryInfo(string countryName)
        {
            var url = $"https://restcountries.eu/rest/v2/name/{HttpUtility.UrlEncode(countryName)}";
            // Realiza a solicitação a API
            var response = await Client.GetAsync(url);
            // Checa se deu certo
            if (!response.IsSuccessStatusCode) return null;
            var responseString = await response.Content.ReadAsStringAsync();
            
            var countryArray = JsonConvert.DeserializeObject<RestCountriesRequest[]>(responseString);
            return countryArray.Length > 0 ? countryArray[0] : null;
        }
    }
}