import { Card, Select, Input } from "components";
import { PlusIcon } from "lib/@heroicons";
import RecipientOption from "./RecipientOption";
export const Recipient = () => {
  return (
    <Card className="w-[400px]">
      <span className="text-gray-dark my-2">
        {" "}
        Recipient <span className="text-blue-light">Edit</span>
      </span>
      <Select
        options={[
          {
            value: "First",
            label: <RecipientOption />,
          },
          { value: "First", label: <RecipientOption /> },
        ]}
        placeholder="Select a recipient"
      />
      <div className="text-blue-light flex justify-end cursor-pointer">
        {<PlusIcon height={20} width={20} />} Add Recipient{" "}
      </div>
    </Card>
  );
};

export default Recipient;
