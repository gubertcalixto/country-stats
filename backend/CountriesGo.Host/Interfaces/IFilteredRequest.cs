namespace CountriesGo.Host.Interfaces
{
    public interface IFilteredRequest
    {
        int SkipCount { get; set; }
        int MaxResult { get; set; }
        string OrderByField { get; set; }
    }
}