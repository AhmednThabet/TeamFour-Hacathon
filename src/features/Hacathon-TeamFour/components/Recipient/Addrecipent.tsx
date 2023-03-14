import { Dialog, Transition } from "@headlessui/react";
import AddresipentForm from "./AddresipentForm";
const Addrecipent = ({ isOpen, setIsOpen }: any) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-50 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <AddresipentForm setIsOpen={setIsOpen} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Addrecipent;
