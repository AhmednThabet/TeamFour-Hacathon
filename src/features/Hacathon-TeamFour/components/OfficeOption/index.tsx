import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Office from "./Office";
import { useSWRTeam } from "../../Hook/useSWRTeam";
import Loading from "features/Hacathon-TeamFour/components/Loading";

export const SelectOffice = () => {
  const [dataState, setdata] = useState<any>("");
  const [errorState, setErrorState] = useState<any>("");

  const { data, error, isLoading } = useSWRTeam(
    "https://talents-valley-backend.herokuapp.com/api/withdraw/office-list?office=&limit=10"
  );

  useEffect(() => {
    setdata(data?.data);
    setErrorState(error);
  }, [data, error, isLoading]);

  const [selectedPerson, setSelectedPerson] = useState();

  useEffect(() => {
    setSelectedPerson(dataState && dataState[0]);
  }, [dataState]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="w-full mx-auto relative">
        <label htmlFor="Office">Office</label>
        <Listbox.Button className="text-gray-dark flex justify-center items-center border-2 w-full rounded-md ">
          {isLoading && <Loading className=" min-w-[550px]" />}
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

export default SelectOffice;
