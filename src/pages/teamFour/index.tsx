
import React,{useState,useEffect} from 'react'
import { NoSsr,Table } from "components";
import { SortKeys } from "types";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "../../lib/@heroicons/index";
import Search from "components/Table/Search";
import axios from 'axios';
import { getAuthorizationHeader } from "utils";

const headers: { key: SortKeys; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

import { Recipient } from "features/Hacathon-TeamFour/components/Recipient/Recipient";
import { Card } from "components";
const Index = () => {
  return (
    <Card className="min-w-[50%] flex flex-col items-center relative">
      <Recipient />
    </Card>
  );
};


export const TableWidthrow = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
 
  return (
    <NoSsr>
      <div className='flex flex-col'>
 

  <div><Table
    fetchUrl="withdraw/list"
    columns={["Name Date", "","Amount","Status"]}
  /></div>
  </div>
    </NoSsr>
  )
}
export default TableWidthrow;
