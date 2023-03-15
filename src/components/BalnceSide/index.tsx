import IconButton from "components/IconButton";
import { Download, Send, Plus } from "../../lib/@heroicons/index";
import Button from "components/Button";

export const Balnce = ({ classname }: any) => {
  return (
    <div
      className={
        classname +
        " h-48 md:ml-3 lg:ml-7 min-w-fit rounded-lg p-5 w-full flex  md:w-[35%] lg:w-[30%] flex-col gap-4 bg-[#FFFFFF] "
      }
    >
      <h2 className="text-[#8C8C8C]">Balance</h2>
      <h3 className=" text-xl md:text-2xl lg:text-3xl">
        $250.<span className="text-sm">00</span>
        <IconButton className=" ml-1 p-2 ">
          <Download className="  rounded-sm !text-[#4375FF] !bg-[#F3F6FF] w-5 h-5 mr-5 hover:!text-[#F3F6FF] hover:!bg-[#4375FF]" />
        </IconButton>
      </h3>
      <div className="flex gap-1 md:gap-5">
        <Button className="  flex text-xs sm:text-sm  md:min-w-fit md:text-base selection: hover:!text-[#F3F6FF] hover:!bg-[#4375FF] items-center	justify-center   !text-[#4375FF] !bg-[#F3F6FF] w-[50%] px-0 sm:px-3">
          <Plus className="w-5 h-5 mr-[8px] sm:mr-5 md:mr-[10px]" /> Create Link
        </Button>
        <Button className="  flex text-xs sm:text-sm  md:min-w-fit md:text-base hover:!text-[#F3F6FF] hover:!bg-[#4375FF] items-center	justify-center   !text-[#4375FF] !bg-[#F3F6FF] w-[50%] px-0 sm:px-3">
          <Send className="w-5 h-5 mr-[8px] sm:mr-5 md:mr-[10px]" /> Send
          Invoice
        </Button>
      </div>
    </div>
  );
};

export default Balnce;
