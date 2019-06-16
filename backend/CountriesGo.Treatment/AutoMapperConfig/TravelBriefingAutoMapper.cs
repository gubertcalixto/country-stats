using AutoMapper;
using CountriesGo.Domain.Entities;
using CountriesGo.Reading.Classes.TravelBriefing;

namespace CountriesGo.Treatment.AutoMapperConfig
{
    public class TravelBriefingAutoMapper: Profile
    {
        public TravelBriefingAutoMapper()
        {
            //CreateMap<TravelBriefingGetRequest, Pais>()
            CreateMap<TravelBriefingGetRequest, Pais>()
                // NAMES
                .ForMember(x => x.Nome, op => op.MapFrom(e => e.Names.Name))
                .ForMember(x => x.NomeCompleto, op => op.MapFrom(e => e.Names.Full))
                .ForMember(x => x.SiglaPais2Digitos, op => op.MapFrom(e => e.Names.Iso2))
                .ForMember(x => x.SiglaPais3Digitos, op => op.MapFrom(e => e.Names.Iso3))
                // LOCATION
                .ForMember(x => x.Localizacao.Latitude, op => op.MapFrom(e => e.Maps.Lat))
                .ForMember(x => x.Localizacao.Longitude, op => op.MapFrom(e => e.Maps.Long))
                .ForMember(x => x.Localizacao.Zoom, op => op.MapFrom(e => e.Maps.Zoom))
                .ForMember(x => x.Localizacao.Continente, op => op.MapFrom(e => e.Names.Continent))
                .ForMember(x => x.Localizacao.FusoHorario, op => op.MapFrom(e => e.Timezone.Name))
                // TODO LANGUAGE
                // ELECTRICITY
                .ForMember(x => x.Eletricidade.Frequencias, op => op.MapFrom(e => e.Electricity))
                .ForMember(x => x.Eletricidade.Voltagens, op => op.MapFrom(e => e.Electricity))
                .ForMember(x => x.Nome, op => op.MapFrom(e => e.Names.Name));


//            CreateMap<TBElectricity, EletricidadeFrequencia>()
//                .ForMember(x => x.FrequenciaValor, op => op.MapFrom(e => e.Frequency)).ReverseMap();
//            CreateMap<TBElectricity, EletricidadeVoltagem>()
//                .ForMember(x => x.NumeroVoltagem, op => op.MapFrom(e => e.Voltage)).ReverseMap();
//            CreateMap<TBElectricity, PlugTomada>()
//                .ForMember(x => x.TipoTomada, op => op.MapFrom(e => e.Plugs)).ReverseMap();
        }
    }
}