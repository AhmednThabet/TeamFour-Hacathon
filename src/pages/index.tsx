import React, { useState } from "react";
import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { HelperText, NoSsr } from "components";
import { Cash } from "components/svg/Cash";
import { Bank } from "components/svg/Bank";
import { ErrorIconMini } from "lib/@heroicons";
import { Tab } from "@headlessui/react";
import useForm from "lib/react-hook-form";
import { Download } from "../lib/@heroicons";
import { Button } from "components";

const Home = ({ classname }: any) => {
  const { user } = useCurrentUser();
  const logout = useLogout();
  const [message, setMessage] = useState(user?.balance);
  const [active, setActive] = useState(false);
  const [helpertext, setHelpertext] = useState();
  const handleClick = () => {
    setActive(!active);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
  } = useForm();

  // const handleChange = (e, data) => {
  //    const number = parseFloat(data);
  //   if (isNaN(number)) {
  //     return "Not a number";
  //   } else {
  //     return Math.round(number);
  //   }
  // };

  function checkFraction(input: any) {
    const data = input.target.value;

    // if(isNaN(data))
    // setHelpertext("Not a number")

    // if(bank){
    //   setMessage(data)

    // }else if(cash){
    //   Math.floor(data)!=data?setHelpertext("dont  enter cient")
    //   setMessage(Math.floor(data))
    // }
  }

  return (
    <NoSsr>
      <Card className="mb-4 mt-5 max-w-[600px] text-[#707070]">
        <span className="ml-2">Balance</span>
        <span className="ml-2"></span> <span>Withdraw</span>
      </Card>
      <Card className="w-full max-w-[600px] relative py-8 px-6 min-[440px]:px-12">
        <div className="flex justify-between">
          <h2 className="text-[#000000] text-sm font-bold">
            Choose Payment Method
          </h2>
          <div>x</div>
        </div>

        <hr className="mb-5" />

        <Tab.Group>
          <Tab.List className="mb-3 flex flex-row justify-between  -mx-2 ">
            <Tab className="px-2">
              {" "}
              <label
                htmlFor="type1"
                className="flex  justify-between  shadow-sm items-center focus:ring-2  focus:outline-none hover:border-blue-500 active:border-blue-500 focus:border-blue-500 cursor-pointer px-3 py-2 rounded-md border-gray-300 border-2"
              >
                <input
                  type="radio"
                  className=" h-3 w-3  form-radio text-gray-800 bg-white visited:border-blue-500  border-gray-300 focus:ring-2 focus:ring-gray-800 ml-2"
                  name="type"
                  id="type1"
                  checked
                />
                <span className="text-[#707070] focus:text-gray-800 active:font-bold visited:text-gray-800 focus:font-bold focus:text-md ml-4 mr-8 hover:text-[#000000] hover:font-bold">
                  Cash
                </span>
                <Cash className="h-8 px-4 ml-4" />
              </label>
            </Tab>
            <Tab className="px-2">
              {" "}
              <label
                htmlFor="type2"
                className="flex justify-between items-center rounded-md  focus:border-blue-500 focus:outline-none cursor-pointer px-4 py-2 active:border-blue-500 hover:border-blue-500 border-gray-300 border-2"
              >
                <input
                  type="radio"
                  className=" h-3 w-3  shadow-sm form-radio text-gray-800 visited:border-blue-500  bg-white border-gray-300 focus:ring-2 focus:ring-gray-800 "
                  name="type"
                  id="type2"
                />
                <span className="text-[#707070] active:font-bold  focus:text-gray-800 visited:text-gray-800 focus:text-md ml-4 mr-8 focus:font-bold  hover:text-[#000000] hover:font-bold">
                  Bank
                </span>
                <Bank className="h-8 ml-3" />
              </label>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <div className="flex flex-row justify-center text-center font-sans ">
              <h3 className="text-md text-[#707070] mr-5 font-sans ">Amount</h3>{" "}
              <div>
                <span className="text-[12px]	text-[#9E9E9E]">Available </span>
                <span className="text-sm text-[#4375FF] ">
                  ${user?.balance}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-2 px-4">
              <form>
                <input
                  className="flex  justify-center w-[165px] h-[48px] py-2 text-center rounded-md mb-4 bg-[#FDFDFD] text-[#000000] font-bold text-xl font-sans 	border-2 border-[#D4D4D4] "
                  value={message}
                  onChange={checkFraction}
                />
              </form>
            </div>
            {helpertext && (
              <HelperText
                className="text-red w-full text-xs justify-center min-h-[20px]"
                startIcon={<ErrorIconMini className="w-5 h5" />}
              >
                <p>{helpertext}</p>
              </HelperText>
            )}
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card>{" "}
    </NoSsr>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default Home;
{
  /* <Button onClick={logout}>Logout</Button> */
}

/* <div className="mb-3 flex flex-row justify-between  -mx-2 ">
            <div className="px-2">
                <label htmlFor="type1" className="flex  justify-between  shadow-sm items-center focus:ring-2  focus:outline-none hover:border-blue-500 active:border-blue-500 focus:border-blue-500 cursor-pointer px-3 py-2 rounded-md border-gray-300 border-2">
                    <input type="radio" className=" h-3 w-3  form-radio text-gray-800 bg-white visited:border-blue-500  border-gray-300 focus:ring-2 focus:ring-gray-800 ml-2" name="type" id="type1" checked/>
                   <span className="text-[#707070] focus:text-gray-800 active:font-bold visited:text-gray-800 focus:font-bold focus:text-md ml-4 mr-8 hover:text-[#000000] hover:font-bold">Cash</span> 
                    <Cash className="h-8 px-4 ml-4"/> 
                </label>
            </div>
            <div className="px-2  ">
                <label htmlFor="type2" className="flex justify-between items-center rounded-md  focus:border-blue-500 focus:outline-none cursor-pointer px-4 py-2 active:border-blue-500 hover:border-blue-500 border-gray-300 border-2">
                    <input type="radio" className=" h-3 w-3  shadow-sm form-radio text-gray-800 visited:border-blue-500  bg-white border-gray-300 focus:ring-2 focus:ring-gray-800 " name="type" id="type2"/>
                    <span  className="text-[#707070] active:font-bold  focus:text-gray-800 visited:text-gray-800 focus:text-md ml-4 mr-8 focus:font-bold  hover:text-[#000000] hover:font-bold">Bank</span>
                    <Bank className="h-8 ml-3"/> 
                </label>
            </div>
        </div> */
