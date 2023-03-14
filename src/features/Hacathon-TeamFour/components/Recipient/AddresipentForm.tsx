import { Card, Input, Button } from "components";
import { Dialog, Transition } from "@headlessui/react";
import useForm from "lib/react-hook-form";
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
