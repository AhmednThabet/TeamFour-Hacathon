import React from "react";
import Balnce from "./Balnce";
import SideBar from "./SideBar";

const WithdrowLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="w-[100%]">{children}</div>
      <div>
        <Balnce />
      </div>
    </div>
  );
};

export default WithdrowLayout;
