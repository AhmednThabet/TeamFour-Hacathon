import React from "react";
import { Card } from "components";
import Status from "../Status";
import Image from "next/image";
import { Bank, Cash } from "components/svg";
import Settper from "../Setpper";
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
const testData = [
  {
    title: "requested",
    date: "2:24",
    day: "now",
  },
  {
    title: "sent",
    date: "9:03",
    day: "now",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },

  {
    title: "completed",
    day: "now",
    date: "14:83",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },
  {
    title: "completed",
    date: "14:83",
    day: "now",
  },
];

export const TimeLine = ({ data = testData }) => {
  const heightActiveLine = Math.floor(100 / (data.length - 1));
  const heightNonActiveLine = Math.floor(
    ((data.length - 2) / (data.length - 1.5)) * 100
  );
  return (
    <Card className="shadow-sm">
      <h4 className="mb-2">Timeline</h4>
      <div className="">
        <div className="relative z-10">
          <ol className="  flex flex-col gap-4 ">{getItems(data)}</ol>
          <div
            className={`absolute w-[2px]  bg-[#4375FF] top-[2px] left-1/2 -translate-x-1/2 -z-10`}
            style={{ height: `${heightActiveLine}%` }}
          ></div>
          <div
            className={` absolute  w-[2px] bg-gray-400 top-[2px] left-1/2 -translate-x-1/2 -z-20`}
            style={{ height: `${heightNonActiveLine}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default TimeLine;

function getItem(item, isActive) {
  const className = isActive
    ? "border-[#4375FF] bg-[#4375FF]"
    : "border-gray-400 bg-gray-400";
  const pStyle = isActive ? "text-black" : "text-gray-400";
  return (
    <li className=" relative flex flex-row  justify-between">
      <time
        className={` flex-grow text-sm font-normal leading-none text-gray-400 `}
      >
        <p className={pStyle}>{item.date}</p>
        <p className="">{item.day}</p>
      </time>
      <div className="flex-grow-[3]">
        <div
          className={`  absolute w-3 h-3 rounded-full    top-0 -translate-x-1/2 left-1/2  border   ${className}`}
        ></div>
      </div>
      <h3
        className={`flex-grow  capitalize text-sm   text-b font-semibold ${pStyle}`}
      >
        <span>{item.title}</span>
      </h3>
    </li>
  );
}

function getItems(data) {
  let result = [];
  for (let i = data.length - 1; i >= 0; i--) {
    result.push(getItem(data[i], i == data.length - 1));
  }
  return result;
}
