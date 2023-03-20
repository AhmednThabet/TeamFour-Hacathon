import React, { useState } from "react";

import { TrashIcon } from "lib/@heroicons";
import { Dialog } from "@headlessui/react";
import { getCookie } from "lib/js-cookie";

import DeleteRecipientConfirm from "../Deletrecipient";

const Trashrecipient = ({ id }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [neededId, setNeededId] = useState("");
  const handlleTrashClik = () => {
    setIsOpen(true);
    setNeededId(id);
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed inset-0 flex items-center  justify-center p-4 opacity-20 " />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <DeleteRecipientConfirm
              id={neededId}
              setIsOpen={setIsOpen}
              // allowDelet={allowDelet}
              // setAllowDelet={setAllowDelet}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
      <TrashIcon height={20} width={20} onClick={handlleTrashClik} />
    </div>
  );
};

export default Trashrecipient;
