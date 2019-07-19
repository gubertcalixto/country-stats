using CountriesGo.Host.Interfaces;

namespace CountriesGo.Host.Dtos
{
    public class GetAllPaisRequest: IFilteredRequest
    {
        public string NameFilter { get; set; }
        public int SkipCount { get; set; }
        public int MaxResult { get; set; }
        public string OrderByField { get; set; }
        
    }
}