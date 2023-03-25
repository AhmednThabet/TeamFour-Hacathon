import React from "react";
import { Card, Skeleton, Status } from "components";

import format from "components/teamFour/API/format";
import { Th } from "./Th";

export const Table = ({
  columns,
  onTableClick = console.log,
  dispatch,
  hash,
  isLoading,
}) => {
  function sort(baseOn, isUp) {
    dispatch({
      type: "SORT",
      payLoad: {
        baseOn,
        isUp,
      },
    });
  }

  return (
    <div className="mt-8 ">
      <Card className=" overflow-y-auto">
        <table className="min-w-[400px] w-full text-sm">
          <thead className="bg-white text-[#9E9E9E] mb-4 text-sm font-normal px-4	">
            <tr>
              {columns.map((column, index) => (
                <Th key={index} column={column} sort={sort} order={hash.sort} />
              ))}
            </tr>
          </thead>
          <tbody>
            {!isLoading && hash.data?.length === 0 && <tr>No data found</tr>}
            {!isLoading ? (
              hash.data?.map((item, index) => {
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
