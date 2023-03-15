import React,{useState,useEffect} from 'react'
import { NoSsr,Table } from "components";
import { SortKeys } from "types";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "../../lib/@heroicons/index";
import Search from "components/Table/Search";
import axios from 'axios';
// import Table from './UserTable';
import Balnce from "layouts/Balnce";
import SideBar from "layouts/SideBar";
import { getAuthorizationHeader } from "utils";

const headers: { key: SortKeys; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];

//   {_id:1, address: 'غزة - مكتب الدانا',createdAt:"Yesterday",name:"Enas Mousa",amount: 240, status: 'pending' },
//   { _id:2,address: 'غزة - مكتب الدانا',createdAt:"Yesterday",name:"Enas Mousa",amount: 240, status: 'ready' },
//   { _id:3, address: 'Bank of Palestine',createdAt:"Yesterday",name:"Norhan Mohammed Khadr",amount: 240, status: 'sent' },
//   {  _id:4,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Norhan Mohammed Khadr",amount: 200, status: 'canceled' },
//   { _id:5,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Ahmed Esmail",amount: 450, status: 'paid' },
//   { _id:6,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Ahmed Esmail",amount: 450, status: 'paid' },
//   { _id:7, address: 'Bank of Palestine',createdAt:"Yesterday",name:"Norhan Mohammed Khadr",amount: 240, status: 'pending' },

// ];
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
