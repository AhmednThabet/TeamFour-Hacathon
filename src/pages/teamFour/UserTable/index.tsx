
import React,{useState,useEffect} from "react";
import { Card } from "components";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";


 export function Table({data}) {
    const [sortOrder, setSortOrder] = useState(null);
    const [totalRows, setTotalRows] = useState(0);
  
    useEffect(() => {
      setTotalRows(data.length);
    }, [data]);
  
  
    const handleSort = (columnName) => {
        if (sortOrder === columnName) {
          // if current sort order is the same as the clicked column name, reverse the sort order
          setSortOrder(`-${columnName}`);
        } else {
          // otherwise, set the sort order to the clicked column name
          setSortOrder(columnName);
        }
      };
    
      const sortedData = data.sort((a, b) => {
        // sort the data based on the selected column and sort order
        if (sortOrder) {
          const columnName = sortOrder.startsWith('-') ? sortOrder.slice(1) : sortOrder;
          const comparison = a[columnName] - b[columnName];
    
          return sortOrder.startsWith('-') ? -comparison : comparison;
        }
    
        return 0;
      });
    return (
        <Card className="w-[907px] max-h-[519px]">
      <table className="w-full text-center">
        <thead className="bg-white text-gray-dark mb-4 text-sm" >
          <tr>
            <th className="py-4 flex ml-4"onClick={() => handleSort('name')}>Name{sortOrder === 'name' &&<ArrowsUpDownIcon width={12} height={12} />}{sortOrder === '-name' &&<ArrowsUpDownIcon width={12} height={12} />}<span className=" ml-4 flex"onClick={() => handleSort('createdAt')}>Date<ArrowsUpDownIcon width={12} height={12} />{sortOrder === '-createdAt' &&<ArrowsUpDownIcon width={12} height={12} />}</span></th>
            <th className="py-4"></th>

            <th className="py-4 px-4 ml-3"><span className="flex"onClick={() => handleSort('amount')}>Amount  {sortOrder ==='amount'&& <ArrowsUpDownIcon width={12} height={12} />}</span></th>
            <th className="py-4 px-4"onClick={() => handleSort('status')}><span className="flex">Status {sortOrder === 'status'&&<ArrowsUpDownIcon width={12} height={12} />} {sortOrder === '-status' &&<ArrowsUpDownIcon width={12} height={12} />} </span></th>

          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="hover:bg-gray-light hover:cursor-pointer text-sm" >
              <td className="border-b-2	 px-4 py-2">{item.address} <br/><span className="text-[#BEC2C6] text-sm">{item.createdAt}</span></td>
              <td className="border-b-2 px-4 py-2">{item.name}</td>
              <td className="border-b-2 px-4 py-2">${item.amount}</td>
           

            </tr>
          ))}
        </tbody>
      </table>
    
      </Card>
    );
  }
  
  
export default Table;








// import React,{useState,useEffect} from 'react'
// import { getAuthorizationHeader } from "utils";

// const HeaderCell = ({ column, sorting, sortTable }) => {
//   const isDescSorting = sorting.column === column && sorting.order === "desc";
//   const isAscSorting = sorting.column === column && sorting.order === "asc";
//   const futureSortingOrder = isDescSorting ? "asc" : "desc";
//   return (
//     <th
//       key={column}
//       className="users-table-cell"
//       onClick={() => sortTable({ column, order: futureSortingOrder })}
//     >
//       {column}
//       {isDescSorting && <span>▼</span>}
//       {isAscSorting && <span>▲</span>}
//     </th>
//   );
// };

// const Header = ({ columns, sorting, sortTable }) => {
//   return (
//     <thead>
//       <tr>
//         {columns.map((column) => (
//           <HeaderCell
//             column={column}
//             sorting={sorting}
//             key={column}
//             sortTable={sortTable}
//           />
//         ))}
//       </tr>
//     </thead>
//   );
// };

// const Content = ({ entries, columns }) => {
//   return (
//     <tbody>
//       {entries?.map((entry,index) => (
//         <tr key={index}>
//           {columns.map((column) => (
//             <td key={column} className="users-table-cell">
//               {entry[column]}
//             </td>
//           ))}
//         </tr>
//       ))}
//     </tbody>
//   );
// };

// const SearchBar = ({ searchTable }) => {
//   const [searchValue, setSearchValue] = useState("");
//   const submitForm = (e) => {
//     e.preventDefault();
//     searchTable(searchValue);
//   };
//   return (
//     <div className="search-bar">
//       <form onSubmit={submitForm}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </form>
//     </div>
//   );
// };
// export const UserTable = () => {
//     const [users, setUsers] = useState([]);
//   const [sorting, setSorting] = useState({ column: "id", order: "asc" });
//   const [searchValue, setSearchValue] = useState("");
//   const Authorization = getAuthorizationHeader();
//     const token = Authorization.Authorization;
//     const columns = ["address", "name","amount","status"];
//   const sortTable = (newSorting) => {
//     setSorting(newSorting);
//   };
//     const searchTable = (newSearchValue) => {
//         setSearchValue(newSearchValue);
//       };
    
//   useEffect(() => {
//     const url = `https://talents-valley-backend.herokuapp.com/api/withdraw/list?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
//     fetch(url,{
//         headers: {
//             Authorization: token,
//           }
//     })
//       .then((res) => res.json())
//       .then((users) => {
//         setUsers(users);
//         console.log(users);

//       });
//   }, [sorting, searchValue]);
//   return (
//     <div>
//     <SearchBar searchTable={searchTable} />
//     <table className="users-table">
//       <Header columns={columns} sorting={sorting} sortTable={sortTable} />
//       <Content entries={users} columns={columns} />
//     </table>
//   </div>
//   )
// }
// export default UserTable;
