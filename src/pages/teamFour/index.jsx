import { Button } from "components";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/teamFour/Sidebar";
import { API } from "../../components/teamFour/API";
import { useFetch } from "hooks";

const Index = () => {
  const [isShow, setIsShow] = useState(false);
  function handleShow(flag) {
    setIsShow(flag);
  }
  function handleOpen() {
    setIsShow((prev) => !prev);
  }

  const [content, setContent] = useState(null);

  const { isLoading, fetch } = useFetch();

  function handleClickOnTable(id) {
    handleShow(true);
    fetch(API.GetWithdrawalRequestDetails(id), API.getOptions()).then(
      (data) => {
        setContent(data.withdraw);
      }
    );
  }

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
        setIsShow={handleShow}
        isLoading={isLoading}
        data={content}
      />
    </div>
  );
};

export default Index;
