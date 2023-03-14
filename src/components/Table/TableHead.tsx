import React from "react";

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="px-6 py-3 rounded-l-lg bg-[#F3F4F6] text-xs font-bold  text-[#9E9E9E]  "
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3  bg-[#F3F4F6] text-xs font-bold  text-[#9E9E9E]  "
        >
          Email
        </th>
        <th
          scope="col"
          className="px-6 py-3  bg-[#F3F4F6] text-xs font-bold  text-[#9E9E9E]  "
        >
          Balance
        </th>
        <th
          scope="col"
          className="px-6 py-3  bg-[#F3F4F6] text-xs font-bold  text-[#9E9E9E]  "
        >
          Status
        </th>
        <th
          scope="col"
          className="px-6 py-3 rounded-r-lg bg-[#F3F4F6] text-xs font-bold  text-[#9E9E9E]  "
        ></th>
      </tr>
    </thead>
  );
};