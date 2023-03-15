import { Link } from "components";
import { URL_PATHS } from "data";
import { User } from "lib/@heroicons";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
const NavLinks = () => {
  const { user } = useCurrentUser();
  return (
    <NoSsr>
    <div className="flex flex-row text-sm text-[#707070]">
<div> <User width={30} height={30}/>
          </div>
      
<div><h2>{user?.firstName}{user?.lastName}</h2>
            <p>{user?.email}</p></div>
            
        
          
      {/* <Link
        href={URL_PATHS.HOME}
        className="px-6 transition-colors hover:text-blue"
      >
        Home
      </Link>
      <Link
        href={URL_PATHS.INVOICES.INDEX}
        className="px-6 transition-colors hover:text-blue"
      >
        Invoices
      </Link>
      <Link
        href={URL_PATHS.INVOICES.CREATE}
        className="px-6 py-1 text-blue border rounded-full border-blue transition-colors hover:bg-blue hover:text-white"
      >
        Create
      </Link> */}
    </div>
    </NoSsr>
  );
};

export default NavLinks;
