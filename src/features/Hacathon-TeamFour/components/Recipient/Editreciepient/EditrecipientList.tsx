import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
// import { API_SERVICES_URLS, URL_PATHS } from "data";
// import { API_ENDPOINT } from "data";
import { Button, Card, Input } from "components";
import { XMarkIcon } from "lib/@heroicons";
import { TrashIcon, PencilIcon } from "lib/@heroicons";
import { Listbox } from "@headlessui/react";

import Trashrecipient from "../RecipientIcons/Trashrecipient";
import Pencilerecipient from "../RecipientIcons/Pencilerecipient";
import { getCookie } from "lib/js-cookie";

const EditrecipientList = ({
  recipients,
  setIsOpenEdit,
  selectedPerson,
  setSelectedPerson,
}: any) => {
  // const handleChoosenRecipent = (btn: any) => {
  //   setSelectedPerson(btn);
  //   setIsOpenEdit();
  //   console.log(selectedPerson);
  // };
  // ======================================================

  return (
    <Card className="w-[450px] px-10 h-[450px] overflow-auto">
      <div className="flex justify-between mb-8">
        <p className="font-bold">Recipients</p>
        <XMarkIcon
          height={20}
          width={20}
          onClick={() => setIsOpenEdit()}
          className="cursor-pointer"
        />
      </div>

      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        {recipients.map((btn: any) => (
          <Listbox.Button
            key={btn._id}
            className="text-gray-dark my-2 flex items-center w-full border-2 rounded-md focus:border-blue"
          >
            <div className={`flex flex-col  w-full  border-gray  px-4 py-2`}>
              <div className="flex justify-between">
                <div className="flex gap-2 text-black">
                  <Trashrecipient
                    id={btn._id}
                    // isOpen={isOpen}
                    // setIsOpen={setIsOpen}
                    // allowDelet={allowDelet}
                    // setAllowDelet={setAllowDelet}
                  />
                  <Pencilerecipient id={btn._id} />
                </div>
                <p className="float-right text-bold">{btn && btn.name}</p>
              </div>
              <div className="flex justify-between text-gray-dark">
                <p>ID:{btn && btn.idNumber}</p>
                <p className="">Phone :{btn && btn.mobile}</p>
              </div>
            </div>
          </Listbox.Button>
        ))}
      </Listbox>

      <div className="flex justify-between gap-4 my-4">
        <Button
          buttonSize="small"
          fullWidth={true}
          className="!bg-white !text-blue shadow-md border "
        >
          Add
        </Button>
        <Button buttonSize="small" fullWidth={true} className="shadow-md">
          Select
        </Button>
      </div>
    </Card>
  );
};

export default EditrecipientList;
