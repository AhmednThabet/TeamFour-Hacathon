
import React,{useState,useEffect} from 'react'
import { NoSsr,Table } from "components";
import { SortKeys } from "types";
import Balnce from "layouts/Balnce";
import SideBar from "layouts/SideBar";
import { getAuthorizationHeader } from "utils";
import { Recipient } from "features/Hacathon-TeamFour/components/Recipient/Recipient";
import { Card } from "components";

const headers: { key: SortKeys; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];


export const Index = () => {
  return (
    <Card className="min-w-[50%] flex flex-col items-center relative">
      <Recipient />
    </Card>
  );
};


export const TableWidthrow = ({ classname }: any) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
 
  return (
    <NoSsr>
      <div>
      <div
        className="flex w-full justify-between  md:h-[75vh]
    `"
      >
        <SideBar />

        <div
          className={classname +"  min-w-[700px]  ml-[180px]    "
          }
        >
  <div><Table
    fetchUrl="withdraw/list"
    columns={["Name Date", "","Amount","Status"]}
  /></div>
  </div>
  </div>

<Balnce />
</div>
    </NoSsr>
  )
}
export default TableWidthrow;
