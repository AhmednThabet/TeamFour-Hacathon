import { Link } from "components";

export const Footer = () => {
  return (
    <footer className=" flex justify-center items-center py-6 px-3 text-xs sm:px-12  sm:text-sm fixed bottom-0 left-1/2 -translate-x-1/2 ">
      <Link href="#">Talents Valley</Link>
      <Link href="#" className="px-3  sm:px-16">
        Contacts
      </Link>
      <Link href="#"> Privacy & Terms</Link>
    </footer>
  );
};
