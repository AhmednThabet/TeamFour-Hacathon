import { TimeLine, Interstion, Header, Details } from "./components";
import { Aside, Button, Loading } from "components";
import { useEffect, useState } from "react";
import { useFetch } from "hooks";

function format(data) {
  let finshData = {
    status: data.status,
    amount: data.amount,
    history: data.history,
  };

  if (data.typeWithdraw == "bank") {
    finshData = {
      provider: {
        name: data.bank.bankName,
        infos: data.bank.accountNumber,
      },
      isBank: true,
      ...finshData,
    };
  } else {
    finshData = {
      provider: {
        name: data.office.name,
        infos: data.office.address,
        fees: data.office.fees,
      },
      isBank: false,
      ...finshData,
    };
  }
  return finshData;
}

const bankExample = {
  _id: "640f895676001ef82fbff621",
  amount: 300,
  bank: {
    _id: "640f300b6f45e615f917e8ee",
    accountName: "Heba Skhail",
    accountNumber: "2017201423132",
    bankBranch: "003-Al-Naser",
    bankName: "Bank of Palestine",
  },
  typeWithdraw: "bank",
  status: "ready",
  createdAt: "2023-03-13T20:36:38.526Z",
  updatedAt: "2023-03-13T20:36:38.526Z",
  history: [
    {
      _id: "640f895776001ef82fbff62c",
      type: "withdraw",
      action: "request bank",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T20:36:39.697Z",
      updatedAt: "2023-03-13T20:36:39.697Z",
    },
  ],
};

const cashExample = {
  _id: "640f5cb778fd73b40d217e37",
  amount: 6000,
  office: {
    _id: "6310a930d74275d6cdd15be3",
    name: "مكتب الدانا",
    address: "غزة-شارع الشهداء، مقابل برج فلسطين",
    fees: 1,
  },
  typeWithdraw: "cash",
  status: "completed",
  recipient: {
    _id: "640f135aee0733bd4a2a8d4e",
    name: "Heba Skhail Recipient 1",
    mobile: "+970597039224",
  },
  createdAt: "2023-03-13T17:26:15.676Z",
  updatedAt: "2023-03-13T17:26:15.676Z",
  history: [
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
    {
      _id: "640f5cb878fd73b40d217e42",
      type: "withdraw",
      action: "request cash",
      status: "pending",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-13T17:26:16.222Z",
      updatedAt: "2023-03-13T17:26:16.222Z",
    },
  ],
};

function getAction(status) {
  const typeStatus = status.toLowerCase();
  switch (typeStatus) {
    case "pending":
      return {
        text: "Cancel Withdrawal",
        action: () => console.log("pending"),
        disabled: false,
      };
    case "canceled":
      return {
        text: "Canceled",
        action: () => console.log("Canceled"),
        disabled: true,
      };
    case "completed":
      return {
        text: "Report a Problemt",
        action: () => console.log("Report a Problemt"),
        disabled: false,
      };
    case "sent":
    case "ready":
      return {
        text: "Confirm Receipt",
        action: () => console.log("Confirm Receipt"),
        disabled: false,
      };
  }
}

export const Sidebar = ({ isShow = false, setIsShow, isLoading, data }) => {
  function handleClose() {
    setIsShow(false);
  }

  const content = !isLoading && data && format(data);
  const action = content && getAction(content?.status);

  return (
    <Aside
      isShow={isShow}
      setIsShow={handleClose}
      title="Withdrawal"
      className="  py-2 px-[16px] "
    >
      <div className="flex-grow flex flex-col justify-between gap-4">
        {isLoading || !content ? (
          <div className="flex flex-col justify-between h-full w-[300px]">
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((item) => (
                <Loading className="bg-white p-4 w-full " key={item} />
              ))}
            </div>
            <Loading className="bg-white  !h-[46px] overflow-hidden" />
          </div>
        ) : (
          <>
            <div className=" flex flex-col  gap-4 ">
              <Header data={content} />
              <Details data={content} />
              <TimeLine data={content?.history} />
              {/* <Interstion data={data.instructions} /> */}
            </div>
            <Button
              onClick={action.action}
              className="bg-white !text-black hover:!bg-white shadow-sm border border-[#E2E2E2] capitalize  "
              disabled={action.disabled && true}
            >
              {action.text}
            </Button>
          </>
        )}
      </div>
    </Aside>
  );
};

export default Sidebar;
