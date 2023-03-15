import React,{useState,useEffect} from 'react'
import { NoSsr,Table } from "components";
import { SortKeys } from "types";
import SearchFilter from "components/Table/Search/SearchFilter";
import IconButton from "components/IconButton";
import { Download } from "../../lib/@heroicons/index";
import Search from "components/Table/Search";
import axios from 'axios';
// import Table from './UserTable';
import { getAuthorizationHeader } from "utils";

const headers: { key: SortKeys; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "date", label: "Date" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
];
// const data = [
//   {_id:1, address: 'غزة - مكتب الدانا',createdAt:"Yesterday",name:"Enas Mousa",amount: 240, status: 'pending' },
//   { _id:2,address: 'غزة - مكتب الدانا',createdAt:"Yesterday",name:"Enas Mousa",amount: 240, status: 'ready' },
//   { _id:3, address: 'Bank of Palestine',createdAt:"Yesterday",name:"Norhan Mohammed Khadr",amount: 240, status: 'sent' },
//   {  _id:4,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Norhan Mohammed Khadr",amount: 200, status: 'canceled' },
//   { _id:5,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Ahmed Esmail",amount: 450, status: 'paid' },
//   { _id:6,address: 'Bank of Palestine',createdAt:"12-Dec",name:"Ahmed Esmail",amount: 450, status: 'paid' },
//   { _id:7, address: 'Bank of Palestine',createdAt:"Yesterday",name:"Norhan Mohammed Khadr",amount: 240, status: 'pending' },

// ];
export const TableWidthrow = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const Authorization = getAuthorizationHeader();
  const token = Authorization.Authorization;
  // useEffect(() => {
  //   axios.get('https://talents-valley-backend.herokuapp.com/api/withdraw/list?offset=0&limit=10',{
  //     headers: {
  //                 Authorization: token,
  //               },
  //   })
  //     .then(response => {
  //       setData(response.data);
  //       console.log(response.data);

  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  // const filteredData = data?.filter(item => {
  //   // filter the data based on the search term and the name property
  //   return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });
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
//  <div className='flex flex-row justify-between'> 
{/* <Table
    fetchUrl="withdraw/list"
    columns={["Name", "Date","Amount","Status"]}
  /> */}
{/* <UserTable/>  */}
{/* <Table data={filteredData}/> */}

//   </div