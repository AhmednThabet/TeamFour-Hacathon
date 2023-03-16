import { useState, useEffect } from "react";
import axios from "axios";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { API_ENDPOINT } from "data";
import { Listbox, Dialog } from "@headlessui/react";
import { getCookie } from "lib/js-cookie";
import useSWR from "swr";
import { Card, Select, Input } from "components";
import RecipientOption from "./RecipientElemnts/RecipientOption";
import Addrecipent from "./Addrecipient/Addrecipent";
import RecipientLoading from "./RecipientElemnts/RecipientLoading";
import Editrecipent from "./Editreciepient/Editrecipent";

export const Recipient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const token = getCookie("currentUser").accessToken;

  const fetcher = async (url: string) =>
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "https://talents-valley-backend.herokuapp.com/api/recipient/list?offset=0&limit=10",
    // API_ENDPOINT + API_SERVICES_URLS.WITHDROW.ADDRECIPINT,
    fetcher
  );
  const [selectedPerson, setSelectedPerson] = useState(
    data?.data.recipients[0]
  );
  // console.log(data);
  // console.log(selectedPerson);
  useEffect(() => {
    setSelectedPerson(data && data?.data.recipients[0]);
  }, [data]);
  return (
    <div className="w-full relative">
      <Editrecipent
        isOpenEdit={isEditOpen}
        setIsOpenEdit={setIsEditOpen}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        data={data && data.data.recipients}
      />
      <button
        onClick={() => setIsEditOpen(true)}
        className="text-gray-dark font-bold my-2 block cursor-pointer "
      >
        Recipient <span className="text-blue-light">Edit</span>
      </button>

      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="text-gray-dark flex items-center w-full border-2 rounded-md ">
          {isLoading ? (
            <RecipientLoading />
          ) : (
            <RecipientOption data={selectedPerson} />
          )}
          {/* <ChevronDownIcon height={30} width={30} className="mx-2" /> */}
        </Listbox.Button>

        <Listbox.Options className=" bg-white w-[100%] shadow-lg rounded-lg absolute -top-[270px] h-[300px] overflow-auto ">
          {data?.data.recipients.map((recipent: any) => (
            <Listbox.Option
              key={recipent.id}
              value={recipent}
              className="w-full"
            >
              <RecipientOption data={recipent} />
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <Addrecipent isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(true)}
        className="text-blue-light my-2 flex items-center justify-end cursor-pointer"
      >
        {/* {<PlusIcon height={20} width={20} />} */}
        <p>Add Recipient</p>{" "}
      </div>
    </div>
  );
};

export default Recipient;
