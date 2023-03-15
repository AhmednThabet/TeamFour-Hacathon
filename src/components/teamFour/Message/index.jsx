import { Dialog, Fragment, Transition } from "@headlessui/react";
import Button from "../../Button";
import IconButton from "../../IconButton";
import { XMarkIconMini } from "lib/@heroicons";

export function Message({
  title,
  isOpen = false,
  setIsOpen,
  children,

  actionButton = false,
  closeButton = false,
  classNameCloseButton = "",
  classNameActionButton = "",
  className = "",
  action,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div
                    className={` flex flex-col justify-between min-w-[200px] gap-[20px]  ${className}`}
                  >
                    <div>{children}</div>
                    <div className="flex flex-row gap-[20px]">
                      {closeButton && (
                        <Button
                          onClick={closeModal}
                          className={`!bg-white text-black border !p-2 w-full hover:bg-gray-100 rounded-md ${classNameCloseButton}`}
                        >
                          {closeButton}
                        </Button>
                      )}
                      {actionButton && (
                        <Button
                          onClick={() => action()}
                          className={`  border !p-2 w-full ${classNameActionButton}`}
                        >
                          {actionButton}
                        </Button>
                      )}
                    </div>
                  </div>
                  <IconButton
                    onClick={closeModal}
                    className="flex justify-center items-center absolute top-0 right-0 -translate-x-2 translate-y-2"
                  >
                    <XMarkIconMini />
                  </IconButton>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Message;
