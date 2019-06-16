using System;

namespace CountriesGo.Domain.Entities
{
    public interface IBaseUpdatableEntity
    {
        DateTime LastTimeUpdated { get; set; }
    }
}