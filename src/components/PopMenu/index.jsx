import { Menu, Transition } from "@headlessui/react";
import IconButton from "components/IconButton";
import Input from "components/Input";
import { ChevronLeftIconMini } from "lib/@heroicons";
import { Fragment, useState } from "react";

export default function PopMenu({
  menu = [],
  isShow = false,
  setIsShow,
  children,
  className = "",
  onSelect,
  onClose,
}) {
  function handleClose() {
    onClose();
    setIsShow(false);
  }

  function handleSelect(e) {
    onSelect(e.target.id, e.target.checked);
  }

  return (
    <Transition
      as={Fragment}
      show={isShow}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div
        className={` absolute   bg-white border-2 border-[#D4D4D4] rounded-md overflow-y-auto  flex flex-col gap-2 z-10 right-0 ${className}`}
      >
        <ul>
          {menu.map((item, index) => (
            <li key={index} className="flex items-center">
              <label
                for={item.label}
                className="flex-grow px-4 py-2 hover:bg-gray-100 min-w-max"
              >
                <input
                  type={"checkbox"}
                  id={item.label}
                  className="mr-2"
                  onChange={handleSelect}
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </Transition>
  );
}

// <div className=" shadow-md border-none py-1 bg-white rounded max-w-[88px] px-4 -ml[300px]  ">
// <Menu as="div" className="relative inline-block text-left">
//   <div>
//     <Menu.Button className="flex ">
//       {menuButton} <span className="text-[#707070]">filter</span>
//     </Menu.Button>
//   </div>
//   <Transition
//     as={Fragment}
//     enter="transition ease-out duration-100"
//     enterFrom="transform opacity-0 scale-95"
//     enterTo="transform opacity-100 scale-100"
//     leave="transition ease-in duration-75"
//     leaveFrom="transform opacity-100 scale-100"
//     leaveTo="transform opacity-0 scale-95"
//   >
//     <Menu.Items className="absolute z-10 right-0  w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//       {links.map((link: any, i: any) => (
//         <Menu.Item key={link.label}>
//           {({ active }) => (
//             <button
//               className={`${
//                 active ? "bg-[#9E9E9E] text-white" : "text-gray-900"
//               } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//             >
//               <input type="checkbox" className="ml-2 mr-4" key={i} />
//               {link.label}
//             </button>
//           )}
//         </Menu.Item>
//       ))}
//       <div>dasdsa</div>
//     </Menu.Items>
//   </Transition>
// </Menu>
// </div>
