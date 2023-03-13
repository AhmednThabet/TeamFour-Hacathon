import { Button, Aside } from "components";
import React, { useState } from "react";
import Sidebar from "../../components/teamFour/Sidebar";
const Index = () => {
  function handleShow(flag) {
    setIsShow(flag);
  }

  function Toggle() {
    setIsShow((prev) => !prev);
  }

  function x() {
    console.log("x");
  }

  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      Test TeamFour
      <Button onClick={Toggle}>Show Drop</Button>
      <Button onClick={x}>console.log</Button>
      <Sidebar
        isShow={isShow}
        setIsShow={handleShow}
        onClick={() => console.log("sddsfsdf")}
      />
    </div>
  );
};

export default Index;
