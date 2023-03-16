import { AdjustmentsHorizontalIcon } from "lib/@heroicons";
import PopMenu from "components/PopMenu";
import { useState } from 'react';
export default function SearchFilter({setShowSelect}) {
  const [filter, setFilter] = useState(null);


    const optionTest = () => setShowSelect(!showSelect);
  function handleFilterClick(status) {
    setFilter({ status });
  }
  // const links = [
  //   { href: "/All", label: "All" },
  //   { href: "/Pending", label: "Pending" },
  //   { href: "/Ready", label: "Ready" },
  //   { href: "/Sent", label: "Sent" },
  //   { href: "/Completed", label: "Ready" },
  //   { href: "/Canceled", label: "Canceled" },
  // ];
  

  return (
    <>
  
   </>
  );
}
    {/* <PopMenu
        links={links}
        menuButton={<AdjustmentsHorizontalIcon height={24} width={24} />}
      /> */}