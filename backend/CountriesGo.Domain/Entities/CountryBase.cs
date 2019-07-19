using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CountriesGo.Domain.Entities
{
    [Table("CountriesList")]
    public class CountryBase: BaseEntity
    {
        [Required]
        public string CountryName { get; set; }
        [Required]
        public string CountryIso2 { get; set; }
    }
}