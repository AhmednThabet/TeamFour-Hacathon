import React from "react";
import { Card } from "components";

export const Details = ({ data, isBank = true }) => {
  return (
    <Card className="shadow-sm text-sm">
      <h4 className="font-semibold">Details</h4>
      <div>
        <p className="flex justify-between items-center">
          <span className="block capitalize text-gray-400">
            {isBank ? "Bank Account Name" : "recipient name"}
          </span>
          <span>{data.name}</span>
        </p>
        <p className="flex justify-between items-center">
          <span className="block capitalize text-gray-400">expected date</span>
          <span>{data.date}</span>
        </p>
      </div>
    </Card>
  );
};

export default Details;
