namespace CountriesGo.Domain.Utils
{
    public static class UtilsResources
    {
        public static object GetPropValue(object src, string propName)
        {
            return src.GetType().GetProperty(propName).GetValue(src, null);
        }
    }
}