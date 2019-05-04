using CountriesGo.Domain.Enums;
using CountriesGo.Domain.Interfaces.Arguments;
using CountriesGo.Domain.ValueObjects;
using System;

namespace CountriesGo.Domain.Arguments.Usuario
{
    public class UsuarioResponse : IResponse
    {
        public Guid Id { get; set; }
        public Nome Nome { get; set; }
        public Email Email { get; set; }
        public string Login { get; set; }
        public string Message { get; set; }
        public EnumStatusUsuario StatusUsuario { get; set; }
    }
}
