using CountriesGo.Domain.Entities.Base;
using System;
namespace CountriesGo.Domain.Entities
{
    public class TentativasLogin : EntityBase
    {
        public Usuario Usuario { get; set; }
        public DateTime Data { get; set; }
        public bool Sucesso { get; set; }
        public string IP { get; set; }
        public string OrigemAcesso { get; set; }
    }
}
