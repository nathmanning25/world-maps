import { fetchCountries } from "./services/api";
import Filters from "./components/Filters/Filters";
import Card from "./components/Card";

export default async function Home() {
  const data = await fetchCountries();

  console.log(data);

  return (
    <div className="container">
      <h1>homepage</h1>
      <Filters />
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
    </div>
  );
}
