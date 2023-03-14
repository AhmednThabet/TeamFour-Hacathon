import More from "components/svg/More";
import React, { useState } from "react";

export const TableBody = ({ data }: any) => {
  const color =
    data?.verifiedId?.status !== "not_uploaded"
      ? "text-[#4BAE4F]"
      : "text-[#F50000]";

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <tr
        onClick={() => setIsDrawerOpen((open) => !open)}
        className=" hidden sm:table-row border-b hover:bg-[#F3F4F6] rounded-xl -px-5"
      >
        <td className=" flex -ml-5 items-center gap-3 px-6 py-4 text-sm  text-[#707070] whitespace-nowrap">
          <div className=" h-10 w-10 flex items-center justify-center rounded-[50%]  text-white bg-[#8C8C8C]">
            {data.firstName[0].toUpperCase()}
          </div>
          {data.firstName + " " + data.lastName}
        </td>
        <td className="px-6 py-4 text-sm text-[#8C8C8C] whitespace-nowrap">
          {data.email}
        </td>
        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
          {data.balance + "$"}
        </td>
        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
          <a className={color} href="#">
            {data.verifiedId.status !== "not_uploaded"
              ? "Verified"
              : "Not Verified"}
          </a>
        </td>
        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
          <a href="#">
            <More />
          </a>
        </td>
      </tr>
    </>
  );
};