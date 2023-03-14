import { TimeLine, Interstion, Header, Details } from "./components";
import { Aside, Button, Loading } from "components";
import { useEffect, useState } from "react";
import { useSWRTeam } from "hooks/useSWR/useSWRTeam";
import { API_SERVICES_URLS } from "data";

function format(data) {
  let finshData = {
    status: data.status,
    amount: data.amount,
    history: data.history,
  };

  if (data.typeWithdraw == "bank") {
    finshData = {
      provider: {
        name: data.bank.bankName,
        infos: data.bank.accountNumber,
      },
      isBank: true,
      ...finshData,
    };
  } else {
    finshData = {
      provider: {
        name: data.office.name,
        infos: data.office.address,
        fees: data.office.fees,
      },
      isBank: false,
      ...finshData,
    };
  }
  return finshData;
}

export const Sidebar = ({
  isShow = false,
  setIsShow,
  id,
  textButton = "Cancel With drawal",
}) => {
  function handleClose() {
    setIsShow(false);
  }
  console.log(id);

  function handleAction() {
    console.log("dfsd");
  }

  let formatData = null;

  const { data, error, isLoading } = useSWRTeam(
    API_SERVICES_URLS.WITHDRAWAL.GetRequestDetails(id)
  );
  console.log(API_SERVICES_URLS.WITHDRAWAL.GetRequestDetails(id));

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      formatData = format(data.data);
    }
  }, [isLoading]);

  return (
    <>
      <Aside
        isShow={isShow}
        setIsShow={handleClose}
        title="Withdrawal"
        className="  py-2 px-[16px] "
      >
        <div className="flex-grow flex flex-col justify-between gap-4">
          {!isLoading ? (
            <>
              <div className=" flex flex-col  gap-4 ">
                <Header data={formatData} />
                <Details data={formatData} />
                <TimeLine data={formatData.history} />
                {/* <Interstion data={data.instructions} /> */}
              </div>

              <Button
                onClick={handleAction}
                className="bg-white !text-black hover:!bg-white shadow-sm border border-[#E2E2E2] capitalize"
              >
                {textButton}
              </Button>
            </>
          ) : (
            <div className="flex flex-col justify-between h-full w-[300px]">
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((item) => (
                  <Loading className="bg-white p-4 w-full " key={item} />
                ))}
              </div>
              <Loading className="bg-white  !h-[46px] overflow-hidden" />
            </div>
          )}
        </div>
      </Aside>
    </>
  );
};

export default Sidebar;
