import { AdjustmentsHorizontalIcon } from "lib/@heroicons";
import PopMenu from "components/PopMenu";
import { useState } from "react";
import { Card } from "components";

export default function SearchFilter({ dispatch }) {
  const links = [
    { href: "/All", label: "All" },
    { href: "/Pending", label: "Pending" },
    { href: "/Ready", label: "Ready" },
    { href: "/Sent", label: "Sent" },
    { href: "/Completed", label: "Completed" },
    { href: "/Canceled", label: "Cancelled" },
  ];

  const [isShow, setIsShow] = useState(false);
  const [seleted, setSeleted] = useState({});

  function handleSelect(name, value) {
    let temp = seleted;
    if (temp[name]) {
      delete temp[name];
    } else {
      temp[name] = true;
    }
    setSeleted(temp);
  }

  function submitSelected() {
    dispatch({ type: "SELECT", payLoad: seleted });
  }

  function handleShow() {
    setIsShow(true);
    setSeleted({});
  }

  return (
    <Card className="relative !p-0 ">
      <button
        onClick={handleShow}
        className="px-2 h-full flex justify-center items-center"
      >
        <AdjustmentsHorizontalIcon height={24} width={24} />
        <p>Filter</p>
      </button>
      <PopMenu
        isShow={isShow}
        setIsShow={setIsShow}
        menu={links}
        onSelect={handleSelect}
        onClose={submitSelected}
      />
    </Card>
  );
}
