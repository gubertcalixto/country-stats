using CountriesGo.Domain.Entities.Base;

namespace CountriesGo.Domain.Entities
{
    public class Linguagem : EntityBase
    {
        public string Nome { get; set; }
        public string Simbolo { get; set; }
        public double Porcentagem { get; set; }
        public bool Oficial { get; set; }
    }
}
