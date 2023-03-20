import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { Card, Button } from "components";
import { XMarkIcon } from "lib/@heroicons";
import { getCookie } from "lib/js-cookie";
const DeleteRecipientConfirm = ({
  id,
  setIsOpen,
}: // allowDelet,
// setAllowDelet,
any) => {
  const token = getCookie("currentUser").accessToken;
  const [allowDelet, setAllowDelet] = useState(false);
  const fetcher = async (url: string) =>
    await axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    allowDelet
      ? `https://talents-valley-backend.herokuapp.com/api/recipient/delete/${id}`
      : null,
    // API_ENDPOINT + API_SERVICES_URLS.WITHDROW.ADDRECIPINT,
    fetcher
  );
  // console.log(data, "from Delte");
  // console.log(error, "from Delte");

  return (
    <Card className="px-6 max-w-[350px]">
      <div className="flex justify-end text-black">
        <XMarkIcon
          className=" cursor-pointer"
          height={20}
          width={20}
          onClick={() => setIsOpen()}
        />
      </div>
      <p className="my-6 ">Are you sure you want to delete this recipient?</p>
      <div className="flex justify-between gap-2">
        <Button
          className=" bg-white border shadow-md text-black hover:bg-transparent"
          fullWidth={true}
          onClick={() => setIsOpen()}
        >
          {" "}
          Cancel
        </Button>
        <Button
          className="bg-red text-white border shadow-md hover:bg-red"
          fullWidth={true}
          onClick={() => setAllowDelet(true)}
        >
          {isLoading ? "Loading" : "Delete"}
        </Button>
      </div>
    </Card>
  );
};

export default DeleteRecipientConfirm;
