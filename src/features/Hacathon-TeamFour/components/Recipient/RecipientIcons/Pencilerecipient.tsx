import React, { useState } from "react";
import { PencilIcon } from "lib/@heroicons";
import axios from "axios";
import useSWR from "swr";
import { getCookie } from "lib/js-cookie";
const Pencilerecipient = ({ id }: any) => {
  const token = getCookie("currentUser").accessToken;

  //   const fetcher = async (url: string) =>
  //     await axios
  //       .put(url, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => res.data);

  //   const { data, error, isLoading } = useSWR(
  //     `https://talents-valley-backend.herokuapp.com/api/recipient/delete/${id}`,
  //     // API_ENDPOINT + API_SERVICES_URLS.WITHDROW.ADDRECIPINT,
  //     fetcher
  //   );
  //   console.log(data);

  //   const handleEditRecipent = (btn: any, operation: any) => {
  //     console.log(btn, operation);
  //     if (operation === "delet") {
  //       setUrl(
  //         `https://talents-valley-backend.herokuapp.com/api/recipient/delete/${btn._id}`
  //       );
  //     }
  //   };
  return (
    <div>
      <PencilIcon className="" height={20} width={20} />
    </div>
  );
};

export default Pencilerecipient;
