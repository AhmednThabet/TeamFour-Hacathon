import { Dialog } from "@headlessui/react";
import React from "react";
import AddOfficeForm from "../AddOfficeForm";

const AddOffice = ({ setVisibleAddOffice, visibleAddOffice }: any) => {
  return (
    <div>
      <Dialog
        open={visibleAddOffice}
        onClose={() => setVisibleAddOffice(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-50 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <AddOfficeForm setVisibleAddOffice={setVisibleAddOffice} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AddOffice;
