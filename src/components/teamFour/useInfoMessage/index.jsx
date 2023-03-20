import React, { useState } from "react";
import InfoMessage from "../InfoMessage";

export function useInfoMessage({ children = "", className = "", duration }) {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState({
    children: children,
    className: className,
  });

  const element = (
    <InfoMessage
      className={data.className}
      show={isShow}
      setShow={() => setIsShow(false)}
      duration={duration}
    >
      {children}
    </InfoMessage>
  );

  return { infoMessage: element, setInfoMessage: setData, isShow, setIsShow };
}

export default useInfoMessage;
