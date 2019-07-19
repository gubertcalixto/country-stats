namespace CountriesGo.Host.Dtos
{
    public class GetAllPaisResponse
    {
        public string Nome { get; set; }
        public string NomeCompleto { get; set; }
        public string SiglaPais2Digitos { get; set; }
        public string SiglaPais3Digitos { get; set; }
        public string ImagemBandeira { get; set; }
    }
}