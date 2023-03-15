import { Button } from "components";
import React, { useEffect, useState } from "react";
import { API } from "../../components/teamFour/API";
import { useFetch } from "hooks";
import { InfoMessage, Sidebar } from "../../components";
import { CheckIcon } from "../../components/svg";
import useInfoMessage from "../../components/teamFour/useInfoMessage";

const Index = () => {
  const [isShow, setIsShow] = useState(false);

  const { data, isLoading, fetch } = useFetch();

  function handleClickOnTable(id) {
    setIsShow(true);
    fetch(API.GetWithdrawalRequestDetails(id), API.getOptions());
  }

  function handleOpen() {
    setIsShow((prev) => !prev);
  }
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
  console.log(setIsShowInfoMessage);

  return (
    <div>
      Test TeamFour
      <Button onClick={() => handleClickOnTable("640f895676001ef82fbff621")}>
        bank pending
      </Button>
      <Button onClick={() => handleClickOnTable("640f5cb778fd73b40d217e37")}>
        cash pending
      </Button>
      <Button onClick={() => handleClickOnTable("640f5c2fbd6b19cef572ff61")}>
        completed
      </Button>
      <Button onClick={() => handleOpen()}>Show Drop</Button>
      <Sidebar
        isShow={isShow}
        setIsShow={setIsShow}
        isLoading={isLoading}
        data={data?.withdraw}
      />
      {infoMessage}
      <button onClick={() => setIsShowInfoMessage(true)}>Show</button>
    </div>
  );
};

export default Index;
