import Image from "next/image";
import { fetchCountriesByName } from "@/app/services/api";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchCountriesByName(params.id);

  return (
    <div className="container flex flex-col">
      {data.map((country) => (
        <div key={country.cca3} className="flex flex-row gap-12">
          <div className="w-2/5">
            <Image
              src={country.flags.png}
              alt={country.flags.alt || `Flag of ${country.flags.alt}`}
              width={320}
              height={160}
              className="w-full h-[350px] object-fill"
            />
          </div>
          <div className="w-3/5 pl-4">
            <h1>{country.name.common}</h1>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Population: {Number(country.population)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
