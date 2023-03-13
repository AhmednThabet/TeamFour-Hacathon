import Details from "../../../pages/teamFour/Details";
import Header from "../../../pages/teamFour/Header";
import Interstion from "../../../pages/teamFour/interstions";
import { Aside, Button, Card } from "../../../components";
import TimeLine from "../../../pages/teamFour/TimeLine";

/**
 *
 * bank = {
 * name
 * number
 * image
 * }
 *data = {
  price = "300", status = "pending", bank 
 }
 *
 */
const testData = {
  price: 300,
  status: "completed",
  type: "cash", // or cash
  x: {
    name: "Bank of palestine",
    number: "0454 4564 65456 65465 ",
  },
  instructions: [
    "Address: الرمال - تقاطع شارع فلسطين مع الشهداء",
    "Bring your ID for identification",
    "Working hours from 9:00 am to 7:00 pm",
  ],
  infos: {
    name: "Mojerm ☠️☠️",
    date: "Within 24 Hours (Avg:2hrs)",
  },
};

export const Sidebar = ({
  isShow = false,
  setIsShow,
  data = testData,
  onClick,
  textButton = "Cancel With drawal",
}) => {
  return (
    <>
      <Aside
        isShow={isShow}
        setIsShow={setIsShow}
        title="Withdrawal"
        className="  py-2 px-[16px] "
      >
        <div className="flex-grow flex flex-col justify-between">
          <div className=" flex flex-col  gap-4 ">
            <Header data={data} />
            <Details isBank={data.type == "bank"} data={data.infos} />
            <TimeLine />
            <Interstion data={testData.instructions} />
          </div>

          <Button
            onClick={onClick}
            className="bg-white !text-black hover:!bg-white shadow-sm border border-[#E2E2E2] capitalize"
          >
            {textButton}
          </Button>
        </div>
      </Aside>
    </>
  );
};

export default Sidebar;
