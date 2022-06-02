import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import works from "../databases/worksData";

const Home = () => {
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
    <section className="w-full pt-20  px-16">
      <div className="flex w-full justify-between items-center">
        <strong> Dashboard</strong>
        <div className="flex items-center">
          <span className="text-sm">{date}</span>
          <button className="w-6 h-6 rounded-md bg-mygray-4 ml-2">
            <SearchIcon className="w-4 text-myblue-1 mx-auto" />
          </button>
        </div>
      </div>
      <div className="bg-myblue-3 h-32 rounded mt-6 text-white px-6 py-3">
        <span className="text-sm">Your Closest Assignment</span>
        <div className="flex flex-col items-center w-full gap-2 mt-4">
          <h1 className="font-semibold text-xl ">{works[0].name}</h1>
          <span className="font-light">
            {works[0].creator + " - " + works[0].assigner + " Team's"}
          </span>
        </div>
      </div>
      <h1 className="font-semibold text-mygray-2 my-4"> Dashboard</h1>
      <div className="grid grid-cols-3"></div>
    </section>
  );
};

export default Home;
