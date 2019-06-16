using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Localizacoes")]
    public class LocalizacaoPais: BaseEntity
    {
        public string Continente { get; set; }
        public string RegiaoContinental { get; set; }
        public string Capital { get; set; }
        public long Latitude { get; set; }
        public long Longitude { get; set; }
        public int Zoom { get; set; }
        public string FusoHorario { get; set; }
        public LocalizacaoPais[] PaisesVizinhos { get; set; }
        public string Observacao { get; set; }
    }
}