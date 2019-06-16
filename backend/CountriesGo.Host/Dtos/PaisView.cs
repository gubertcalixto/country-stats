using CountriesGo.Domain.Entities;

namespace CountriesGo.Host.Dtos
{
    public class PaisView
    {
        public string Nome { get; set; }
        public string SiglaPais2Digitos { get; set; }
        public string SiglaPais3Digitos { get; set; }
        public int QuantidadePopulacao { get; set; }
        public string ImagemBandeira { get; set; }
        public string NomenclaturaNativos { get; set; }
        public LocalizacaoPais Localizacao { get; set; }
        public Moeda[] Moeda { get; set; }
        public Linguagem[] Linguagens { get; set; }
        public Telefone Telefone { get; set; }
        public Vacina[] Vacina { get; set; }
        public Eletricidade Eletricidade { get; set; }
    }
}