import { fetchCountries } from "../../services/api";
import { fetchCountriesByName } from "../../services/api";
import { fetchCountriesByRegion } from "../../services/api";
import Search from "../Filters/Search";
import Dropdown from "../Filters/Dropdown";
import Card from "./Card";

interface CountriesGridProps {
  searchParams: { region?: string; country?: string };
}

export default async function CountriesGrid({
  searchParams,
}: CountriesGridProps) {
  const region = searchParams?.region;
  const country = searchParams?.country;
  let data;

  try {
    data = country
      ? await fetchCountriesByName(country)
      : region
      ? await fetchCountriesByRegion(region)
      : await fetchCountries();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return (
      <>
        <h1 className="text-2xl mt-10">No results found for {country}</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-between my-9 items-center">
        <Search />
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 row-span-10">
        {data.map((country) => (
          <div key={country.cca3} className="card">
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
