import { Card, Select } from "components";
import OfficeOption from "features/Hacathon-TeamFour/components/OfficeOption";
import Recipient from "features/Hacathon-TeamFour/components/Recipient";
import SelectTeamFour from "features/Hacathon-TeamFour/components/SelectTeamFour";
import React from "react";
// import { MockOffice } from "Mock/MockOffice";

const Index = () => {
  return (
    <Card className="min-w-[50%]">
      <div className="payoutSystem max-w[907px] pt-[400px] h-[100vh] bg-white">
        {/* <Card>
        <div className="Office_Section">
          <Select label="Office" options={MockOffice} />
          <Recipient />
        </div>
      </Card> */}
        <OfficeOption />
      </div>
    </Card>
  );
};

export default Index;
