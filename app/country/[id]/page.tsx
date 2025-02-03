import Image from "next/image";
import { fetchCountriesByName } from "@/app/services/api";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;
  const data = await fetchCountriesByName(id);

  return (
    <div className="flex flex-col">
      {data.map((country) => (
        <div key={country.cca3} className="flex flex-row gap-12 mt-8">
          <div className="w-2/5">
            <Image
              src={country.flags.png}
              alt={country.flags.alt || `Flag of ${country.flags.alt}`}
              width={320}
              height={160}
              className="w-full h-[250px] object-fill"
            />
          </div>
          <div className="w-3/5 p-10">
            <h1 className="font-bold text-3xl mb-6">{country.name.common}</h1>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
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
      ))}
    </div>
  );
}
