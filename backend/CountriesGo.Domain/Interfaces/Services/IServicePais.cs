using CountriesGo.Domain.Arguments.Pais;
namespace CountriesGo.Domain.Interfaces.Services
{
    public interface IServicePais
    {
        void ListarPaisesPorContinente(ListarPaisesPorContinenteRequest pesquisa);
        void ListarPaisesPorNome(ListarPaisesPorNomeRequest pesquisa);
        void RetornaPaisPorPesquisa(PesquisaPaisesRequest pesquisa);

    }
}
