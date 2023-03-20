import React, { useState, useEffect } from "react";
import { NoSsr, Table } from "components";
import { SortKeys } from "types";
import { getAuthorizationHeader } from "utils";

import SideBar from "layouts/WithdrowLayout/SideBar";
import Balnce from "layouts/WithdrowLayout/Balnce";

import Drower from "components/teamFour/Sidebar";
import { API } from "components/teamFour/API";
import { useFetch } from "hooks";

const headers: { key: SortKeys; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

export const TableWidthrow = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;

  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState(null);
  const { isLoading, fetch } = useFetch();

  function handleShow(flag: any) {
    setIsShow(flag);
  }
  function handleOpen() {
    setIsShow((prev) => !prev);
  }

  function handleClickOnTable(id: any) {
    handleShow(true);

    fetch(API.GetWithdrawalRequestDetails(id), API.getOptions()).then(
      (data) => {
        setContent(data.withdraw);
      }
    );
  }

  return (
    <NoSsr>
      <div>
        <div className="flex w-full justify-between  md:h-[75vh]">
          <SideBar />

          <div className={"  min-w-[700px]  ml-[180px]    "}>
            <div>
              <Table
                fetchUrl="withdraw/list"
                columns={["Name Date", "Name", "Amount", "Status"]}
                rowClick={handleClickOnTable}
              />
            </div>
          </div>
          <Balnce />
        </div>
        <Drower
          isShow={isShow}
          setIsShow={handleShow}
          isLoading={isLoading}
          data={content}
        />
      </div>
    </NoSsr>
  );
};
// TableWidthrow
TableWidthrow.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "",
};

export default TableWidthrow;
