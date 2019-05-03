using CountriesGo.Domain.Entities.Base;
using CountriesGo.Domain.Enums;

namespace CountriesGo.Domain.Entities
{
    public class Vacina : EntityBase
    {
        public string Nome { get; set; }
        public EnumRiscoVacina RiscoVacina { get; set; }
        public string Observacoes { get; set; }
    }
}
