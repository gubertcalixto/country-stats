using CountriesGo.Domain.Interfaces.Arguments;
using CountriesGo.Domain.ValueObjects;

namespace CountriesGo.Domain.Arguments.Usuario
{
    public class CadastrarUsuarioRequest : IRequest
    {
        public Nome Nome { get; set; }
        public Login Login { get; set; }
        public Email Email { get; set; }
    }
}
