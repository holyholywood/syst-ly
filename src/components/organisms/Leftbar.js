import React, { useState } from "react";
import Brand from "../molecules/Brand";
import team from "../../databases/teamName";
import works from "../../databases/worksData";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  XCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import asset1 from "../../img/asset1.png";
const Leftbar = () => {
  const [closeState, setcloseState] = useState("w-96");
  const [isClose, setIsClose] = useState(false);
  return (
    <section
      className={`2xl:w-${closeState} h-screen bg-white ${
        !isClose ? "px-4" : "px-2"
      }  sticky top-0 right-shadow duration-1000 ${closeState}`}
    >
      <button
        className={`top-3 ${
          !isClose ? "right-2" : "right-1"
        }  flex justify-center items-center  w-10 h-10 absolute group`}
        onClick={() => {
          !isClose ? setIsClose(true) : setIsClose(false);
          closeState === "w-96" ? setcloseState("w-14") : setcloseState("w-96");
        }}
      >
        {!isClose ? (
          <XCircleIcon className="w-8 text-myblue-3 group-hover:text-myblue-2" />
        ) : (
          <MenuIcon className="w-8 text-myblue-3 group-hover:text-myblue-2" />
        )}
      </button>
      <Brand isClose={isClose} />
      <ul className="grid grid-cols-1 gap-y-6">
        <li className={`relative ${!isClose && "after:activemenu"}`}>
          <button
            className={`flex items-center w-full justify-between ${
              !isClose && "pr-10 2xl:pr-16"
            } `}
          >
            <HomeIcon className="w-6 text-myblue-1" />
            {!isClose && <strong className="text-mygray-1">Dashboard</strong>}
          </button>
        </li>
        <li className="text-mygray-6">
          <button className="flex items-center w-full justify-between">
            <UserGroupIcon className="w-6" />
            {!isClose && (
              <>
                <strong className="flex">Team's</strong>
                <ChevronDownIcon className="w-5" />
              </>
            )}
          </button>
          <ul className="hidden">
            {team.map((team, index) => {
              return <li key={index}>{team.name}</li>;
            })}
          </ul>
        </li>
        <li className="text-mygray-6">
          <button className="flex items-center w-full justify-between">
            <BriefcaseIcon className="w-6" />
            {!isClose && (
              <>
                {" "}
                <strong>Work's</strong>
                <ChevronDownIcon className="w-5" />
              </>
            )}
          </button>
          <ul className="hidden">
            {works.map((work, index) => {
              return (
                <li key={index}>
                  {work.name} -
                  {work.assigner.length > 3
                    ? work.assigner.substring(0, 4) + "..."
                    : work.assigner}
                </li>
              );
            })}
            <li className="underline">
              <a href="/#"> View All Work's</a>
            </li>
          </ul>
        </li>
      </ul>
      {!isClose && (
        <div className="rounded bg-myblue-2 w-44 h-44 2xl:w-56 -mb-10 absolute bottom-20 px-1 flex flex-col gap-2">
          <img src={asset1} alt="work" className="w-22 -m-10 mb-6 mx-auto" />
          <p className="text-center text-mygray-1 font-semibold">
            More Service's from Semanticsm
          </p>
          <button className="bg-myblue-1 text-sm font-semibold text-white p-1 rounded-md hover:bg-myblue-3 duration-500">
            Visit semanticsm.com
          </button>
        </div>
      )}
    </section>
  );
};

export default Leftbar;
