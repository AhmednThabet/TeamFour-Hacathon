import { Dialog } from "@headlessui/react";
import EditrecipientList from "./EditrecipientList";

const Editrecipent = ({
  isOpenEdit,
  setIsOpenEdit,
  data,
  selectedPerson,
  setSelectedPerson,
}: any) => {
  return (
    <div>
      <Dialog
        open={isOpenEdit || false}
        onClose={() => setIsOpenEdit(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-20 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <EditrecipientList
              recipients={data}
              setIsOpenEdit={setIsOpenEdit}
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Editrecipent;
