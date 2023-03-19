import IconButton from "components/IconButton";
import Input from "components/Input";
import Table from "components/Table";
import SearchFilter from "components/Table/Search/SearchFilter";
import { URL_PATHS } from "data";
import { useFetch } from "hooks";
import { Download, MagnifyingGlassIcon } from "lib/@heroicons";
import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import { getAuthorizationHeader } from "utils";
import { API } from "../API";
import format from "../API/format";
const reducer = function (hash, action) {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...hash,
        data: action.payLoad,
      };
    }
    case "SORT": {
      sort(action.payLoad.baseOn, action.payLoad.isUp, hash);
      return {
        ...hash,
        sort: action.payLoad,
      };
    }
    case "SEARCH": {
      return {
        ...hash,
        sort: {
          baseOn: "",
          isUp: false,
        },
        search: action.payLoad,
      };
    }
  }
};

function sort(baseOn, isUp, hash) {
  let data = hash.data;
  const fun = getAction(baseOn) || console.log;
  if (isUp) {
    data = data.sort((a, b) => fun(a, b));
  } else {
    data = data.sort((a, b) => fun(b, a));
  }
}

function getAction(baseOn) {
  switch (baseOn.toLowerCase()) {
    case "amount": {
      return (a, b) => b.amount - a.amount;
    }
    case "date": {
      return (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    case "status": {
      return (a, b) => {
        if (a.status == b.status) return 0;
        if (a.status > b.status) return 1;
        if (a.status < b.status) return -1;
      };
    }
    case "name":
      return (a, b) => {
        if (a.provider.name == b.provider.name) return 0;
        if (a.provider.name > b.provider.name) return 1;
        if (a.provider.name < b.provider.name) return -1;
      };
  }
}

function getURL(hash) {
  let url = "";
  if (hash.search) {
    url += `?search=${hash.search}`;
  }
  return url;
}

export function Trainstions({ handleClickOnTable }) {
  const [hash, dispatch] = useReducer(reducer, {
    data: [],
    search: "",
    sort: {
      baseOn: "",
      isUp: false,
    },
  });

  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;

  function onSearch(term) {
    dispatch({ type: "SEARCH", payLoad: term });
  }

  const { isLoading, fetch } = useFetch();

  useEffect(() => {
    async function run() {
      const respone = await fetch(
        API.getList(getURL(hash)),
        API.getOptions(token)
      );
      console.log(respone);
      dispatch({
        type: "SET_DATA",
        payLoad: respone?.withdraws?.map((item) => format.response(item)),
      });
    }
    run();
  }, [hash.search]);

  return (
    <div>
      <div className="flex flex-row items-stretch justify-between gap-[10px]">
        <Input
          startIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
          className={`w-[200px]  flex-grow min-w-[100px] !m-0`}
          withoutHelperText
          inputClassName="shadow !py-[6px] pl-10  "
          onChange={(e) => onSearch(e.target.value)}
        />

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
        columns={["Name", "Date", "Amount", "Status"]}
        onTableClick={handleClickOnTable}
        search={hash.search}
        hash={hash}
        dispatch={dispatch}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Trainstions;
