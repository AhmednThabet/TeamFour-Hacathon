import React, { useState } from "react";
import Message from "../Message";

export function useMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    children: "",
    action: () => {},
    closeButton: false,
    actionButton: false,
    classNameCloseButton: "",
    classNameActionButton: "",
    actionWithClose: false,
    className: "",
  });
  function closeModalWithAction() {
    setIsOpen(false);
    return data.action();
  }

  function normalAction() {
    return data.action();
  }
  const fun = data.actionWithClose ? closeModalWithAction : normalAction;

  const element = (
    <Message
      title={data.title}
      action={fun}
      closeButton={data.closeButton}
      actionButton={data.actionButton}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      classNameActionButton={data.classNameActionButton}
      classNameCloseButton={data.classNameCloseButton}
      className={data.className}
    >
      {data.children}
    </Message>
  );
  return { isOpen, setIsOpen, message: element, setMessage: setData };
}

export default useMessage;
