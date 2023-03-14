import { Dialog } from "@headlessui/react";
import React from "react";
import AddbankForm from "../AddbankForm";

const Addbank = ({ setVisibleAddbank, visibleAddbank }: any) => {
  return (
    <div>
      <Dialog
        open={visibleAddbank}
        onClose={() => setVisibleAddbank(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-50 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <AddbankForm setVisibleAddbank={setVisibleAddbank} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Addbank;
