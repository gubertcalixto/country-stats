using System;

namespace CountriesGo.Host.Config
{
    public static class DatabaseConfig
    { 
        private static int TimeToUpdateOffset { get; } = 15; // In Days
        public static int SeedCountriesInterval { get; } = 30; // In Seconds
        public static int DefaultMaxCount { get; } = 10;

        public static bool IsCountryNotUpdated(DateTime? creationDate, DateTime? updateDate)
        {
            if (creationDate == null)
                return true;
            if (updateDate == null)
                return DateTime.Now.AddDays(TimeToUpdateOffset) < creationDate.Value;
            return DateTime.Now.AddDays(TimeToUpdateOffset) < updateDate.Value;
        }
    }
}