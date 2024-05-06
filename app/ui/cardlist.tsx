import { Cards } from "./card";
import data from "../lib/data.json";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const CardList = ({ query }: { query: string }) => {
  const filter = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.region.toLocaleLowerCase() === query
    );
  });
  return (
    <div>
      <p className="text-sm text-zinc-500 mt-5">{`(${filter.length}) country available`}</p>
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

        <p className="text-xl md:text-4xl block">
          {filter.length === 0 ? `No data found for "${query}"` : ""}
        </p>
      </div>
    </div>
  );
};
