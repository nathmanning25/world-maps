import CountriesGrid from "./components/Layout/CountriesGrid";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <CountriesGrid searchParams={searchParams} />
    </>
  );
}
