using CountriesGo.Domain.Arguments.Usuario;
using CountriesGo.Domain.Entities;
namespace CountriesGo.Domain.Interfaces.Services
{
    public interface IServiceUsuario
    {
        Usuario AutenticarUsuario(AutenticarUsuarioRequest usuario);
        Usuario CadastrarUsuario(CadastrarUsuarioRequest usuario);
    }
}
