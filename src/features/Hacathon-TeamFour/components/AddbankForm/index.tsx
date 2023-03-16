import { Card, Input, Button, Select } from "components";
import { Dialog, Transition } from "@headlessui/react";
import useForm from "lib/react-hook-form";
import { useCurrentUser } from "features/authentication";
const Addbank = ({ setVisibleAddbank }: any) => {
  const { user } = useCurrentUser();
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      idNumber: "",
      code: "",
    },
  });

  const mockDataBank = [
    {
      Branch: [
        { value: "0446 - Naser", label: "0446 - Naser" },
        { value: "0454 - Rimal", label: "0454 - Rimal" },
        { value: "0448 - Nussairat", label: "0448 - Nussairat" },
        { value: "0451 - Main Branch", label: "0451 - Main Branch" },
        { value: "0452 - Khan Younis", label: "0452 - Khan Younis" },
        { value: "0453 - Jabalia", label: "0453 - Jabalia" },
        { value: "0454 - Rafah", label: "0454 - Rafah" },
      ],
    },
    {
      Ledger: [
        { value: "3000 - Current", label: "3000 - Current جاري" },
        { value: "3100 - Saving", label: "3100 - Saving توفير" },
        {
          value: "3102 - Saving For Every Citizen",
          label: "3102 - Saving For Every Citizen توفير لكل مواطن",
        },
      ],
    },
  ];
  const onSubmit = (data: any) => console.log(data);

  return (
    <Card className=" p-8 ">
      <Dialog.Title className="font-bold flex justify-between">
        <div className=" w-full flex justify-between items-center">
          <p>Add Bank Account</p>
          <span
            className=" text-xl font-bold cursor-pointer"
            onClick={() => setVisibleAddbank(false)}
          >
            X
          </span>
        </div>
      </Dialog.Title>

      <div className=" mx-5">
        <form className=" flex flex-col gap-" onSubmit={handleSubmit(onSubmit)}>
          <Input
            withoutHelperText={true}
            className=" mb-6 rtl:mr-20 text-[#8C8C8C]  font-semibold  "
            inputClassName={"bg-[#F9F9F9]"}
            inputSize="small"
            label="Bank"
            value={"Bank of Palestine"}
            placeholder={"Bank of Palestine"}
            disabled
          />

          <Select options={mockDataBank[0].Branch} label="Branch" />
          <Input
            withoutHelperText={true}
            className=" mb-6 text-[#707070] font-semibold "
            inputSize="small"
            placeholder={"Enter Your Full Name"}
            label="Account Owner Full Name"
          />
          <Input
            withoutHelperText={true}
            className=" mb-6 text-[#707070]  "
            inputSize="small"
            type="text"
            placeholder={"Enter Your Account Number"}
            label="Account Number"
            {...register("mobile", {
              valueAsNumber: true,
            })}
          />
          <Input
            withoutHelperText={true}
            className=" mb-6 text-[#8C8C8C] font-semibold "
            inputClassName={"bg-[#F9F9F9]"}
            inputSize="small"
            label="Currency"
            disabled
            placeholder="USD (001)"
            value="USD (001)"
          />

          <Select options={mockDataBank[1].Ledger} label="Branch" />

          <Button
            className=" my-5  "
            buttonSize="medium"
            fullWidth={true}
            onClick={() => setVisibleAddbank(false)}
          >
            Confirm
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Addbank;
