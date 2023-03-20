import React from "react";

export const RecipientOption = ({ data, customClassName }: any) => {
  return (
    <div
      className={`flex flex-col  w-full  border-gray  px-4 py-2 cursor-pointer ${customClassName}`}
    >
      <div className="flex flex-row-reverse">
        <p className="float-right text-bold">{data && data.name}</p>
      </div>
      <div className="flex justify-between text-gray-dark">
        <p>ID:{data && data.idNumber}</p>
        <p className="">Phone :{data && data.mobile}</p>
      </div>
    </div>
  );
};

export default RecipientOption;
