using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("Telefones")]
    public class Telefone: BaseEntity
    {
        public string CodigoTelefone { get; set; }
        public string TelefoneBombeiros { get; set; }
        public string TelefonePolicia { get; set; }
        public string TelefoneAmbulancia { get; set; }
    }
}