using AutoMapper;
using CountriesGo.Domain.Entities;
using CountriesGo.Host.Dtos;

namespace CountriesGo.Host.AutoMapper
{
    public class CountryAutoMapper: Profile
    {
        public CountryAutoMapper()
        {
            CreateMap<Pais, PaisView>().ReverseMap();
        }
    }
}