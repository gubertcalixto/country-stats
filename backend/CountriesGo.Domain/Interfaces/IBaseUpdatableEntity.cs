using System;

namespace CountriesGo.Domain.Interfaces
{
    public interface IBaseUpdatableEntity
    {
        DateTime? CreationTime { get; set; }
        DateTime? LastTimeUpdated { get; set; }
    }
}