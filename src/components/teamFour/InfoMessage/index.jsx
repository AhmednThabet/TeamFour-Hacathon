import { Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

export function InfoMessage({
  children = "",
  className = "",
  show = false,
  setShow,
  duration = 3000,
}) {
  console.log(show);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow();
      }, duration);
    }
  }, [show]);

  return (
    <>
      <Transition
        show={show}
        as={Fragment}
        enter="ease-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          role={"button"}
          onClick={() => setShow()}
          className={`fixed min-w-[200px] h-[50px] flex   items-center p-5 rounded-md shadow-lg ${className}`}
        >
          {children}
        </div>
      </Transition>
    </>
  );
}

export default InfoMessage;
