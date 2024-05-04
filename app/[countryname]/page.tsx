import Image from "next/image";
import React from "react";
import data from "../lib/data.json";

export const dynamic = "force-dynamic";

export default function Detailspage({
  params,
}: {
  params: {
    countryname: string;
  };
}) {
  const code = params.countryname;
  const filter = data.filter((item) => {
    return item.numericCode === code;
  });

  return (
    <>
      {filter.map((item) => (
        <div
          key={item.name}
          className="flex h-screen items-center justify-center"
        >
          <div className="container px-5  md:px-4">
            <div className="flex items-start gap-8 md:items-center flex-col md:flex-row">
              <div className="item-1">
                <Image
                  width={500}
                  height={500}
                  alt="flag img"
                  src={item.flag}
                />
              </div>
              <div className="item-1">
                <h1 className="text-4xl font-bold">{item.name}</h1>
                <div className="flex py-4 flex-col md:flex-row gap-10 ">
                  <div className="">
                    <p className="font-bold  ">
                      Native Name:{" "}
                      <span className=" font-light">{item.nativeName}</span>
                    </p>
                    <p className="font-bold py-3 ">
                      Poulation:{" "}
                      <span className="font-light">{item.population}</span>
                    </p>
                    <p className="font-bold ">
                      Region: <span className="font-light">{item.region}</span>
                    </p>
                    <p className="font-bold py-3 ">
                      Sub Region:{" "}
                      <span className="font-light">{item.subregion}</span>
                    </p>
                    <p className="font-bold ">
                      Capital:{" "}
                      <span className="font-light"> {item.capital}</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold ">
                      Top Level Domain:{" "}
                      <span className="font-light">{item.topLevelDomain}</span>
                    </p>
                    <p className="font-bold py-3 ">
                      Currencies:{" "}
                      <span className="font-light">
                        {item.currencies && item.currencies[0].code}
                      </span>
                    </p>
                    <p className="font-bold ">
                      Languages:{" "}
                      <span className="font-light">
                        {item.languages &&
                          item.languages.map((item) => (
                            <>
                              <span className="font-light">
                                {item.name}, {item.nativeName}, {item.iso639_2}
                              </span>
                            </>
                          ))}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="font-bold ">Border Countries:</p>
                <br />
                <div className="buttons">
                  {item.borders &&
                    item.borders.map((item) => (
                      <>
                        <button className="bg-slate-400 rounded-r-sm shadow-md dark:bg-[#18212e] mx-3 text-white px-5 py-2">
                          {item}
                        </button>
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

{
  /*  */
}
