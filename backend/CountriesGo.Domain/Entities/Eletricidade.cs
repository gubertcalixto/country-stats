using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Eletricidade")]
    public class Eletricidade: BaseEntity
    {
        public EletricidadeVoltagem Voltagens { get; set; }
        public EletricidadeFrequencia Frequencias { get; set; }
        public List<PlugTomada> PlugsTomadas { get; set; }

    }

    public class EletricidadeVoltagem: BaseEntity
    {
        public string NumeroVoltagem { get; set; }
    }

    public class EletricidadeFrequencia: BaseEntity
    {
        public string FrequenciaValor { get; set; }
    }

    public class PlugTomada: BaseEntity
    {
        public string TipoTomada { get; set; }
        public string ImagemTomada { get; set; }

        //https://travelbriefing.org/sites/views/default/images/plugs/a.svg
        //https://travelbriefing.org/sites/views/default/images/plugs/b.svg
        //https://travelbriefing.org/sites/views/default/images/plugs/{...}.svg
    }
}