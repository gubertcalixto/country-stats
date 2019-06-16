using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Linguagens")]
    public class Linguagem: BaseEntity
    {
        public string Nome { get; set; }
        public string Simbolo { get; set; }
        public double Porcentagem { get; set; }
        public bool Oficial { get; set; }
    }
}