import { Card, Input, Button } from "components";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useForm from "lib/react-hook-form";
import { useCurrentUser } from "features/authentication";
import VerifyModal from "../VerfiyCode/VerfiyModal";
import { getAuthorizationHeader } from "utils";

const AddresipentForm = ({ setIsOpen }: any) => {
  const objectHeader = getAuthorizationHeader();
  const { user } = useCurrentUser();

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mobile: "+",
      idNumber: "",
      code: "123456",
    },
  });
  const [verifyBody, setVerifyBody] = useState();
  console.log(user);

  const onSubmit = (data: any) => setVerifyBody(data);
  const [showVerfication, setShowVerfication] = useState(false);
  const handleConfirm = async () => {
    console.log("dsdsd");

    const data = await fetch(
      "https://talents-valley-backend.herokuapp.com/api/recipient/send-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...objectHeader,
        },
        body: JSON.stringify({
          mobile: user && user.mobile,
          idNumber: user && user.verifiedId.idNumber,
        }),
      }
    );
  };

  const handleConfirmClick = () => {
    setShowVerfication(true);
    handleConfirm();
  };

  return (
    <Card className="h-[400px] p-8 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Title className="font-bold flex justify-between">
          <p>Add Recipient</p>
        </Dialog.Title>
        <Input
          withoutHelperText={true}
          className="mb-2  rtl:mr-20"
          inputSize="small"
          label="Recipients Full Name (Arabic)"
          type="text"
          dir="rtl"
          {...register("name")}
        />
        <Input
          withoutHelperText={true}
          className="mb-2"
          inputSize="small"
          label="Recipients Phone Number"
          {...register("mobile")}
        />
        <Input
          withoutHelperText={true}
          className="mb-6"
          inputSize="small"
          label="Recipients ID Number (National ID or Passport)"
          {...register("idNumber")}
        />
        <VerifyModal
          isOpen={showVerfication}
          setIsOpen={setShowVerfication}
          url="https://talents-valley-backend.herokuapp.com/api/recipient/create"
          body={verifyBody && verifyBody}
          closeModle={setIsOpen}
        />
        <Button
          className="mb-2"
          type="submit"
          buttonSize="medium"
          fullWidth={true}
          onClick={handleConfirmClick}
        >
          Confirm
        </Button>
      </form>
    </Card>
  );
};

export default AddresipentForm;
