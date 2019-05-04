using CountriesGo.Domain.Entities.Base;

namespace CountriesGo.Domain.Entities
{
    public class LocalizacaoPais : EntityBase
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