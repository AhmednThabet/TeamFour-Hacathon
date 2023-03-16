import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Bank from "./Bank";
import { useSWRTeam } from "../../Hook/useSWRTeam";
import Loading from "features/Hacathon-TeamFour/components/Loading";

export const SelectBank = () => {
  const [dataState, setdata] = useState<any>("");
  const [errorState, setErrorState] = useState<any>("");
  const [selectedPerson, setSelectedPerson] = useState();

  const { data, error, isLoading } = useSWRTeam(
    "https://talents-valley-backend.herokuapp.com/api/bank/listing?offset=0&limit=10"
  );

  useEffect(() => {
    setdata(data?.data);
    setErrorState(error);
  }, [data, error, isLoading]);

  useEffect(() => {
    setSelectedPerson(dataState && dataState.banks[0]);
  }, [dataState]);

  console.log(dataState, "from bank");

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className=" max-w-xl  mx-auto relative">
        <label htmlFor="Bank">Bank</label>
        <Listbox.Button className="text-gray-dark flex justify-center items-center border-2 w-full rounded-md ">
          {isLoading && <Loading className=" min-w-[550px]" />}
          {dataState?.count == 0 ? (
            <div className=" min-w-[550px]">Please Add An Acoount Bank</div>
          ) : (
            dataState && <Bank key={dataState?._id} data={selectedPerson} />
          )}

          <ChevronDownIcon height={30} width={30} className="mx-2" />
        </Listbox.Button>
        <Listbox.Options className="absolute -top-96 right-0 bg-white  w-full">
          <div className=" mx-auto rounded-md border h-96 border-[#BEC2C6] shadow-lg overflow-y-auto scroll">
            {dataState &&
              dataState?.banks.map((acoount: any) => (
                <Listbox.Option
                  key={acoount._id}
                  value={acoount}
                  className="w-full"
                >
                  <Bank key={acoount._id} data={acoount} />
                </Listbox.Option>
              ))}
          </div>
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SelectBank;
