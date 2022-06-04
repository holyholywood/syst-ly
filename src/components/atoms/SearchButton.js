import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const SearchButton = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  return (
    <div className="h-6 ml-2 flex items-center justify-center">
      <input
        type="text"
        name=""
        id=""
        className={`focus:outline-none border-myblue-2 border rounded-md -mr-6 px-2 text-mygray-3 text-opacity-70 h-full text-sm duration-500 ${
          !isSearchOpen ? "w-0" : "w-56"
        }`}
      />
      <button
        className="bg-mygray-4 w-6 h-full rounded-md z-10"
        onClick={() =>
          !isSearchOpen ? setisSearchOpen(true) : setisSearchOpen(false)
        }
      >
        <SearchIcon className="w-4 text-myblue-1 mx-auto" />
      </button>{" "}
    </div>
  );
};

export default SearchButton;
