import { CardList } from "./ui/cardlist";
import { Search } from "./ui/search";
export const dynamic = "force-dynamic";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="sm:container px-4 mx-auto mt-4">
      <Search />
      <CardList query={query} />
    </main>
  );
}
