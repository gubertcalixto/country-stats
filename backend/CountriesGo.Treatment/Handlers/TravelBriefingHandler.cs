using System.Collections.Generic;
using CountriesGo.Domain.Entities;
using CountriesGo.Reading.APIRequesters;
using CountriesGo.Reading.Classes.TravelBriefing;

namespace CountriesGo.Treatment.Handlers
{
    public static class TravelBriefingHandler
    {
//        public async Task GetAllCountries()
//        {
//            var countries = await TravelBriefingReader.GetAllCountries();
//            foreach (var country in countries)
//            {
//                var countryHandled = TreatCountry(country);
//                await CreateOrUpdateCountry(countryHandled);
//            }
//        }
        
        public static TravelBriefingGetRequest GetCountry(string countryName)
        {
            // Verificações para que não haja requisições inválidas
            if (countryName == null) return null;
            // Chama a camada de leitura para buscar o Pais
            var url = $"https://travelbriefing.org/{countryName}?format=json";
            var country = TravelBriefingReader.GetCountry(url).Result;
            return country;
        }
        public static void Treat(TravelBriefingGetRequest travelBriefingGetRequest, Pais originalCountry, out Pais country)
        {
            country = originalCountry;
            #region Name
            country.Nome = travelBriefingGetRequest.Names.Name;
            country.NomeCompleto = travelBriefingGetRequest.Names.Full;
            country.SiglaPais2Digitos = travelBriefingGetRequest.Names.Iso2;
            country.SiglaPais3Digitos = travelBriefingGetRequest.Names.Iso3;
            #endregion
            #region Currency
            if (country.Moeda == null)
                country.Moeda = new List<Moeda>();
            var moeda = new Moeda
            {
                Codigo = travelBriefingGetRequest.Currency.Code, Nome = travelBriefingGetRequest.Currency.Name, Simbolo = travelBriefingGetRequest.Currency.Symbol, Principal = true
            };
            country.Moeda.Add(moeda);
            #endregion
            #region Eletricity
            if(country.Eletricidade == null)
                country.Eletricidade = new Eletricidade();
            country.Eletricidade.Frequencias = new EletricidadeFrequencia{FrequenciaValor = travelBriefingGetRequest.Electricity.Frequency};
            if(country.Eletricidade.PlugsTomadas == null)
                country.Eletricidade.PlugsTomadas = new List<PlugTomada>();
            country.Eletricidade.Voltagens = new EletricidadeVoltagem{NumeroVoltagem = travelBriefingGetRequest.Electricity.Voltage};
            const string curinga = "${name}";
            string imgPlugs = $"https://travelbriefing.org/sites/views/default/images/plugs/{curinga}.svg";
            foreach (var plug in travelBriefingGetRequest.Electricity.Plugs)
            {
                country.Eletricidade.PlugsTomadas.Add(new PlugTomada
                {
                    TipoTomada = plug,
                    ImagemTomada = imgPlugs.Replace(curinga, plug.ToLower())
                });
            }
            #endregion
            #region Localizacao
            if(country.Localizacao == null)
                country.Localizacao = new LocalizacaoPais();
            country.Localizacao.Latitude = travelBriefingGetRequest.Maps.Lat;
            country.Localizacao.Longitude = travelBriefingGetRequest.Maps.Long;
            country.Localizacao.Zoom = travelBriefingGetRequest.Maps.Zoom;
            country.Localizacao.FusoHorario = travelBriefingGetRequest.Timezone.Name;
            
            if(country.Localizacao.PaisesVizinhos == null)
                country.Localizacao.PaisesVizinhos = new List<LocalizacaoPais>();
            // TODO IMPLEMENT NEIGHBOR
//            foreach (var neighbor in travelBriefingGetRequest.Neighbors)
//            {
//                country.Localizacao.PaisesVizinhos.Add(new LocalizacaoPais
//                {
//                });
//            }
            #endregion
            #region Telefone
            if(country.Telefone == null)
                country.Telefone= new Telefone();
            country.Telefone.CodigoTelefone = travelBriefingGetRequest.Telephone.Calling_Code;
            country.Telefone.TelefoneAmbulancia = travelBriefingGetRequest.Telephone.Ambulance;
            country.Telefone.TelefonePolicia = travelBriefingGetRequest.Telephone.Police;
            country.Telefone.TelefoneBombeiros = travelBriefingGetRequest.Telephone.Fire;
            #endregion
            #region Vacina
            if(country.Vacina == null)
                country.Vacina = new List<Vacina>();
            foreach (var vaccination in travelBriefingGetRequest.Vaccinations)
            {
                country.Vacina.Add(new Vacina
                {
                    Nome = vaccination.Name,
                    Observacoes = vaccination.Message,
                    RiscoVacina = RiscoVacina.Medio
                });
            }
            #endregion

            #region Language
            if(country.Linguagens == null)
                country.Linguagens = new List<Linguagem>();
            foreach (var language in travelBriefingGetRequest.Language)
            {
                country.Linguagens.Add(new Linguagem{
                    Nome = language.Language,
                    Oficial = language.isOfficial(),
                    Porcentagem = language.isOfficial() ? 100.0 : 0.0
                });
            }
            #endregion
        }
    }
}