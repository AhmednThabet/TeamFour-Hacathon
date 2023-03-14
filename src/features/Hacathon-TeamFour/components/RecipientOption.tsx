import React from "react";

const RecipientOption = () => {
  return (
    <div className="flex flex-col  w-full  border-gray  px-4 py-2 cursor-pointer ">
      <div className="flex flex-row-reverse">
        <p className="float-right text-bold">محمد خلف</p>
      </div>
      <div className="flex justify-between text-gray-dark">
        <p>ID:55555555</p>
        <p className="">Phone :0000000000000</p>
      </div>
    </div>
  );
};

export default RecipientOption;
