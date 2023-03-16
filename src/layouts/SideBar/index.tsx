import { Invoice } from "components/svg/Invoice";
import { Withdraw } from "components/svg/Withdraw";
import { Contact } from "components/svg/Contact";

import { Homeicon, Helpicon } from "lib/@heroicons";
import { Link, ButtonSideBar } from "components";
import { URL_PATHS } from "data";
export const SideBar = ({ classname }: any) => {
  return (
    <ul
      className={
        classname +
        "  -ml-5 fixed top-20 left-0 p-5 flex-col gap-3 hidden lg:flex-col lg:flex lg:justify-between"
      }
    >
      <div className={"flex flex-col gap-3"}>
        <h3 className="text-3xl p-3 mx-auto Main Menu text-[#BBBBBB]">
          Main Menu
        </h3>
        <ButtonSideBar classname={"homeButton"} icon={<Homeicon />}>
          Home
        </ButtonSideBar>
        <ButtonSideBar classname={"invoicesButton"} icon={<Invoice />}>
          Invoices
        </ButtonSideBar>

        <ButtonSideBar classname={"withdrawButton"} icon={<Withdraw />}>
          <Link href={URL_PATHS.HOME}>Balance</Link>
        </ButtonSideBar>

        <ButtonSideBar classname={"contactsButton"} icon={<Contact />}>
          <Link href="/user-manegment" prefetch={true}>
            Contacts
          </Link>
        </ButtonSideBar>
        <ButtonSideBar classname={"helpButton"} icon={<Helpicon />}>
          Help
        </ButtonSideBar>
      </div>
    </ul>
  );
};

export default SideBar;
