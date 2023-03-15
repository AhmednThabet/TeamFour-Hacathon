import { Dialog } from "@headlessui/react";
import React from "react";
import WithdraWPrevieW from "../withdrawPreview";

const AddWithdrawPreview = ({ setvisibleConfirm, visibleConfirm }: any) => {
  return (
    <div>
      <Dialog
        open={visibleConfirm}
        onClose={() => setvisibleConfirm(false)}
        className="relative z-50 "
      >
        <Dialog.Overlay className="bg-black fixed opacity-50 inset-0" />

        <div className="fixed inset-0 flex items-center  justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded ">
            <WithdraWPrevieW setvisibleConfirm={setvisibleConfirm} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AddWithdrawPreview;
