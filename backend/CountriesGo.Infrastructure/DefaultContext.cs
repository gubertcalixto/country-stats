using CountriesGo.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CountriesGo.Infrastructure
{
    public class DefaultContext : DbContext
    {
        #region Paises
        public DbSet<Pais> Paises { get; set; }
        public DbSet<Telefone> Telefones { get; set; }
        public DbSet<LocalizacaoPais> Localizacoes { get; set; }
        public DbSet<Linguagem> Linguagens { get; set; }
        public DbSet<Vacina> Vacinas { get; set; }
        public DbSet<Moeda> Moedas { get; set; }
        public DbSet<Eletricidade> Eletricidade { get; set; }
        #endregion
        
        #region Users
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<TentativasLogin> TentativasLogin { get; set; }
        #endregion
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                $@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=CountriesGo;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
    }
}