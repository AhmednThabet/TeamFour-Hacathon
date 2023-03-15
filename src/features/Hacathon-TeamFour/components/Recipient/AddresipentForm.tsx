import { Card, Input, Button } from "components";
import {
  VerificationCard,
  VerifyMobileForm,
  VerifiedSuccess,
  useMobileCode,
} from "features/verification";

import { Dialog, Transition } from "@headlessui/react";
import useForm from "lib/react-hook-form";
import { XMarkIcon } from "lib/@heroicons";
import { useCurrentUser } from "features/authentication";
const AddresipentForm = ({ setIsOpen }: any) => {
  const { user } = useCurrentUser();
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      idNumber: "",
      code: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Card className="h-[400px]  p-8 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {true && (
          <VerificationCard
            title="We need to make sure its you!"
            imgSrc="/phone.png"
          >
            <p className="text-sm text-gray-dark mb-4">
              We have sent you a verification code to your phone number{" "}
              {user?.mobile}
            </p>
            <p>Didn't get the code? Resend</p>
            <VerifyMobileForm onVerify={() => {}} />
          </VerificationCard>
        )} */}

        <Dialog.Title className="font-bold flex justify-between">
          <p>Add Recipient</p>
          <XMarkIcon
            onClick={() => setIsOpen(false)}
            height={20}
            width={20}
            className="font-bold cursor-pointer"
          />
        </Dialog.Title>
        <Input
          withoutHelperText={true}
          className="mb-2  rtl:mr-20"
          inputSize="small"
          label="Recipients Full Name (Arabic)"
          type="text"
          dir="rtl"
          {...register("name", {
            pattern: "/^[\u0621-\u064A0-9 ]+$/g",
          })}
        />
        <Input
          withoutHelperText={true}
          className="mb-2"
          inputSize="small"
          label="Recipients Phone Number"
          {...register("mobile", {
            valueAsNumber: true,
          })}
        />
        <Input
          withoutHelperText={true}
          className="mb-6"
          inputSize="small"
          label="Recipients ID Number (National ID or Passport)"
          {...register("idNumber", {
            valueAsNumber: true,
          })}
        />
        <Button
          className="mb-2"
          type="submit"
          buttonSize="medium"
          fullWidth={true}
        >
          Confirm
        </Button>
      </form>
    </Card>
  );
};

export default AddresipentForm;
