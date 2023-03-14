import React from "react";

const Office = (data: any) => {
  if (data) {
    return (
      <div className="flex w-full flex-col p-5 border-b-[#E2E2E2] border-b-2 cursor-pointer ">
        <div className=" flex w-full justify-between flex-row-reverse">
          <h2 className=" font-bold">{`${data.data.address.split("-")[0]} - ${
            data.data.name
          } `}</h2>
          <h3 className=" text-[#9E9E9E]">
            ساعات العمل: {data.data.startingHour} صباحا -{data.data.endingHour}{" "}
            مساءا
          </h3>
        </div>
        <div className=" flex w-full justify-between flex-row-reverse">
          <h3 className=" text-[#9E9E9E]">{data.data.address.split("-")[1]}</h3>
          <span className=" text-[#9E9E9E]">
            {data.data.fees == 0
              ? "بدون عمولة"
              : `عمولة ${data.data.fees} شيكل`}
          </span>
        </div>
      </div>
    );
  } else {
    return <div>Choese</div>;
  }
};

export default Office;

// address
// :
// "غزة-شارع الشهداء، مقابل برج فلسطين"
// endingHour
// :
// "10:00"
// fees
// :
// 1
// name
// :
// "مكتب الدانا"
// startingHour
// :
// "08:00"
// _id
// :
// "637373ba54ceb455af5a2751"
