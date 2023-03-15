// import React from 'react'
import { Card } from "components";
import { Dialog } from "@headlessui/react";
import VerfiyCode from "./index";
const VerfiyModal = ({ isOpen, setIsOpen, url, body }: any) => {
  console.log(body);

  return (
    <Card className="rounded-lg">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-50 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <VerfiyCode url={url} body={body} closeModle={setIsOpen} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </Card>
  );
};

export default VerfiyModal;
