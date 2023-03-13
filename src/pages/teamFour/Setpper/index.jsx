import React from "react";
import { Card } from "components";
import Status from "../Status";
import Image from "next/image";
import { Bank, Cash } from "components/svg";
/**
 *
 * bank = {
 * name
 * number
 * image
 * }
 *data = {
  price = "300", status = "pending", bank 
 }
 *
 */

function getTimeLine(data) {
  return data.map((item, index) => {
    const isLastOne = index == 0;
    const p = isLastOne ? "text-black" : "text-gray-300";
    const back = isLastOne ? "bg-blue-400" : "bg-gray-400";
    return (
      <p className={`p-4 `}>
        {/* <span>{item.date}</span> */}
        <span className={`block w-4 h-4  rounded-full ${back} `}></span>
        {/* <span className={`block capitalize ${p}`}>{item.title}</span> */}
      </p>
    );
  });
}

export const Settper = ({ data }) => {
  const height = `h-[${Math.floor(100 / data.length) * 2}%]`;
  console.log(height);

  return (
    <div className=" relative flex flex-col z-10">
      <div
        className={`absolute top-[20px] left-[23px] bg-blue-400 bg-gr  -z-10 w-[2px] h-[66%] `}
      ></div>
      <div>{getTimeLine(data)}</div>
    </div>
  );
};

export default Settper;
