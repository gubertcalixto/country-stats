using CountriesGo.Domain.Entities.Base;
namespace CountriesGo.Domain.Entities
{
    public class Telefone : EntityBase
    {
        public string CodigoTelefone { get; set; }
        public string TelefoneBombeiros { get; set; }
        public string TelefonePolicia { get; set; }
        public string TelefoneAmbulancia { get; set; }
    }
}