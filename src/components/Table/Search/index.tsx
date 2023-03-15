import { useState, useEffect } from "react";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "lib/@heroicons";

const Search = ({ setSearch: onSearchSubmit }: any) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    } else {
      onSearchSubmit("");
    }
  }, [onSearchSubmit, term]);
  return (
    <div className="relative mb-4 ">
      <MagnifyingGlassIcon
        width={24}
        height={24}
        className="absolute inset-2"
      />
      <input
        type="search"
        placeholder="search"
        value={debouncedTerm}
        onChange={(e) => setDebouncedTerm(e.target.value)}
        className="w-full border-none py-2 rounded px-12"
      />
      {/* <AdjustmentsHorizontalIcon
        width={24}
        height={24}
        className="absolute right-4 top-4 cursor-pointer"
      /> */}
      <div className=""></div>
    </div>
  );
};

export default Search;
