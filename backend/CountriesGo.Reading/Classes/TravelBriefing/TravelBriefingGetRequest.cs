// ReSharper disable InconsistentNaming
// ReSharper disable ClassNeverInstantiated.Global
using System.Collections.Generic;

namespace CountriesGo.Reading.Classes.TravelBriefing
{
    public class TravelBriefingGetRequest
    {
        public TravelBriefingNames Names { get; set; }
        public TravelBriefingMaps Maps { get; set; }
        public TravelBriefingTimezone Timezone { get; set; }
        public List<TravelBriefingLanguage> Language { get; set; }
        public TravelBriefingElectricity Electricity { get; set; }
        public TravelBriefingTelephone Telephone { get; set; }
        public TravelBriefingWater Water { get; set; }
        public List<TravelBriefingVaccination> Vaccinations { get; set; }
        public TravelBriefingCurrency Currency { get; set; }
        public List<TravelBriefingNeighbor> Neighbors { get; set; }
    }
    public abstract class TravelBriefingNames
    {
        public string Name { get; set; }
        public string Full { get; set; }
        public string Iso2 { get; set; }
        public string Iso3 { get; set; }
        public string Continent { get; set; }
    }

    public abstract class TravelBriefingMaps
    {
        public string Lat { get; set; }
        public string Long { get; set; }
        public string Zoom { get; set; }
    }

    public abstract class TravelBriefingTimezone
    {
        public string Name { get; set; }
    }

    public abstract class TravelBriefingLanguage
    {
        public string Language { get; set; }
        public string Official { get; set; }
    }

    public abstract class TravelBriefingElectricity
    {
        public string Voltage { get; set; }
        public string Frequency { get; set; }
        public List<string> Plugs { get; set; }
    }

    public abstract class TravelBriefingTelephone
    {
        public string CallingCode { get; set; }
        public string Police { get; set; }
        public string Ambulance { get; set; }
        public string Fire { get; set; }
    }

    public abstract class TravelBriefingWater
    {
        public string Short { get; set; }
        public string Full { get; set; }
    }

    public abstract class TravelBriefingVaccination
    {
        public string Name { get; set; }
        public string Message { get; set; }
    }


    public abstract class TravelBriefingCurrency
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Symbol { get; set; }
        public string Rate { get; set; }
    }

    public abstract class TravelBriefingNeighbor
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }
}