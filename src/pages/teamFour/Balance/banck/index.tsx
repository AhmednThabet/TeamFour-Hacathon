import React from "react";
import { Recipient } from "features/Hacathon-TeamFour/components/Recipient/Recipient";
import { Card } from "components";
import OfficeOption from "features/Hacathon-TeamFour/components/OfficeOption";

const Bank = () => {
  return (
    <div className="flex flex-col">
      <OfficeOption />
      <Recipient />
    </div>
  );
};

export default Bank;
