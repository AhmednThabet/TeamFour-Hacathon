import IconButton from "components/IconButton";
import { Download, Send, Plus } from "lib/@heroicons";
import { useCurrentUser } from "features/authentication";
import { Button } from "components/Button";
import { Card, Link } from "components";
import { URL_PATHS } from "data";

export const Balance = ({ className = "" }) => {
  const { user } = useCurrentUser();
  const balance = user?.balance.toString().split(".");
  const classes = {
    buttonClass:
      " flex items-center  !p-1 mx-1 !text-[#4375FF] !bg-[#F3F6FF]  hover:!text-[#F3F6FF] hover:!bg-[#4375FF] md:mx-0 md:mt-2 md:w-full lg:mx-1 lg:w-max",
    imageClass: "h-4 w-4 mr-1 ",
    flexDiv: "flex items-center justify-between mt-3 ",
    p: "  lg:block  ",
  };

  return (
    <Card className={" " + className}>
      <h2 className="text-gray-400 ">Balance</h2>
      <div className={classes.flexDiv}>
        <p className="text-2xl ">
          {balance && (
            <>
              {balance[0]}.
              <span className="text-sm">{balance[1] ? balance[1] : "00"}</span>
            </>
          )}
        </p>
        <IconButton className="ml-2 text-blue-500  ">
          <Link href={URL_PATHS.HOME}>
            <Send />
          </Link>
        </IconButton>
      </div>
      <div className={classes.flexDiv + " md:flex-col lg:flex-row "}>
        <Button className={classes.buttonClass}>
          <Plus className={classes.imageClass} />
          <p className={classes.p}>Create Link</p>
        </Button>
        <Button className={classes.buttonClass}>
          <Download className={classes.imageClass} />
          <p className={classes.p}>Send Invoice</p>
        </Button>
      </div>
    </Card>
  );
};

export default Balance;
