using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Domain.Utils;
using CountriesGo.Host.Config;
using CountriesGo.Host.Dtos;
using CountriesGo.Host.Interfaces;
using CountriesGo.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rebus.Bus;

namespace CountriesGo.Host.Controllers
{
    [Route("[controller]/[action]")]
    public class CountryController: ControllerBase, ICountryController
    {
        private readonly DefaultContext _context;
        private readonly IBus _bus;
        private readonly IMapper _mapper;

        public CountryController(DefaultContext context, IBus bus, IMapper mapper)
        {
            _context = context;
            _bus = bus;
            _mapper = mapper;
        }
        
        [HttpGet]
        public List<GetAllPaisResponse> GetAll(GetAllPaisRequest request)
        {
            var maxCount = request.MaxResult == 0 ? DatabaseConfig.DefaultMaxCount : request.MaxResult;
            // Pega todos do BD
            var paisListQuery = _context.Paises
                .Skip(request.SkipCount).Take(maxCount)
                .OrderBy(p => UtilsResources.GetPropValue(p, request.OrderByField) ?? p.Nome);

            // Se houver filtro por nome, adicionar a query ao DB
            var paisList = !string.IsNullOrEmpty(request.NameFilter) ?
                paisListQuery.Where(p => p.Nome.Contains(request.NameFilter) || p.NomeCompleto.Contains(request.NameFilter)).ToList() :
                paisListQuery.ToList();
            // Mapeia para GetAllPaisResponse
            var countriesMapped = _mapper.Map<List<GetAllPaisResponse>>(paisList);
            return countriesMapped;
        }

        [HttpGet]
        public Task<PaisView> Get(CountryBase filterInput)
        {
            // Faz a requisição ao Banco
            var dataBaseCountry = GetCountryInDatabase(filterInput);
            // Caso não exista ou esteja desatualizado, atualize no banco
            if (dataBaseCountry == null || !DatabaseConfig.IsCountryNotUpdated(dataBaseCountry.CreationTime, dataBaseCountry.LastTimeUpdated))
            {
                // Envia para a camada de tratamento através do padrão Observable
                _bus.Send(new UpdateCountryEvent(filterInput.CountryName, filterInput.CountryIso2)).Wait();
                dataBaseCountry = GetCountryInDatabase(filterInput);
            }
            // Retorna para o FrontEnd o resultado
            var countryMapped = _mapper.Map<PaisView>(dataBaseCountry);
            return Task.FromResult(countryMapped);
        }

        
        [HttpGet]
        public List<CountryBase> GetCountriesList()
        {
            // Pega todos do BD
            return _context.ListaPaises.ToList();
        }
        
        private Pais GetCountryInDatabase(CountryBase filterInput)
        {
            return _context.Paises
                .Include(ct => ct.Eletricidade)
                .Include(ct => ct.Eletricidade.Frequencias)
                .Include(ct => ct.Eletricidade.Voltagens)
                .Include(ct => ct.Eletricidade.PlugsTomadas)
                .Include(ct => ct.Linguagens)
                .Include(ct => ct.Localizacao)
                .Include(ct => ct.Localizacao.PaisesVizinhos)
                .Include(ct => ct.Moeda)
                .Include(ct => ct.Telefone)
                .Include(ct => ct.Vacina)
                .FirstOrDefault(ct => ct.Nome == filterInput.CountryName||
                                      ct.SiglaPais2Digitos == filterInput.CountryIso2);
        }
    }
}