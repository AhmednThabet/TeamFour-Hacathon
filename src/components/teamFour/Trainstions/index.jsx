import IconButton from "components/IconButton";
import Table from "components/Table";
import Search from "components/Table/Search";
import SearchFilter from "components/Table/Search/SearchFilter";
import { URL_PATHS } from "data";
import { Download } from "lib/@heroicons";
import Link from "next/link";
import React, { useReducer, useState } from "react";
const reducer = function (hash, action) {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...hash,
        data: action.payLoad,
      };
    }
    case "SEARCH": {
      return {
        ...hash,
        search: action.payLoad,
      };
    }
  }
};

export function Trainstions({ handleClickOnTable, search }) {
  const [hash, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
  });

  function onSearch(term) {
    dispatch({ type: "SEARCH", payLoad: term });
  }

  return (
    <div>
      <div className="flex flex-row items-stretch justify-between gap-[10px]">
        <Search onSearch={onSearch} className="flex-grow min-w-[100px] !m-0" />
        <div className="flex justify-between gap-[10px]">
          <Link href={URL_PATHS.HOME}>
            <p className=" flex items-center  text-blue-500 border  rounded-md shadow  p-2 bg-white  ">
              <span className="flex text-[12px]">
                <Download className=" w-5 h-5" />
              </span>
              <span>Withdraw</span>
            </p>
          </Link>
          <SearchFilter />
        </div>
      </div>
      <Table
        columns={["Name Date", "", "Amount", "Status"]}
        onTableClick={handleClickOnTable}
        search={search}
        hash={hash}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Trainstions;
