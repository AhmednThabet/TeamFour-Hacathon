import { TimeLine, Interstions, Header, Details } from "./components";
import { Drawer, Button, Loading } from "components";
import { useEffect, useState } from "react";
import { useFetch } from "hooks";
import { API } from "../API";
import { format } from "../API/format";
import useMessage from "../useMessage";
import { getAuthorizationHeader } from "utils";

function getAction(status) {
  const Authorization = getAuthorizationHeader();

  const typeStatus = status.toLowerCase();
  switch (typeStatus) {
    case "pending":
      return {
        text: "Cancel Withdrawal",
        action: (id) => [
          API.cancelWithdrawRequest(id),
          API.getOptions(Authorization.Authorization, "PUT"),
        ],
        disabled: false,
        hasRequestUrl: true,
      };
    case "cancelled":
      return {
        text: "Confirm Receipt",
        action: () => {},
        disabled: true,
        hasRequestUrl: false,
      };
    case "completed":
      return {
        text: "Report a Problem",
        action: () => "Report a Problem\n the API is not make",
        disabled: false,
        hasRequestUrl: false,
      };
    case "sent":
    case "ready":
      return {
        text: "Confirm Receipt",
        action: (id) => [
          API.confrimWithdrawRequest(id),
          API.getOptions(
            Authorization.Authorization,
            "PUT",
            JSON.stringify({
              isConfirmed: true,
            })
          ),
        ],
        disabled: false,
        hasRequestUrl: true,
      };
  }
}

export const DrawerBar = ({ isShow = false, setIsShow, isLoading, data }) => {
  const content = !isLoading && data && format.response(data);
  const action = content && getAction(content?.status);

  const { message, setIsOpen, setMessage } = useMessage();
  const {
    message: requestMessage,
    setIsOpen: setIsOpenRequset,
    setMessage: setRequestMessage,
  } = useMessage();

  useEffect(() => {
    setMessage({
      children: <p>Are you sure you want to {action?.text}?</p>,
      closeButton: "Close",
      actionButton: "Delete",
      action: () => request(action, action.action(content?.id)),
      actionWithClose: true,
      classNameActionButton: " !bg-[#D84242] text-white hover:!bg-[#D84242] ",
      className: "px-6 pt-4 w-[300px]",
    });
  }, [data]);

  const { response, fetch } = useFetch();
  function request(action, url) {
    let message = "Error Message";
    // const [link, options] = url;
    // if (action.hasRequestUrl) {
    //   fetch(link, options)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => (message = err));
    // } else {
    //   message = url;
    // }
    message = url[0];
    setRequestMessage({
      children: <p className="break-words">{message}</p>,
      closeButton: "Close",
      classNameActionButton: " !bg-[#D84242] text-white hover:!bg-[#D84242] ",
      className: "px-6 pt-4 w-[300px] text-center",
    });
    setIsOpenRequset(true);
  }
  function handleClose() {
    setIsShow(false);
  }

  return (
    <>
      <Drawer
        isShow={isShow}
        setIsShow={handleClose}
        title="Withdrawal"
        className="  py-2 px-[16px] "
      >
        <div className="flex-grow flex flex-col justify-between gap-4">
          {isLoading || !content ? (
            <div className="flex flex-col justify-between h-full w-[300px]">
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <Loading className="bg-white p-4 w-full " key={item} />
                ))}
              </div>
              <Loading className="bg-white  !h-[46px] overflow-hidden" />
            </div>
          ) : (
            <>
              <div className=" flex flex-col  gap-4 ">
                <Header data={content} />
                <Details data={content} />
                <TimeLine data={content?.history} />
                <Interstions data={content.interstions} />
              </div>
              <Button
                onClick={() => setIsOpen(true)}
                className="!bg-white !text-black hover:!bg-white shadow-sm border border-[#E2E2E2] capitalize  "
                disabled={action.disabled && true}
              >
                {action.text}
              </Button>
            </>
          )}
        </div>
      </Drawer>
      {message}
      {requestMessage}
    </>
  );
};

export default DrawerBar;
