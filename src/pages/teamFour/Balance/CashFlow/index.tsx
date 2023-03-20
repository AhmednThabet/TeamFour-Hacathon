import React from "react";
import { Recipient, SelectOffice } from "features/Hacathon-TeamFour";

export const CashFlow = () => {
  return (
    <div className="flex flex-col">
      <SelectOffice />
      <Recipient />
    </div>
  );
};

export default CashFlow;
