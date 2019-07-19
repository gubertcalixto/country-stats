using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Moedas")]
    public class Moeda: BaseEntity
    {
        public string Nome { get; set; }
        public string Codigo { get; set; }
        public string Simbolo { get; set; }
        public bool Principal { get; set; }
    }
}