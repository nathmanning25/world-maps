import Image from "next/image";
import { fetchCountriesByName } from "@/app/services/api";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchCountriesByName(params.id);

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
              className="w-full h-[350px] object-fill"
            />
          </div>
          <div className="w-3/5 p-10">
            <h1 className="font-bold text-3xl mb-6">{country.name.common}</h1>
            <div className="column">
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
              <p>
                <b>Population:</b> {Number(country.population)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
