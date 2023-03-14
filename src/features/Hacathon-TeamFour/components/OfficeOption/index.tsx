import { useEffect, useState } from "react";
import { Card } from "components";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Office from "./Office";
import { useSWRTeam } from "../../Hook/useSWRTeam";

export const Recipient = () => {
  const [dataState, setdata] = useState<any>("");
  const [errorState, setErrorState] = useState<any>("");

  const { data, error } = useSWRTeam(
    "https://talents-valley-backend.herokuapp.com/api/withdraw/office-list?office=&limit=10"
  );

  useEffect(() => {
    setdata(data?.data);
    setErrorState(error);
  }, [data, error]);

  const [selectedPerson, setSelectedPerson] = useState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className=" max-w-xl  mx-auto relative">
        <label htmlFor="Office">Office</label>
        <Listbox.Button className="text-gray-dark flex justify-center items-center border-2 w-full rounded-md ">
          {selectedPerson && (
            <Office key={dataState._id} data={selectedPerson} />
          )}
          <ChevronDownIcon height={30} width={30} className="mx-2" />
        </Listbox.Button>
        <Listbox.Options className="absolute -top-96 right-0 bg-white  w-full">
          <div className=" mx-auto rounded-md border h-96 border-[#BEC2C6] shadow-lg overflow-y-auto scroll">
            {dataState &&
              dataState.map((post: any) => (
                <Listbox.Option key={post._id} value={post} className="w-full">
                  <Office key={post._id} data={post} />
                </Listbox.Option>
              ))}
          </div>
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Recipient;
