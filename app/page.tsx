import { CardList } from "./ui/cardlist";
import { Pagination } from "./ui/pagination";
import { Search } from "./ui/search";
import data from "./lib/data.json";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page || 1);
  const numberofpages = Math.round(data.length / 20);
  return (
    <main className="sm:container px-4 mx-auto mt-4">
      <Search query={query} />
      <CardList currentpage={page} query={query} />
      <Pagination numberofpages={numberofpages} currentpage={page} />
    </main>
  );
}
