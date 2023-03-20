import React, { useState } from "react";
import { Button, Card, Select } from "components";
import Addbank from "features/Hacathon-TeamFour/components/Addbank";
import AddWithdrawPreview from "features/Hacathon-TeamFour/components/AddWithdrawPreview";
import OfficeOption from "features/Hacathon-TeamFour/components/OfficeOption";
import BankOption from "features/Hacathon-TeamFour/components/BankOption";

export const BanckFlow = () => {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visibleAddbank, setVisibleAddbank] = useState(false);

  return (
    <Card className="min-w-[50%] flex flex-col items-center relative">
      <div className="payoutSystem max-w[907px] bg-white ">
        <BankOption />
      </div>
      <Addbank
        setVisibleAddbank={setVisibleAddbank}
        visibleAddbank={visibleAddbank}
      />
      <div className="flex justify-end w-full">
        <p
          className=" mt-10 w-5/6 text-blue"
          onClick={() => setVisibleAddbank((pre) => !pre)}
        >
          Addbank
        </p>
      </div>

      {/* <div className="payoutSystem max-w[907px] pt-[400px] h-[100vh] bg-white ">
        <OfficeOption />
      </div> */}

      {/* <Button
        className=" mt-10 w-5/6"
        onClick={() => setVisibleConfirm((pre) => !pre)}
      >
        Withdraw
      </Button> */}

      {/* <Button
        className=" mt-10 w-5/6"
        onClick={() => setVisibleAddbank((pre) => !pre)}
      >
        Addbank
      </Button> */}

      <AddWithdrawPreview
        setvisibleConfirm={setVisibleConfirm}
        visibleConfirm={visibleConfirm}
      />
    </Card>
  );
};

export default BanckFlow;
