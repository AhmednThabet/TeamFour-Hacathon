import { Card, Select } from "components";
import OfficeOption from "features/Hacathon-TeamFour/components/OfficeOption";
import SelectTeamFour from "features/Hacathon-TeamFour/components/SelectTeamFour";
import React from "react";
// import { MockOffice } from "Mock/MockOffice";

const Index = () => {
  const MockOffice = [
    {
      value: "firstone",
      label: <OfficeOption />,
    },
    {
      value: "secondone",
      label: "secondeone",
    },
    {
      value: "thirdone",
      label: "thirdeone",
    },
    {
      value: "fourone",
      label: "<OfficeOption />",
    },
  ];

  return (
    <div className="payoutSystem max-w[907px] min-w-[50%] h-[890px]">
      <Card>
        <div className=" h-64 bg-gray flex justify-center items-center">
          shayma section
        </div>
        <div className="Office_Section">
          {/* <Select label="Office" options={MockOffice} /> */}
          <OfficeOption />
        </div>
      </Card>
    </div>
  );
};

export default Index;
