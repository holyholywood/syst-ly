import React, { useEffect, useState } from "react";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import works from "../databases/worksData";
import team from "../databases/teamName";
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
      <h1 className="font-semibold text-mygray-2 my-4">Your Team's</h1>
      <div className="grid grid-cols-3 place-items-center">
        <div className="bg-mygreen rounded  w-44 h-44 place-self-start">
          <div className="bg-mygray-4 w-20 h-20 rounded-full mx-auto mt-4"></div>
          <h4 className="text-white block text-center font-bold mt-4">
            {team[0].name}
          </h4>
          <a href="/#" className="mt-2 ml-3 block text-sm text-white">
            View Profile
          </a>
        </div>
        <div className="bg-myred rounded  w-44 h-44">
          <div className="bg-mygray-4 w-20 h-20 rounded-full mx-auto mt-4"></div>
          <h4 className="text-white block text-center font-bold mt-4">
            {team[1].name}
          </h4>
          <a href="/#" className="mt-2 ml-3 block text-sm text-white">
            View Profile
          </a>
        </div>
        <div className="bg-myblue-1  rounded w-44 h-44 place-self-end">
          <div className="bg-myblue-1 w-20 h-20 rounded-full mx-auto mt-4">
            <PlusCircleIcon className="w-full text-white" />
          </div>
          <h4 className="text-white block text-center font-bold mt-4">
            Search for Team's
          </h4>
        </div>
      </div>
      <h1 className="font-semibold text-mygray-2 my-4">Your Assignment's</h1>
      {works.map((work, index) => {
        return (
          <div className="w-full h-16 rounded bg-myblue-3 text-white flex items-center px-4 gap-x-8 my-4 justify-between">
            <h1 className="text-2xl font-semibold">{work.name}</h1>
            <div className="flex gap-x-6">
              <span className="flex justify-between gap-x-10">
                {work.creator + " - " + work.assigner}
              </span>
              <span className="block place-self-end">{work.deadline}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
