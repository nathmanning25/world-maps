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
        <div className="card-body border-r-2 border-b-2 border-l-2 py-2 px-2">
          <h2 className="text-lg font-semibold">{props.country}</h2>
          <p className="mt-2 text-md">Population: {props.population}</p>
          <p className="mt-2 text-md">Region: {props.region}</p>
          <p className="mt-2 text-md">Capital: {props.capital}</p>
        </div>
      </Link>
    </>
  );
}
