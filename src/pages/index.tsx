import React, { useState, useEffect } from "react";
import { NoSsr, Table } from "components";
import { SortKeys } from "types";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "lib/@heroicons";
import Search from "components/Table/Search";
import axios from "axios";
import { getAuthorizationHeader } from "utils";

import SideBar from "layouts/WithdrowLayout/SideBar";
import Balnce from "layouts/WithdrowLayout/Balnce";

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

  return (
    <NoSsr>
      <div>
        <div className="flex w-full justify-between  md:h-[75vh]">
          <SideBar />

          <div className={"  min-w-[700px]  ml-[180px]    "}>
            <div>
              <Table
                fetchUrl="withdraw/list"
                columns={["Name Date", "", "Amount", "Status"]}
              />
            </div>
          </div>
          <Balnce />
        </div>

        {/* <Bank /> */}
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
