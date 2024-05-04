import data from "./data.json";

export const filterdata = async (value: string) => {
  data.filter((item) => {
    return item.name.toLocaleLowerCase().includes(value);
  });
};
