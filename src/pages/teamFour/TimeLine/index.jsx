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
  },
  {
    title: "sent",
    date: "9:03",
  },
  {
    title: "completed",
    date: "14:83",
  },
];

export const TimeLine = ({ data = testData }) => {
  const classes = {
    main: {
      div: " absolute w-3 h-3 bg-gray-200 rounded-full  top-0 left-0 -translate-x-1/2   border border-white border-[#4375FF] bg-[#4375FF]",
    },
    second: {
      div: "absolute w-3 h-3 bg-gray-200 rounded-full  top-0 left-0 -translate-x-1/2 border border-white dark:border-gray-900 dark:bg-gray-700",
      h3: "",
    },
  };
  return (
    <Card className="shadow-sm">
      <h4 className="mb-2">Timeline</h4>
      {/* <Settper data={data} /> */}
      <div className="">
        <ol class=" relative flex flex-col ">
          {getItems(data, classes)}
          {/* <div className=" absolute h-full w-2 bg-red top-0 left-1/2 -translate-x-1/2 "></div> */}
        </ol>
      </div>
    </Card>
  );
};

export default TimeLine;

function getItem(item, className = "") {
  return (
    <li class=" flex flex-row  justify-between">
      <time class=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        February 2022
      </time>
      <div className="relative w-1 bg-red  ">
        <div className="absolute w-3 h-3 rounded-full    top-0 -translate-x-1/2   border  border-[#4375FF] bg-[#4375FF]"></div>
      </div>
      <h3 class=" border  border-blue  text-b font-semibold text-gray-900 relative">
        Application UI
        {/* <div class={className.div}></div> */}
      </h3>
    </li>
  );
}

function getItems(data, classes) {
  let result = [];
  for (let i = data.length - 1; i >= 0; i--) {
    const classBransh = i == 0 ? classes.main : classes.second;
    result.push(getItem(data[i], classBransh));
  }
  return result;
}
