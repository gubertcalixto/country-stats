using CountriesGo.Domain.Entities.Base;
using CountriesGo.Domain.Enums;
using CountriesGo.Domain.ValueObjects;
using System;
namespace CountriesGo.Domain.Entities
{
    public class Usuario : EntityBase
    {
        public Nome Nome { get; set; }
        public Login Login { get; set; }
        public Email Email { get; set; }
        public bool EmailConfimado { get; set; }
        public DateTime AcessoBloqueadoDataFinal { get; set; }
        public DateTime DataCriacao { get; set; }
        public EnumStatusUsuario StatusUsuario { get; set; }
    }
}

