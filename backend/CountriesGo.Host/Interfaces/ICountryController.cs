using System.Collections.Generic;
using System.Threading.Tasks;
using CountriesGo.Domain.Entities;
using CountriesGo.Host.Dtos;

namespace CountriesGo.Host.Interfaces
{
    public interface ICountryController
    {
        List<GetAllPaisResponse> GetAll(GetAllPaisRequest request);
        
        Task<PaisView> Get(CountryBaseRequest filterInput);
        List<CountryBaseResponse> GetCountriesList();
    }
}