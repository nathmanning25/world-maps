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
      <Image
        src={props.flags}
        alt={props.alt || `Flag of ${props.country}`}
        width={320}
        height={160}
        className="w-full h-[200px] object-cover rounded-xl"
      />
      <h2 className="mt-2 text-lg font-semibold">{props.country}</h2>
      <p className="mt-2 text-md">Population: {props.population}</p>
      <p className="mt-2 text-md">Region: {props.region}</p>
      <p className="mt-2 text-md">Capital: {props.capital}</p>
    </>
  );
}
