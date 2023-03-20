import SideBar from "../WithdrowLayout/SideBar";
export const HomeLayout = ({ children, withoutDefaultSider = false }) => {
  const classes = {
    left: " fixed top-[60px] left-0 transition-all z-40 h-[calc(100vh-60px)] w-[180px]   z-50 bg-white   lg:bg-transparent   lg:h-[calc(100vh-120px)]  lg:flex ",
    center:
      "mt-3 order-3   w-full md:mt-0  md:order-1  md:w-[75%]  lg:w-1/2 lg:ml-[180px]  ",
    balance:
      " w-max right-0  md:order-2 md:fixed md:left-[calc(75%_+_10px)]  lg:left-[max(calc(50%_+_200px),740px)] ",
  };

  let left, center, right;
  if (!Array.isArray(children)) {
    children = [children];
  }
  if (withoutDefaultSider) {
    [left, center, right] = children;
  } else {
    left = <SideBar className={classes.left} />;
    [center, right] = children;
  }

  return (
    <div className="mt-[60px] p-4  py-8 flex  flex-col md:flex-row items-start   ">
      {left}
      <div className={classes.center}>{center}</div>
      <div className={classes.balance}>{right}</div>
    </div>
  );
};

export default HomeLayout;
