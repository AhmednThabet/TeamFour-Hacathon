import { HelperText,NoSsr  } from "components";
import {Table }from "components/Table";
import DataList from "components/Table/useContext";
import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import {createContext,useState,useEffect}from "react";
import axios from "lib/axios";
import ContainerMain from "pages/teamFour/ContainerMain";
export const drawerContect = createContext(false);

export const CardWithdraw = ({ classname }: any) => {
  const [dataForCustomer, setDataForCustomer] = useState({
    id: 0,
    data: {},
  });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjNkOTE2MGY3YzE3ZDY3MGI1ZDZhNmQ0Iiwicm9sZSI6MX0sImV4cCI6MTY3ODIwMTQ4NywiaWF0IjoxNjc4MTE1MDg3fQ.IBH-Ni51b2RzfavciOHbhy2Dvrghjd7QDxug5Qq8SKM";

  async function fetchData() {
    let response = await axios.get(
      "https://talents-valley-backend.herokuapp.com/api/team/user/list",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let user = await response.data.data;
    setDataForCustomer(user);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return <NoSsr>
    <div>
    <DataList.Provider value={dataForCustomer} >
          <ContainerMain classname="mainContent" />
        </DataList.Provider>
    </div>
    </NoSsr>;
};

export default CardWithdraw;
