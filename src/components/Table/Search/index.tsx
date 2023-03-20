import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "lib/@heroicons";
import { Input } from "components";

const Search = ({ onSearch, className = "" }) => {
  const [term, setTerm] = useState("");

  function handleText(e) {
    setTerm(e.target.value);
  }
  return (
    <Input
      startIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
      className={`w-[200px]  ${className}`}
      withoutHelperText
      inputClassName="shadow !py-[6px] pl-10  "
      onChange={handleText}
      value={term}
      onBlur={() => onSearch(term)}
    />
  );
};

export default Search;
