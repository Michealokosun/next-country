"use client";

import React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export const Search = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const handlesearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchparams);
    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="flex relative  justify-start items-start md:justify-between flex-col md:flex-row md:items-center gap-5">
      <div className="search-input flex-1   w-96 ">
        <input
          className="py-3 dark:shadow-lg dark:bg-[#18212e] text-slate-400 placeholder-slate-400 px-3 text-sm focus:outline-gray-200 rounded-sm shadow-md focus:border-gray-100 w-96"
          type="text"
          placeholder="Search your country..."
          name="search"
          onChange={handlesearch}
          defaultValue={searchparams.get("search")?.toString()}
        />
      </div>

      <div className="">
        <select
          className="py-3 dark:shadow-lg dark:bg-[#18212e] focus:outline-gray-200  text-slate-400 capitalize  shadow-md text-sm px-2"
          name="select"
          id=""
          onChange={handlesearch}
        >
          <option value="">select your country</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
