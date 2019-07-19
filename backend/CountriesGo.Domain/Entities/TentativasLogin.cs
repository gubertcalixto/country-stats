using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("TentativasLogin")]
    public class TentativasLogin: BaseEntity
    {
        public Usuario Usuario { get; set; }
        public DateTime Data { get; set; }
        public bool Sucesso { get; set; }
        public string IP { get; set; }
        public string OrigemAcesso { get; set; }
    }
}
