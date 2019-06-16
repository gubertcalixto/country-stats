using System;

namespace CountriesGo.Host.Config
{
    public static class DatabaseConfig
    {
        public static int TimeToUpdateOffset { get; set; } = 15;

        public static bool IsNotUpdated(DateTime date)
        {
            return DateTime.Now.AddDays(TimeToUpdateOffset) > date;
        }
    }
}