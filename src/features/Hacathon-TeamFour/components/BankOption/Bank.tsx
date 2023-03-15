import React, { useState } from "react";

const Bank = ({ data }: any) => {
  const [branch, setBranch] = useState<any>();
  console.log(data);

  (function () {
    switch (data?.bankBranch) {
      case "Rimal":
        setBranch("0454");
        break;
      case "Nussairat":
        setBranch("0448");
        break;
      case "Main Branch":
        setBranch("0451");

        break;
      case "Khan Younis":
        setBranch("0452");

        break;
      case "Jabalia":
        setBranch("0453");

        break;
      case "Rafah":
        setBranch("0454");

        break;
    }
  })();

  return (
    <div className="flex w-full min-w-[550px] flex-col p-5 border-b-[#E2E2E2] border-b-2 cursor-pointer ">
      <div>
        <h2>{data?.accountName}</h2>
        <h2>
          {branch +
            "-" +
            data?.accountNumber +
            "-" +
            "001" +
            "-" +
            data?.ledger +
            "-" +
            "000"}
        </h2>
      </div>
    </div>
  );
};

export default Bank;

// {
//   "_id": "6411c6577fb7075da820985b",
//   "accountName": "HEBA SKHAIL BANK",
//   "accountNumber": "201720911454",
//   "bankBranch": "Rimal",
//   "bankName": "Bank of Palestine",
//   "ledger": "3100",
//   "currency": "USD",
//   "createdAt": "2023-03-15T13:21:27.782Z",
//   "updatedAt": "2023-03-15T13:21:27.782Z"
// }
