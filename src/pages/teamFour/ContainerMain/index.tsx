import React, { Children, createContext, useContext } from "react";

// import Transactions from "components/Transactions";
import { Table } from "components/Table";
import DataList from "components/Table/useContext";

export const ContainerMain = ({ classname }: any) => {
  const DataForuser = useContext(DataList);

  return (
    <div className={classname + "   overflow-y-auto removescroll w-full    "}>

      {DataForuser.users && <Table />}
    </div>
  );
};

export default ContainerMain;
