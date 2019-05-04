using CountriesGo.Domain.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CountriesGo.Domain.Entities
{
    public class Moeda : EntityBase
    {
        public string Nome { get; set; }
        public string Codigo { get; set; }
        public string Simbolo { get; set; }
        public bool Principal { get; set; }
    }
}
