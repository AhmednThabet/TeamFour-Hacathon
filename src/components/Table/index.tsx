import React, { useEffect, useReducer, useState } from "react";
import Search from "./Search";
import { Card, Skeleton, Status } from "components";
import { API_ENDPOINT } from "data";
import { getAuthorizationHeader } from "utils";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "../../lib/@heroicons/index";
import { Link } from "components";
import { URL_PATHS } from "data";
import axios from "axios";
import { useFetch } from "hooks";
import { API } from "components/teamFour/API";
import format from "components/teamFour/API/format";
const SORT_ASC = "asc";

const SORT_DESC = "desc";

function getURL(hash) {
  let url = "";
  if (hash.search) {
    url += `?search=${hash.search}`;
  }
  return url;
}

export const Table = ({
  columns,
  withoutSearch = false,
  className = "",
  onTableClick = console.log,
  search,
  dispatch,
  hash,
}) => {
  // const [sortColumn, setSortColumn] = useState([0]);
  // const [sortOrder, setSortOrder] = useState("asc");
  // const [search, setSearch] = useState("");
  // const [rowsToShow, setRowsToShow] = useState(5);
  // const [totalRows, setTotalRows] = useState(0);

  // const loadMore = () => {
  //   setRowsToShow(rowsToShow + 5);
  // };
  // const handleSort = (column) => {
  //   if (column === sortColumn) {
  //     sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC);
  //   } else {
  //     setSortColumn(column);
  //     setSortOrder(SORT_ASC);
  //   }
  // };

  function getAction(baseOn) {
    switch (baseOn.toLowerCase()) {
      case "amount": {
        return (a, b) => a.amount - b.amount;
      }
      case "status": {
        return (a, b) => a > b;
      }
    }
  }

  function sort(baseOn, isUp) {
    let data = hash.data;
    const fun = getAction(baseOn);
    if (isUp) {
      data = data.sort((a, b) => fun(a, b));
    } else {
      data = data.sort((a, b) => fun(b, a));
    }
    dispatch({ type: "SET_DATA", payLoad: data });
  }

  console.log("hash ==> data", hash.data);
  const { isLoading, fetch } = useFetch();

  useEffect(() => {
    const Authorization = getAuthorizationHeader();
    const token = Authorization.Authorization;
    fetch(API.getList(getURL(hash)), API.getOptions(token)).then((data) => {
      dispatch({
        type: "SET_DATA",
        payLoad: data.withdraws.map((item) => format.response(item)),
      });
    });
  }, [hash.search]);

  return (
    <div className="mt-8 ">
      <Card className=" overflow-y-auto">
        <table className="min-w-[400px] w-full text-sm">
          <thead className="bg-white text-[#9E9E9E] mb-4 text-sm font-normal px-4	">
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    key={column}
                    onClick={(e) => sort(column)}
                    className="py-4 text-sm"
                  >
                    <p className="inline-flex text-sm cursor-pointer">
                      {column.toUpperCase().replace("_", " ")}
                      {/* {column === sortColumn ? (
                        <>
                          {sortOrder === SORT_ASC && (
                            <ArrowsUpDownIcon width={12} height={12} />
                          )}
                        </>
                      ) : null} */}
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!isLoading && hash.data?.length === 0 && <tr>No data found</tr>}
            {!isLoading ? (
              hash.data?.slice(0).map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-light hover:cursor-pointer text-sm"
                    onClick={() => onTableClick(item.id)}
                  >
                    <td colSpan={2} className=" border-b-2 text-sm px-4 py-2">
                      {item.provider?.name}
                      <br />
                      <span className="text-[#BEC2C6] text-sm">
                        {format.date(item.createdAt)}
                      </span>
                    </td>
                    <td className="border-b-2 text-sm px-4 py-2">
                      ${item.amount}
                    </td>
                    <td className="border-b-2 text-sm px-4 py-2">
                      <Status status={item.status} />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length + 1}>
                  <div className="spinner-border" role="status">
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                    <Skeleton className="py-4 mt-4" />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* {rowsToShow < totalRows && (
          <button className="text-sm text-[#4375FF]" onClick={loadMore}>
            Show more
          </button>
        )} */}
      </Card>
    </div>
  );
};

export default Table;
