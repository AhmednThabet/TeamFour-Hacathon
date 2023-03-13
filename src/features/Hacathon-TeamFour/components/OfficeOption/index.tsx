import { useSWR } from "lib/swr";
import React from "react";

const OfficeOption = () => {
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );
  

  console.log(data);

  return (
    <div className="">
      <h2>hello</h2>
    </div>
  );
};

export default OfficeOption;
