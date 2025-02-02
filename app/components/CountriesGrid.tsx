import { fetchCountries } from "../services/api";
import { fetchCountriesByRegion } from "../services/api";
import Dropdown from "./Filters/Dropdown";
import Card from "./Card";

interface CountriesGridProps {
  searchParams: { region?: string };
}

export default async function CountriesGrid({
  searchParams,
}: CountriesGridProps) {
  const region = searchParams.region;
  const data = region
    ? await fetchCountriesByRegion(region)
    : await fetchCountries();

  return (
    <>
      <div className="flex justify-between my-9">
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 row-span-10">
        {data.map((country) => (
          <div key={country.cca3}>
            <Card
              country={country.name.common}
              flags={country.flags.png}
              alt={country.flags.alt}
              population={Number(country.population)}
              region={country.region}
              capital={country.capital?.[0] || "No capital"}
            />
          </div>
        ))}
      </div>
    </>
  );
}
