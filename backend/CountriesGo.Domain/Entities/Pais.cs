﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using CountriesGo.Domain.Interfaces;

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
        public List<Moeda> Moeda { get; set; }
        public List<Linguagem> Linguagens { get; set; }
        public Telefone Telefone { get; set; }
        public List<Vacina> Vacina { get; set; }
        public Eletricidade Eletricidade { get; set; }
        public DateTime? CreationTime { get; set; }
        public DateTime? LastTimeUpdated { get; set; }
        
        
        public void TreatCountryBeforeSave()
        {
            NomeNormalizado = Nome.ToUpper();
            if (CreationTime == null)
                CreationTime = DateTime.Now;
            else
                LastTimeUpdated = DateTime.Now;
            Id = new Guid();
        }
    }
}
