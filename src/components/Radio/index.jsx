import React, { useEffect } from "react";
import { forwardRef } from "react";

export const Radio = forwardRef(
  (
    {
      label,
      id,
      className,
      inputClassName,
      startIcon,
      endIcon,
      inputSize = "medium",
      type = "Radio",
      error = false,
      labelClassName,
      focusableLabel = false,

      ...rest
    },
    ref
  ) => {
    const classNames = {
      inputContainer: `p-3 px-9 mb-1 relative text-gray-dark  border-2 rounded-lg  hover:cursor-pointer capitalize flex justify-between relative ${
        className ?? ""
      }`,
      label: `block mb-1 ${labelClassName ?? ""}`,
      icon: " absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
      startIcon: "left-4",
      endIcon: "  right-4",
      helperText: "inline-flex min-h-[20px] text-xs mt-1",
    };

    if (error) {
      classNames.inputContainer += " border-red focus:border-red";
    }

    return (
      <div className="relative ">
        <input
          id={id}
          type={type}
          className={" hidden  peer "}
          ref={ref}
          {...rest}
        />
        <label
          className={
            classNames.inputContainer +
            " transition-all  w-full  pl-12 peer-checked:border-blue-400 peer-checked:text-black peer-checked:font-semibold "
          }
          htmlFor={id}
          tabIndex={focusableLabel ? 0 : undefined}
        >
          {label}
          {startIcon && (
            <span className={`  ${classNames.icon} ${classNames.startIcon}`}>
              {startIcon}
            </span>
          )}

          {endIcon && (
            <span className={`${classNames.icon} ${classNames.endIcon}`}>
              {endIcon}
            </span>
          )}
        </label>
        <span className=" transition-all border border-gray-400 peer-checked:block peer-checked:bg-blue-500 peer-checked:border-blue-500  w-3 h-3 rounded-full   absolute top-1/2 left-5 -translate-y-1/2"></span>
      </div>
    );
  }
);

Radio.displayName = "Radio";
export default Radio;
