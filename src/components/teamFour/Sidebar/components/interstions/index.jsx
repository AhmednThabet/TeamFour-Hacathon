import React from "react";
import { Card } from "components";

export const Instructions = ({ data }) => {
  return (
    <Card className="shadow-sm text-sm">
      <h4 h4 className="font-semibold">
        Instructions
      </h4>
      <ul className="flex flex-col gap-2 list-disc list-inside ">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Instructions;
