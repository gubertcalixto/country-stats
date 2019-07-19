using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Usuarios")]
    public class Usuario: BaseEntity
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
        public bool EmailConfimado { get; set; }
        public bool AcessoBloqueado { get; set; }
        public DateTime AcessoBloqueadoDataFinal { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
