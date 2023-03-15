import { Button } from "components";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "../../components/svg";
import useInfoMessage from "../../components/teamFour/useInfoMessage";

const Index = () => {
  // function handleOpen() {
  //   setIsShow((prev) => !prev);
  // }
  // const [content, setContent] = useState(null);
  const { infoMessage, setIsShow: setIsShowInfoMessage } = useInfoMessage({
    children: (
      <>
        <span className="text-transparent">
          <CheckIcon />
        </span>
        <p>Some Text Here</p>
      </>
    ),
    className: "bg-[#F2FFF3] gap-5 ",
  });

  return <p></p>;
};

export default Index;
