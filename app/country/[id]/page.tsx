import Image from "next/image";
import Link from "next/link";
import {
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "@/app/services/api";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;
  const countryData = await fetchCountriesByName(id);
  const country = countryData[0];
  const regionData = await fetchCountriesByRegion(country.region);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-8">
        <div className="w-full md:w-2/5">
          <Image
            src={country.flags.png}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            width={320}
            height={160}
            className="w-full h-[200px] md:h-[250px] object-fill"
          />
        </div>
        <div className="w-full md:w-3/5 p-4 md:p-10">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6">
            {country.name.common}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-8">
            <p>
              <b>Region:</b> {country.region}
            </p>
            <p>
              <b>Sub Region:</b> {country.subregion}
            </p>
            <p>
              <b>Continent:</b> {country.continents}
            </p>
            <p>
              <b>Capital:</b> {country.capital}
            </p>
            <p>
              <b>Population:</b> {Number(country.population)}
            </p>
            <p>
              <b>Currency:</b>{" "}
              {Object.values(country.currencies)[0]?.name || "N/A"}
            </p>
            <p>
              <b>Currency Symbol:</b>{" "}
              {Object.values(country.currencies)[0]?.symbol || "N/A"}
            </p>
            <p>
              <b>Languages:</b> {Object.values(country.languages).join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="block mt-8">
        <h2 className="font-bold text-xl mb-4">
          Search other countries in {country.region}:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {regionData.map((regionalCountry) => (
            <div key={regionalCountry.cca3} className="p-2 bg-gray-100 rounded">
              <Link href={`/country/${regionalCountry.name.common}`}>
                {regionalCountry.name.common}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
