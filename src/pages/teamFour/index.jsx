import { Button } from "components";
import React, { useState } from "react";
import Sidebar from "../../components/teamFour/Sidebar";

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
  status: "pending",
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

const Index = () => {
  function x() {
    console.log("x");
  }

  const [isShow, setIsShow] = useState(false);

  function handleShow(flag) {
    setIsShow(flag);
  }

  function handleOpen() {
    setIsShow((prev) => !prev);
  }

  return (
    <div>
      Test TeamFour
      <Button onClick={x}>con</Button>
      <Button onClick={() => handleOpen()}>Show Drop</Button>
      <Sidebar
        isShow={isShow}
        setIsShow={handleShow}
        id={"640f5cb778fd73b40d217e37"}
        data={bankExample}
      />
    </div>
  );
};

export default Index;
