import React from "react";
import { Card, Status } from "./../../../../../components";
import { Bank, Cash } from "components/svg";

export const Header = ({ data }) => {
  return (
    <Card className="shadow-sm">
      <div className="flex justify-between">
        <span>${data.amount}</span>
        <Status status={data.status} />
      </div>
      <div className="border-t mt-3 pt-2 border-gray-300 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <strong className="font-medium">{data.provider.name}</strong>
          <span className="text-xs text-gray-400">{data?.provider.infos}</span>
        </div>
        <span className="w-[25px]">{data.isBank ? <Bank /> : <Cash />}</span>
      </div>
    </Card>
  );
};

export default Header;
