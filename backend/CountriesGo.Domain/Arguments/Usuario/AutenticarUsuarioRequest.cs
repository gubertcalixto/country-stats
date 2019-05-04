using CountriesGo.Domain.Interfaces.Arguments;
using CountriesGo.Domain.ValueObjects;

namespace CountriesGo.Domain.Arguments.Usuario
{
    public class AutenticarUsuarioRequest : IRequest
    {
        public string User { get; set; }
        public string Email { get; set; }
        public string password { get; set; }
    }
}
