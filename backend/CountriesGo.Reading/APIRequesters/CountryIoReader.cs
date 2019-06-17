using System;
using System.Net.Http;
using System.Threading.Tasks;
using CountriesGo.Domain.Utils;
using CountriesGo.Reading.Classes.CountryIo;
using Newtonsoft.Json;

namespace CountriesGo.Reading.APIRequesters
{
    public static class CountryIoReader
    {
        private static readonly HttpClient Client = new HttpClient();
        
        public static async Task<string> GetCountryCapital(string countryIso2)
        {
            const string url = "http://country.io/capital.json";
            // Realiza a solicitação a API
            var response = Client.GetAsync(url).Result;
            // Checa se deu certo
            if (!response.IsSuccessStatusCode) return null;
	        // Pega o resultado da requisição
            var responseString = await response.Content.ReadAsStringAsync();
            var countryCapitals = JsonConvert.DeserializeObject<CountryIoGetCapitalRequest>(responseString);
            // Retorna apenas a capital daquele pais
            var countryCapital = Convert.ToString(UtilsResources.GetPropValue(countryCapitals, countryIso2.ToUpper().Trim())); 
            return countryCapital;
        }
    }
}