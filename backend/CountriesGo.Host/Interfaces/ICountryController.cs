using System.Collections.Generic;
using System.Threading.Tasks;
using CountriesGo.Host.Dtos;

namespace CountriesGo.Host.Interfaces
{
    public interface ICountryController
    {
        List<PaisView> GetAll(GetAllPaisRequest request);
        
        Task<PaisView> Get(GetCountryFilterInput filterInput);
    }
}