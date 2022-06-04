import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import SearchButton from "../atoms/SearchButton";

const Topbar = ({ Heading }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(
      new Date().toDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }, []);
  return (
    <div className="flex w-full justify-between items-center">
      <strong> {Heading}</strong>
      <div className="flex items-center">
        <span className="text-sm">{date}</span>
        <SearchButton />
      </div>
    </div>
  );
};

export default Topbar;
