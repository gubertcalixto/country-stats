using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CountriesGo.Domain.Dtos;
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

        public CountryController(DefaultContext context, IBus bus)
        {
            _context = context;
            _bus = bus;
        }
        
        [HttpGet]
        public List<PaisView> GetAll(GetAllPaisRequest request)
        {
            var paisList = _context.Paises
                .Skip(request.SkipCount).Take(request.MaxResult)
                .OrderBy(p => UtilsResources.GetPropValue(p, request.OrderByField) ?? p.Nome)
                .ToList();
            var countriesMapped = Mapper.Map<List<PaisView>>(paisList);
            return countriesMapped;
        }

        [HttpGet]
        public Task<PaisView> Get(CountryToSearch filterInput)
        {
            // Faz a requisição ao Banco
            var dataBaseCountry = GetCountryInDatabase(filterInput);
            // Caso não exista ou esteja desatualizado, atualize no banco
            if (dataBaseCountry == null || !DatabaseConfig.IsNotUpdated(dataBaseCountry.CreationTime,dataBaseCountry.LastTimeUpdated))
            {
                // Envia para a camada de tratamento através do padrão Observable
                _bus.Send(new UpdateCountryEvent(filterInput.Name, filterInput.Sigla)).Wait();
                dataBaseCountry = GetCountryInDatabase(filterInput);
            }
            // Retorna para o FrontEnd o resultado
            var countryMapped = Mapper.Map<PaisView>(dataBaseCountry);
            return Task.FromResult(countryMapped);
        }

        private Pais GetCountryInDatabase(CountryToSearch filterInput)
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
                .FirstOrDefault(ct => ct.Nome == filterInput.Name||
                                      ct.SiglaPais2Digitos == filterInput.Sigla ||
                                      ct.SiglaPais3Digitos == filterInput.Sigla);
        }
    }
}