import React, { useContext, useEffect, useState } from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import Sort from "components/svg/Sort";
import Search from "components/svg/Search";
import DataList from "./useContext";
import axios from "axios";

export const Table = ({ Classname, Data }: any) => {
  const [data, setdata] = useState(Data);

  useEffect(() => {
    handelchange("");
  });

  const handelchange = (text: String) => {
    if (text == "") {
      setdata(Data?.users);
      return;
    }
    const fillterData = Data?.users?.filter((row: any) => {
      return (
        row.firstName.toUpperCase().includes(text.toUpperCase()) ||
        row.lastName.toUpperCase().includes(text.toUpperCase())
      );
    });
    setdata(fillterData);
  };

  return (
    <div className="overflow-x-auto mt-5 min-w-[821px]">
      <div className=" Search flex justify-between rounded-lg bg-[#FFFFFF] drop-shadow px-3 pl-2">
        <div className=" relative w-full ">
          <label htmlFor="hs-table-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="hs-table-search"
            id="hs-table-search"
            className=" block w-full border-none p-5 cursor-pointer pl-12 text-sm rmshadow"
            placeholder="Search..."
            onChange={(e) => handelchange(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center p-4  ">
            <Search />
          </div>
        </div>

        <div className="flex items-center space-x-2 p-5 cursor-pointer hover:text-[#808084]">
          <Sort />
        </div>
      </div>

      <div className=" mainTable  rounded-lg drop-shadow bg-[#FFFFFF] overflow-x-auto  p-5 mt-5">
        <table className="min-w-full ivide-dy bg-[#FFFFFF] my-5 w-full  ">
          <TableHead />
          <tbody className="mt-2">
            {data?.map((person: any, i: any) => (
              <TableBody key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNkOTE2MGY3YzE3ZDY3MGI1ZDZhNmQ0Iiwicm9sZSI6MX0sImV4cCI6MTY3ODM4MDkwMCwiaWF0IjoxNjc4Mjk0NTAwfQ.aPEfY5u0P6ZR8AWHRFDFUgpB2rVUsdKgKBYvs2T73lk";

//   const res = await axios.get(
//     "https://talents-valley-backend.herokuapp.com/api/team/user/list",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const Data = await res.data.data;

//   // By returning { props: { data } }, the Blog component
//   // will receive `data` as a prop at build time
//   return {
//     props: {
//       Data,
//     },
//   };
// }