using CountriesGo.Domain.Entities.Base;

namespace CountriesGo.Domain.Entities
{
    public class Eletricidade : EntityBase
    {
        public int[] Voltagens { get; set; }
        public int[] Frequencias { get; set; }
        public PlugTomada[] PlugsTomadas { get; set; }
    }

    public class PlugTomada : EntityBase
    {
        public string TipoTomada { get; set; }
        public string ImagemTomada { get; set; }

        //https://travelbriefing.org/sites/views/default/images/plugs/a.svg
        //https://travelbriefing.org/sites/views/default/images/plugs/b.svg
        //https://travelbriefing.org/sites/views/default/images/plugs/{...}.svg
    }
}
