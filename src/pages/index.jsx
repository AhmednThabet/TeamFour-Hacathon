import React, { useState } from "react";
import { HomeLayout } from "layouts/HomeLayout";
import { Balance, Table, DrawerBar, Trainstions, NoSsr } from "components";
import { API } from "components/teamFour/API";
import { useFetch } from "hooks";
import { getAuthorizationHeader } from "utils";

export const Home = () => {
  const Authorization = getAuthorizationHeader();
  const [isShow, setIsShow] = useState(false);

  const { data: DrawerBarInfo, isLoading, fetch } = useFetch();

  function handleClickOnTable(id) {
    setIsShow(true);
    fetch(
      API.GetWithdrawalRequestDetails(id),
      API.getOptions(Authorization.Authorization)
    );
  }
  return (
    <NoSsr>
      <HomeLayout>
        <Trainstions handleClickOnTable={handleClickOnTable} />
        <Balance />
      </HomeLayout>
      <DrawerBar
        isShow={isShow}
        setIsShow={setIsShow}
        isLoading={isLoading}
        data={DrawerBarInfo?.withdraw}
      />
    </NoSsr>
  );
};

export default Home;

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home Page Description",
  contentClassName: " !p-0 !block ",
};
