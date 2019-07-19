using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Localizacoes")]
    public class LocalizacaoPais: BaseEntity
    {
        public string Continente { get; set; }
        public string RegiaoContinental { get; set; }
        public string Capital { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Zoom { get; set; }
        public string FusoHorario { get; set; }
        public List<LocalizacaoPais> PaisesVizinhos { get; set; }
        public string Observacao { get; set; }
    }
}