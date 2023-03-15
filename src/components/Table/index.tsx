import React, { useEffect, useState } from "react";
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
const SORT_ASC = "asc";
const SORT_DESC = "desc";

export const Table = ({
  columns,
  fetchUrl,
  withoutSearch = false,
  className = "",
  onTableClick = console.log,
}: any) => {
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

  const loadMore = () => {
    setRowsToShow(rowsToShow + 5);
  };
  const handleSort = (column: any) => {
    if (column === sortColumn) {
      sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC);
    } else {
      setSortColumn(column);
      setSortOrder(SORT_ASC);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = {
        search,
        sort_field: sortColumn,
        sort_order: sortOrder,
        per_page: perPage,
        // page: currentPage,
      };
      const { data } = await axios.get(
        `${API_ENDPOINT}/${fetchUrl}?search=${search}&limit=${perPage}&offset=${offset}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setData(data?.data.withdraws);
      console.log(data?.data.withdraws);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    fetchData();
  }, [perPage, sortColumn, sortOrder, search, fetchUrl, token, offset]);

  useEffect(() => {
    setTotalRows(data.length);
  }, [data]);
  return (
    <div className="mt-8 ">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row justify-between">
          <div>
            <Search setSearch={setSearch} />
          </div>
          <div className="bg-white shadow-md ml-[80px] rounded text-[12px] text-[#4375FF] hover:cursor-pointer text-center m-0 h-10 ">
            {" "}
            <Link href={URL_PATHS.HOME}>
              <IconButton className=" ml-1 p-2 ">
                <span className="flex text-[12px]">
                  <Download className=" flex flex-start   -ml-1 rounded-sm !text-[#4375FF]  !bg-[#F3F6FF] w-5 h-5  hover:!text-[#F3F6FF] hover:!bg-[#4375FF]" />
                </span>
              </IconButton>
              <span className="-mt[20px] mr-[20px]">Withdraw</span>{" "}
            </Link>{" "}
          </div>
          <div className="ml-[40px]">
            <SearchFilter />
          </div>
        </div>
        <div className="flex flex-row   max-w-[907px] ml-[100px] mr-[300px] hover:cursor-pointer px-2 max-h-[40px]"></div>
      </div>
      {/* {!withoutSearch && <Search setSearch={setSearch} />} */}
      <Card className="max-w-[800px]">
        <table className="w-full text-sm">
          <thead className="bg-white text-[#9E9E9E] mb-4 text-sm font-normal px-4	">
            <tr>
              {columns.map((column: any) => {
                return (
                  <th
                    key={column}
                    onClick={(e) => handleSort(column)}
                    className="py-4 text-sm"
                  >
                    <p className="inline-flex text-sm cursor-pointer">
                      {column.toUpperCase().replace("_", " ")}
                      {column === sortColumn ? (
                        <>
                          {sortOrder === SORT_ASC && (
                            <ArrowsUpDownIcon width={12} height={12} />
                          )}
                        </>
                      ) : null}
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {!loading && data?.length === 0 && <tr>No data found</tr>}
            {!loading ? (
              data?.slice(0, rowsToShow).map((item: any, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-light hover:cursor-pointer text-sm"
                    onClick={() => onTableClick(item._id)}
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
                      <Status
                        status={item.status}
                        className="!bg-transparent"
                      />
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
        {rowsToShow < totalRows && (
          <button className="text-sm text-[#4375FF]" onClick={loadMore}>
            Show more
          </button>
        )}
      </Card>
    </div>
  );
};

export default Table;