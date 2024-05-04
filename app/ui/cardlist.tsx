import { Cards } from "./card";
import data from "../lib/data.json";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const CardList = ({
  query,
  currentpage,
}: {
  query: string;
  currentpage: number;
}) => {
  const postperpage: number = 20;
  const lastindexofcard: number = postperpage * currentpage;
  const firstindexofcard: number = lastindexofcard - postperpage;
  const paginatedata = data.splice(firstindexofcard, lastindexofcard);
  const filter = paginatedata.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.region.toLocaleLowerCase() === query
    );
  });
  return (
    <div className="flex relative justify-between items-center mx-auto flex-wrap gap-3 mt-16">
      {filter.map((country) => (
        <div
          key={country.name}
          className="w-full  sm:w-1/3 md:w-mdw lg:w-1/4 xl:w-1/6 mb-4 "
        >
          <Link href={`/${country.numericCode}`}>
            <Cards countr={country} />
          </Link>
        </div>
      ))}

      <p>{filter.length === 0 ? "No data found check next page" : ""}</p>
    </div>
  );
};
