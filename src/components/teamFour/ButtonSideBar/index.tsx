import { Link } from "components";

export const ButtonSideBar = ({ children, classname, icon }: any) => {
  return (
    <li>
      <Link
        href={"#"}
        className={
          classname +
          " hover:bg-[#EAEEF2] hover:text-[#4375FF] items-center p-3 flex gap-3 justify-center rounded pl-10 transition-all"
        }
      >
        <span className=" h-5 w-5 ">{icon}</span>
        <h2 className={"flex-1"}>{children}</h2>
      </Link>
    </li>
  );
};

export default ButtonSideBar;
