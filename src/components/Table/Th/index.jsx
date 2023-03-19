import { Triangle } from "components/svg";
import React from "react";

function isUpActive(column, order) {
  return order.baseOn == column && order.isUp;
}
function isDownActive(column, order) {
  return order.baseOn == column && !order.isUp;
}

export function Th({ column, sort, order }) {
  let upClass = "";
  let downClass = "";

  if (isUpActive(column, order)) {
    upClass = "text-gray-600";
  } else if (isDownActive(column, order)) {
    downClass = "text-gray-600";
  }

  return (
    <th key={column} className="py-4 px-4 text-sm font-normal">
      <div className="flex gap-2">
        {column.toUpperCase().replace("_", " ")}
        <div className="flex flex-col gap-1">
          <button onClick={() => sort(column, true)} className={upClass}>
            <Triangle className="m-auto w-[14px] " />
          </button>

          <button onClick={() => sort(column, false)} className={downClass}>
            <Triangle className="rotate-180 w-[14px]" />
          </button>
        </div>
      </div>
    </th>
  );
}

export default Th;
