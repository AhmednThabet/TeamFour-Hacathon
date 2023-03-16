import React from "react";
import { Card } from "components";

export const Details = ({ data }) => {
  return (
    <Card className="shadow-sm text-xs md:text-sm">
      <h4 className="font-semibold">Details</h4>
      <div>
        <p className="flex justify-between items-center">
          <span className="block capitalize text-gray-400">
            {data.isBank ? "Bank Account Name" : "recipient name"}
          </span>
          <span>{data.provider.name}</span>
        </p>
        <p className="flex justify-between items-center">
          <span className="block capitalize text-gray-400">expected date</span>
          <span>Within 24 Hours (Avg: 2hrs)</span>
        </p>
      </div>
    </Card>
  );
};

export default Details;
