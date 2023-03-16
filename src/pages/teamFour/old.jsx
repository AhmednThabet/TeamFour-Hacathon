import React, { useState } from "react";
import { NoSsr, Table } from "components";

import Balnce from "layouts/Balnce";
import SideBar from "layouts/SideBar";
import { getAuthorizationHeader } from "utils";
import { DrawerBar } from "../../components";

import { API } from "../../components/teamFour/API";
import { useFetch } from "hooks";

export const TableWidthrow = ({ classname }) => {
  const Authorization = getAuthorizationHeader();
  const [isShow, setIsShow] = useState(false);

  const { data: DrawerBarInfo, isLoading, fetch } = useFetch();

  function handleClickOnTable(id) {
    setIsShow(true);
    fetch(
      API.GetWithdrawalRequestDetails(id),
      API.getOptions(Authorization.Authorization)
    );
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
          <DrawerBar
            isShow={isShow}
            setIsShow={setIsShow}
            isLoading={isLoading}
            data={DrawerBarInfo?.withdraw}
          />
        </div>
      </div>
    </NoSsr>
  );
};
export default TableWidthrow;
