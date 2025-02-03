import CountriesGrid from "./components/Layout/CountriesGrid";

export default async function Home({
  searchParams,
}: {
  searchParams: { region?: string; country?: string };
}) {
  return (
    <>
      <CountriesGrid searchParams={searchParams} />
    </>
  );
}
