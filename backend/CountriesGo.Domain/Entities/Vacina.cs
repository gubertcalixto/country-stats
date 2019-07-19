using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Vacinas")]
    public class Vacina: BaseEntity
    {
        public string Nome { get; set; }
        public RiscoVacina RiscoVacina { get; set; }
        public string Observacoes { get; set; }
    }

    public enum RiscoVacina
    {
        Epidemia = 5,
        Altissimo = 4,
        Alto = 3,
        Medio = 2,
        Baixo = 1,
        Minimo = 0
    }
}