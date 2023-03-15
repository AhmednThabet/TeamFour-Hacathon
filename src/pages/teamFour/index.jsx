import React, { useState, useEffect } from "react";
import { NoSsr, Table } from "components";
import { SortKeys } from "types";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "../../lib/@heroicons/index";
import Search from "components/Table/Search";
import axios from "axios";
import Balnce from "layouts/Balnce";
import SideBar from "layouts/SideBar";
import { getAuthorizationHeader } from "utils";
import { Sidebar } from "../../components";

import { API } from "../../components/teamFour/API";
import { useFetch } from "hooks";

export const TableWidthrow = ({ classname }) => {
  const Authorization = getAuthorizationHeader();

  const [isShow, setIsShow] = useState(false);

  const { data: sideBarInfo, isLoading, fetch } = useFetch();

  function handleClickOnTable(id) {
    setIsShow(true);
    fetch(API.GetWithdrawalRequestDetails(id), API.getOptions());
  }

  return (
    <NoSsr>
      <div>
        <div className="flex w-full  justify-between  md:h-[75vh]">
          <SideBar />

          <div className={classname + "  min-w-[800px]  ml-[180px]    "}>
            <div>
              <Table
                fetchUrl="withdraw/list"
                columns={["Name Date", "", "Amount", "Status"]}
                onTableClick={handleClickOnTable}
              />
            </div>
          </div>
        </div>

        <Balnce />

        <div>
          <Sidebar
            isShow={isShow}
            setIsShow={setIsShow}
            isLoading={isLoading}
            data={sideBarInfo?.withdraw}
          />
        </div>
      </div>
    </NoSsr>
  );
};
export default TableWidthrow;
