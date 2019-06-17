using System;

namespace CountriesGo.Host.Config
{
    public static class DatabaseConfig
    {
        public static int TimeToUpdateOffset { get; set; } = 15;

        public static bool IsNotUpdated(DateTime? creationDate, DateTime? updateDate)
        {
            if (creationDate == null)
                return true;
            if (updateDate == null)
                return DateTime.Now.AddDays(TimeToUpdateOffset) > creationDate.Value;
            return DateTime.Now.AddDays(TimeToUpdateOffset) > updateDate.Value;
        }
    }
}