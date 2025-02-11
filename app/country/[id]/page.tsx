import Image from "next/image";
import Link from "next/link";
import {
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "@/app/services/api";

import BackNavigation from "@/app/components/Layout/BackNavigation";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;
  const countryData = await fetchCountriesByName(id);
  const country = countryData[0];
  const regionData = await fetchCountriesByRegion(country.region);

  return (
    <>
      <BackNavigation />

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-8">
          <div className="w-full md:w-2/5">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              width={320}
              height={160}
              className="w-full h-auto md:w-full object-fill"
            />
          </div>
          <div className="w-full md:w-3/5 p-4 md:p-10">
            <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6">
              {country.name.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-8">
              <p>
                <b>Region: </b> {country.region}
              </p>
              <p>
                <b>Sub Region: </b> {country.subregion}
              </p>
              <p>
                <b>Continent:</b> {country.continents}
              </p>
              <p>
                <b>Capital: </b> {country.capital}
              </p>
              <p>
                <b>Population: </b>{" "}
                {Number(country.population).toLocaleString()}
              </p>
              <p>
                <b>Currency: </b>
                {Object.values(country.currencies)[0]?.name || "N/A"}
              </p>
              <p>
                <b>Currency Symbol: </b>
                {Object.values(country.currencies)[0]?.symbol || "N/A"}
              </p>
              <p>
                <b>Languages: </b> {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="block mt-16">
          <h2 className="font-bold text-xl mb-12">
            Search other countries in {country.region}:
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-x-6 mb-14">
            {[...regionData]
              .sort(() => Math.random() - 0.5)
              .map((regionalCountry) => (
                <li
                  key={regionalCountry.cca3}
                  className="p-2 rounded flex flex-row"
                >
                  <Link
                    href={`/country/${regionalCountry.name.common}`}
                    className="flex items-center"
                  >
                    <Image
                      src={regionalCountry.flags.png}
                      alt={
                        regionalCountry.flags.alt ||
                        `Flag of ${regionalCountry.name.common}`
                      }
                      width={160}
                      height={80}
                      className="w-[50px] h-[30px] object-fill"
                    />
                    <span className="font-bold hover:text-blue-700 pl-3">
                      {regionalCountry.name.common}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
