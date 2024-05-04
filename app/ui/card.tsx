import Image from "next/image";

export const Cards = ({ countr }: any) => {
  return (
    <div>
      <div className="max-w-lg bg-white dark:bg-[#18212e] cursor-pointer capitalize rounded overflow-hidden shadow-lg">
        <Image
          width={70}
          height={70}
          className="w-full"
          src={countr.flag}
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-3">{countr.name}</div>
          <p className="text-gray-700 dark:text-gray-400 font-bold text-sm">
            population:{" "}
            <span className=" text-xs font-normal">{countr.population}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-400  my-3 font-bold  text-sm">
            region:{" "}
            <span className=" text-xs font-normal">{countr.region}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-400 font-bold text-sm">
            capital:{" "}
            <span className=" text-xs font-normal">{countr.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
