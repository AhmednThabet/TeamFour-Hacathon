import React, { useState } from "react";
import Card from "components/Card";
import { useCurrentUser } from "features/authentication";
import { IconButton, NoSsr, Input, Radio } from "components";
import { Bank, Cash } from "components/svg";
import { XMarkIcon } from "lib/@heroicons";
import useForm from "lib/react-hook-form";
import { FORM_VALIDATION } from "data";
import { Button } from "components";

const Home = ({ classname }) => {
  const { user } = useCurrentUser();
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

export default Home;
