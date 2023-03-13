import React from "react";
import { Card } from "components";
import Status from "../Status";
import { Bank, Cash } from "components/svg";

export const Header = ({ data = testData }) => {
  return (
    <Card className="shadow-sm">
      <div className="flex justify-between">
        <span>${data.price}</span>
        <Status status={data.status} />
      </div>
      <div className="border-t mt-3 pt-2 border-gray-300 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <strong className="font-medium">{data.x.name}</strong>
          <span className="text-xs text-gray-400">{data.x.number}</span>
        </div>
        <span className="w-[25px]">
          {data.type == "bank" ? <Bank /> : <Cash />}
        </span>
      </div>
    </Card>
  );
};

export default Header;
