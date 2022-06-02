import React from "react";
import Brand from "../molecules/Brand";
import team from "../../databases/teamName";
import works from "../../databases/worksData";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import asset1 from "../../img/asset1.png";
const Leftbar = () => {
  return (
    <section className="w-80 h-screen bg-white px-4 sticky top-0 right-shadow">
      <Brand />
      <ul className="grid grid-cols-1 gap-y-6">
        <li>
          <button className="flex items-center w-full justify-between pr-10">
            <HomeIcon className="w-6 text-myblue-1" />
            <strong className="text-mygray-1">Dashboard</strong>
          </button>
        </li>
        <li className="text-mygray-6">
          <button className="flex items-center w-full justify-between">
            <UserGroupIcon className="w-6" />
            <strong className="flex">Team's</strong>
            <ChevronDownIcon className="w-5" />
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
            <strong>Work's</strong>
            <ChevronDownIcon className="w-5" />
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
      <div className="rounded bg-myblue-2 w-44 h-44 -mb-10 absolute bottom-20 px-1 flex flex-col gap-2">
        <img src={asset1} alt="work" className="w-22 -m-10 mb-6 mx-auto" />
        <p className="text-center text-mygray-1 font-semibold">
          More Service's from Semanticsm
        </p>
        <button className="bg-myblue-1 text-sm font-semibold text-white p-1 rounded-md hover:bg-myblue-3 duration-500">
          Visit semanticsm.com
        </button>
      </div>
    </section>
  );
};

export default Leftbar;
