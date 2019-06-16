using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using CountriesGo.Reading.Classes.TravelBriefing;
using Newtonsoft.Json;

namespace CountriesGo.Reading.APIRequesters
{
    public static class TravelBriefingReader
    {
        private static readonly HttpClient Client = new HttpClient();
        
        public static async Task<List<TravelBriefingGetRequest>> GetAllCountries()
        {
            const string url = "https://travelbriefing.org/countries.json";
            var response = Client.GetAsync(url).Result;
            
            if (!response.IsSuccessStatusCode) return null;
	        
            var responseString = await response.Content.ReadAsStringAsync();
            var countriesRequest = JsonConvert.DeserializeObject<GetAllRequest[]>(responseString);
            var countriesList = new List<TravelBriefingGetRequest>();
            foreach (var country in countriesRequest)
            {
                var countryRequest = await GetCountry(country.url);
                if (countryRequest != null)
                {
                    countriesList.Add(countryRequest);
                }
            }
            
            return countriesList;
        }

        public static async Task<TravelBriefingGetRequest> GetCountry(string url)
        {
            // Realiza a solicitação a API
            var response = Client.GetAsync(url).Result;
            // Checa se deu certo
            if (!response.IsSuccessStatusCode) return null;
	        // Pega o resultado da requisição
            var responseString = await response.Content.ReadAsStringAsync();
            // Faz o Tratamento inicial do dado
            var country = JsonConvert.DeserializeObject<TravelBriefingGetRequest>(responseString);
            return country;
        }
    }
}