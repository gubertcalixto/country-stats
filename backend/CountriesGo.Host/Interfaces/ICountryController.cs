using System.Collections.Generic;
using CountriesGo.Host.Dtos;

namespace CountriesGo.Host.Interfaces
{
    public interface ICountryController
    {
        List<PaisView> GetAll(GetAllPaisRequest request);
        
        PaisView Get(GetCountryFilterInput filterInput);
    }
}