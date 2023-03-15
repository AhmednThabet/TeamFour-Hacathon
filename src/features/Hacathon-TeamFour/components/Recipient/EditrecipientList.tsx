import { Button, Card, Input } from "components";
import { XMarkIcon } from "lib/@heroicons";
import { TrashIcon, PencilIcon } from "lib/@heroicons";
const EditrecipientList = ({ recipients, setIsOpenEdit }: any) => {
  console.log(recipients, "From form");

  return (
    <Card className="w-[450px] px-10">
      <div className="flex justify-between mb-8">
        <p className="font-bold">Recipients</p>
        <XMarkIcon
          height={20}
          width={20}
          onClick={() => setIsOpenEdit()}
          className="cursor-pointer"
        />
      </div>
      <div id="resipients" className="h-[300px] pr-2 overflow-y-auto">
        {recipients.map((recipient: any) => (
          // <RecipientOption
          //   data={recipient}
          //   customClassName="border-2 my-2 rounded-md"
          // />
          <Button
            key={recipient.id}
            fullWidth={true}
            className="mb-2  bg-white border !text-gray-dark hover:bg-gray-light focus:border-blue"
          >
            <div
              className={`flex flex-col  w-full  border-gray  px-4  cursor-pointer `}
            >
              <div className="flex justify-between">
                <div className="icons flex gap-2 justify-between ">
                  <TrashIcon height={20} width={20} />
                  <PencilIcon height={20} width={20} />
                </div>
                <p className="float-right text-bold ">{recipient.name}</p>
              </div>
              <div className="flex justify-between text-gray-dark">
                <p>ID:{recipient.idNumber}</p>
                <p className="">Phone :{recipient.mobile}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="flex justify-between gap-4 my-4">
        <Button
          buttonSize="small"
          fullWidth={true}
          className="bg-white !text-blue-light shadow-md border hover:!text-white"
        >
          Add
        </Button>
        <Button buttonSize="small" fullWidth={true} className="shadow-md">
          Select
        </Button>
      </div>
    </Card>
  );
};

export default EditrecipientList;
