import React from "react";
import { Card } from "components";

export const Interstions = ({ data }) => {
  return (
    <Card className="shadow-sm text-sm">
      <h4 h4 className="font-semibold">
        Interstions
      </h4>
      <ul className="flex flex-col gap-2 list-disc pl-4 mt-1">
        {data.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Interstions;
