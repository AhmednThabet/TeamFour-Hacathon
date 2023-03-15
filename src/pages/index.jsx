import React, { useState } from "react";
import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { HelperText, IconButton, NoSsr, Input, Radio } from "components";
import { Cash } from "components/svg/Cash";
import { Bank } from "components/svg/Bank";
import { ErrorIconMini, XMarkIcon } from "lib/@heroicons";
import { Tab } from "@headlessui/react";
import useForm from "lib/react-hook-form";
import { FORM_VALIDATION } from "data";
import { Button } from "components";

const Home = ({ classname }) => {
  const { user } = useCurrentUser();
  const logout = useLogout();
  const [isBank, setIsBank] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      amount: "00.00",
    },
  });

  const balance = user?.balance && 983.32;

  async function onSubmit() {
    console.log(getValues());
  }

  function handleCashBank(flag) {
    setIsBank(flag);
    setAvailable(getValues().amount, flag);
  }

  function setAvailable(value, BankMode = isBank) {
    if (BankMode) {
      setValue("amount", value);
    } else {
      setValue("amount", Math.floor(value));
    }
  }

  const validtion = isBank
    ? FORM_VALIDATION.amountWithDecimal
    : FORM_VALIDATION.amountWithOutDecimal;

  return (
    <NoSsr>
      <Card className="w-full max-w-[600px] relative py-8 px-6 min-[440px]:px-12 ">
        <div className="flex justify-between">
          <h2 className="text-[#000000] text-sm font-bold">
            Choose Payment Method
          </h2>
          <IconButton>
            <XMarkIcon />
          </IconButton>
        </div>

        <hr className="mb-5" />

        <div className="flex flex-row justify-center gap-4">
          <Radio
            endIcon={<Cash className="  w-[30px]" />}
            label="cash"
            helperText="sasdssad"
            id="e"
            name="optionTab"
            className="w-[200px]"
            defaultChecked={true}
            onClick={() => handleCashBank(false)}
          />
          <Radio
            endIcon={<Bank className="  w-[30px]" />}
            label="Bank"
            helperText="sasdssad"
            id="o"
            className="w-[200px]"
            name="optionTab"
            onClick={() => handleCashBank(true)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-center text-center font-sans ">
            <h3 className="text-md text-[#707070] mr-5 font-sans ">Amount</h3>
            <p>
              <span className="text-[12px]	text-[#9E9E9E]">Available </span>
              <Button
                className="text-sm !text-[#4375FF] !p-0 inline !bg-transparent"
                onClick={() => setAvailable(balance)}
              >
                ${balance}
              </Button>
            </p>
          </div>

          <div className="flex justify-center mt-2 px-4">
            <Input
              type={"number"}
              step="any"
              className=" w-[200px]   font-semibold text-black    "
              inputClassName="border-2 text-center"
              {...register("amount", {
                ...validtion,
                max: {
                  value: balance,
                  message: `the max value should me ${balance}`,
                },
              })}
              error={errors?.amount?.message}
              helperText={errors?.amount?.message}
            />
          </div>
          {isBank ? "Bank" : "Cash"}
          <button type="submit">Submit</button>
        </form>
      </Card>
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
