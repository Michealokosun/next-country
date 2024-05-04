"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
export const Pagination = ({
  currentpage,
  numberofpages,
}: {
  currentpage: number;
  numberofpages: number;
}) => {
  const searchparam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handlenext = () => {
    currentpage += 1;
    const param = new URLSearchParams(searchparam);
    param.set("page", currentpage.toLocaleString());

    replace(`${pathname}?${param.toString()}`);
  };
  const handleprev = () => {
    currentpage -= 1;
    const param = new URLSearchParams(searchparam);
    param.set("page", currentpage.toLocaleString());

    replace(`${pathname}?${param.toString()}`);
  };

  return (
    <div>
      <div className="flex justify-between w-full items-center mt-3 mb-9">
        <button
          onClick={handleprev}
          disabled={currentpage <= 1}
          className="dark:text-white py-2 disabled:bg-[#bdbdbd] hover:bg-[#243144]  dark:disabled:bg-[#5d636b] cursor-pointer shadow-lg bg-light px-10 dark:bg-[#18212e]"
        >
          Prev
        </button>
        <button
          disabled={currentpage >= numberofpages}
          onClick={handlenext}
          className="dark:text-white py-2 disabled:bg-[#bdbdbd]   dark:disabled:bg-[#5d636b]  cursor-pointer shadow-lg bg-light px-10 dark:bg-[#18212e]"
        >
          Next
        </button>
      </div>
    </div>
  );
};
