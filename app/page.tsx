import CountriesGrid from "./components/CountriesGrid";

export default async function Home({
  searchParams,
}: {
  searchParams: { region?: string };
}) {
  return (
    <div className="container">
      <h1>homepage</h1>
      <CountriesGrid searchParams={searchParams} />
    </div>
  );
}
