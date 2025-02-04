import Link from "next/link";
import Image from "next/image";

interface CardProps {
  country: string;
  flags: string;
  alt: string | undefined;
  population: number;
  region: string;
  capital: string;
}

export default function Card(props: CardProps) {
  return (
    <>
      <Link href={`/country/${props.country}`}>
        <Image
          src={props.flags}
          alt={props.alt || `Flag of ${props.country}`}
          width={320}
          height={160}
          className="w-full h-[200px] object-fill rounded-tl-xl rounded-tr-xl"
        />
        <div className="card-body custom-shadow py-2 px-3">
          <h2 className="text-lg font-semibold">{props.country}</h2>
          <p className="text-md">
            Population: {props.population.toLocaleString()}
          </p>
          <p className="text-md">Region: {props.region}</p>
          <p className="text-md">Capital: {props.capital}</p>
        </div>
      </Link>
    </>
  );
}
