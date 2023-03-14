import { Button, Card, Select } from "components";
import Addbank from "features/Hacathon-TeamFour/components/Addbank";
import OfficeOption from "features/Hacathon-TeamFour/components/OfficeOption";
import WithdrawPreview from "features/Hacathon-TeamFour/components/withdrawPreview";
import React, { useState } from "react";
// import { MockOffice } from "Mock/MockOffice";

const Index = () => {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visibleAddbank, setVisibleAddbank] = useState(false);

  const handleConfirm = () => {
    setVisibleConfirm((pre) => !pre);
  };
  const handleAddbank = () => {
    setVisibleAddbank((pre) => !pre);
  };

  return (
    <Card className="min-w-[50%] flex flex-col items-center relative">
      <div className="payoutSystem max-w[907px] pt-[400px] h-[100vh] bg-white ">
        <OfficeOption />
      </div>
      <Button className=" mt-10 w-5/6" onClick={handleConfirm}>
        Withdraw
      </Button>

      <Button className=" mt-10 w-5/6" onClick={handleAddbank}>
        Addbank
      </Button>

      {visibleConfirm && (
        <Card className=" absolute left-[15%] top-[15%]">
          <WithdrawPreview handleConfirm={handleConfirm} />
        </Card>
      )}

      <Card className=" absolute left-[15%] top-[15%]">
        <Addbank
          setVisibleAddbank={setVisibleAddbank}
          visibleAddbank={visibleAddbank}
        />
      </Card>
    </Card>
  );
};

export default Index;
