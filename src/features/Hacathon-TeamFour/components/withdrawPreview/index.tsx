import { Button, Card } from "components";
import React from "react";

export const WithdraWPrevieW = ({ setvisibleConfirm }: any) => {
  return (
    <Card className=" w-[500px]">
      <div className=" flex flex-col items-center relative p-10 ">
        <div className=" Withdraw Amount flex flex-col items-center">
          <h2 className=" text-2xl font-bold mb-5">Withdraw Preview</h2>
          <span
            className=" absolute right-0 top-0 font-bold cursor-pointer"
            onClick={() => setvisibleConfirm((pre) => !pre)}
          >
            X
          </span>
          <h4 className=" text-[#8C8C8C]">Amount:</h4>
          <h2 className=" text-[#4375FF] text-2xl font-bold">240.00 USD</h2>
        </div>
        <div>
          <h4 className=" text-[#8C8C8C]">Transferred to:</h4>
          <div className=" w-full h-[100px] border-2 p-2 my-2 rounded-md">
            transferred components
          </div>
          <div className=" border-2 flex flex-col px-5 py-1 rounded-md">
            <div className=" flex justify-between gap-4 my-1 text-sm">
              <h4>Recipient name</h4>
              <h4>سامي عمر</h4>
            </div>
            <div className=" flex justify-between gap-4 my-1 text-sm">
              <h4>Transfer amount</h4>
              <h4>$300</h4>
            </div>
            <div className=" flex justify-between gap-4 my-1 text-sm border-b-2 ">
              <h4>Fee</h4>
              <h4>Free</h4>
            </div>
            <div className=" flex justify-between gap-4 my-1 text-sm">
              <h4>You &apos ll get</h4>
              <h4>$300</h4>
            </div>
          </div>
          <div className="directions">
            <h3 className=" mb-2">- Estimated arrival: 2 business days.</h3>
            <h3 className=" mb-2">
              - Transfers made after 9:00 PM or on weekends takes longer.
            </h3>
            <h3 className=" mb-2">
              - All transfers are subject to review and could be delayed or
              stopped if we identify an issue.
            </h3>
          </div>
        </div>

        <Button
          className=" mt-10 w-5/6"
          onClick={() => setvisibleConfirm((pre) => !pre)}
        >
          Confirm
        </Button>
      </div>
    </Card>
  );
};

export default WithdraWPrevieW;
