using CountriesGo.Domain.Entities;

namespace CountriesGo.Host.Dtos
{
    public class CountryBaseResponse: BaseEntity
    {
        public string CountryName { get; set; }
        public string CountryIso2 { get; set; }
        public string ImagemBandeira { get; set; }
        
    }
}