import React from "react";
import { Card } from "components";

export const TimeLine = ({ data = [] }) => {
  let heightActiveLine = Math.floor((1 / data.length) * 100);
  let heightNonActiveLine = Math.floor(
    ((data.length - 2) / (data.length - 1.2)) * 100
  );
  if (data.length <= 1) {
    heightActiveLine = "";
    heightNonActiveLine = "";
  }
  return (
    <Card className="shadow-sm">
      <h4 className="mb-2">Timeline</h4>
      <div className="">
        <div className="relative z-10 w-[70%]">
          <ol className="  flex flex-col  ">{getItems(data)}</ol>
          <div
            className={`absolute w-[2px]  bg-[#4375FF] top-[2px] left-[50%] -translate-x-1/2 -z-10`}
            style={{ height: `${heightActiveLine}%` }}
          ></div>
          <div
            className={` absolute  w-[2px] bg-gray-400 top-[2px] left-[50%] -translate-x-1/2 -z-20`}
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
    <li key={Date.now()}>
      <h3
        className={` w-full flex flex-row justify-between relative  capitalize text-xs  text-b font-semibold pb-4  ${pStyle}`}
      >
        <time className={`  text-sm font-normal leading-none text-gray-400 `}>
          <p className={pStyle}>
            {new Date(item.createdAt).toLocaleTimeString("en-us", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
          <p className="text-xs">{getDay(item.createdAt)}</p>
        </time>

        <div
          className={`absolute w-3 h-3 rounded-full    top-0 -translate-x-1/2 left-[50%]  border   ${className}`}
        ></div>
        <span>{item.status}</span>
      </h3>
    </li>
  );
}

function getItems(data) {
  return data.map((item, index) => getItem(item, index == 0));
}

function getDay(time) {
  return "2 Days ago ";
}
