using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Paises")]
    public class Pais: BaseEntity, IBaseUpdatableEntity
    {
        public string Nome { get; set; }
        public string NomeCompleto { get; set; }
        public string NomeNormalizado { get; set; }
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
        public DateTime LastTimeUpdated { get; set; }
    }
}
