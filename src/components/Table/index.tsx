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
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useFetch } from "hooks";
import { API } from "components/teamFour/API";
import format from "components/teamFour/API/format";

function getURL(hash) {
  let url = "";
  if (hash.search) {
    url += `?search=${hash.search}`;
  }
  return url;
}

<<<<<<< HEAD
export const Table = ({ columns, fetchUrl, rowClick }: any) => {
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState(columns[0]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rowsToShow, setRowsToShow] = useState(5);
  const [totalRows, setTotalRows] = useState(0);
=======
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
>>>>>>> 64e3e61a662b0f453fc6d950c8174ac91ce6c77c

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

<<<<<<< HEAD
    fetchData();
  }, [perPage, sortColumn, sortOrder, search, fetchUrl, token, offset]);
  const userPerPage = 5;
  const pageVisited = offset * userPerPage;
  const pageCount = Math.ceil(data.length / userPerPage);

  const changePage = ({ selected }: any) => {
    setOffset(selected);
  };
  useEffect(() => {
    setTotalRows(data.length);
  }, [data]);
  return (
    <div className="mt-8 ">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row justify-between">
          <div className="-ml-[5px]">
            <Search setSearch={setSearch} />
          </div>
          <div className="bg-white shadow-md ml-[190px] rounded text-[12px] text-[#4375FF] hover:cursor-pointer text-center m-0 h-10 ">
            {" "}
            <Link href={URL_PATHS.HOME}>
              <IconButton className=" ml-1 p-2 w-[100px] ">
                <span className="flex text-[12px] w-[400px]">
                  <Download className=" flex flex-start   -ml-1 rounded-sm !text-[#4375FF]  !bg-[#F3F6FF] w-5 h-5  hover:!text-[#F3F6FF] hover:!bg-[#4375FF]" />
                  <span className="text-[#4375FF] ml-2">Withdraw</span>
                </span>
              </IconButton>{" "}
            </Link>{" "}
          </div>
          <div className="ml-[40px]">-</div>
        </div>
        <div className="flex flex-row   max-w-[907px] ml-[100px] mr-[300px] hover:cursor-pointer px-2 max-h-[40px]"></div>
      </div>
      <Card className="max-w-[700px] h-[420px] ">
        <table className="w-full text-sm">
=======
  return (
    <div className="mt-8 ">
      <Card className=" overflow-y-auto">
        <table className="min-w-[400px] w-full text-sm">
>>>>>>> 64e3e61a662b0f453fc6d950c8174ac91ce6c77c
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
<<<<<<< HEAD
            {!loading && data?.length === 0 && <tr>No data found</tr>}
            {!loading ? (
              data
                ?.slice(pageVisited, pageVisited + userPerPage)
                .map((item: any, index) => {
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-light hover:cursor-pointer text-sm"
                      onClick={() => rowClick(item._id)}
                    >
                      <td className="border-b-2 text-sm px-4 py-2">
                        {item.office?.name} <br />
                        <span className="text-[#BEC2C6] text-sm">
                          {item.createdAt}
                        </span>
                      </td>
                      <td className="border-b-2 text-sm px-4 py-2">
                        {item.recipient?.name}
                      </td>
                      <td className="border-b-2 text-sm px-4 py-2">
                        ${item.amount}
                      </td>
                      <td className="border-b-2 text-sm px-4 py-2">
                        <StatusMap status={item.status} />
                      </td>
                    </tr>
                  );
                })
=======
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
>>>>>>> 64e3e61a662b0f453fc6d950c8174ac91ce6c77c
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
<<<<<<< HEAD
        <div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
=======
        {/* {rowsToShow < totalRows && (
          <button className="text-sm text-[#4375FF]" onClick={loadMore}>
            Show more
          </button>
        )} */}
>>>>>>> 64e3e61a662b0f453fc6d950c8174ac91ce6c77c
      </Card>
    </div>
  );
};

export default Table;
