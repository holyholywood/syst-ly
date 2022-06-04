import { LogoutIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import profpic from "../../img/profpic.png";
import users from "../../databases/userData";
import notifications from "../../databases/notificationsData";
import works from "../../databases/worksData";
const Rightbar = () => {
  return (
    <section className="w-96 2xl:w-[450px] h-screen bg-white  sticky top-0 right-0 pt-12 left-shadow overflow-y-auto">
      <button
        className="flex w-full justify-between hover:bg-mygray-4 px-3 py-1
      text-mygray-1 font-bold duration-500"
      >
        Logout
        <LogoutIcon className="w-6 text-mygray-2" />
      </button>
      <div className="px-3">
        <img src={profpic} alt="profpic" className="w-24 mx-auto mt-10" />
        <h1 className="text-center text-mygray-1 font-semibold mt-4  text-lg">
          {users[0].fullName}
        </h1>
        <h3 className="text-sm mt-4 mb-2">Team's Notification's</h3>
        <ul className="bg-myblue-2 h-32 overflow-y-scroll py-2 px-2 rounded-md">
          {notifications.map((notification, index) => {
            return (
              <li
                className="flex gap-x-1 w-full justify-between items-center my-2"
                key={index}
              >
                <div className="w-6 rounded-full mr-1  bg-mygreen  h-6 text-white flex justify-center">
                  A
                </div>
                <span className="text-xs block text-ellipsis w-32">{`${notification.name} was Completed ${notification.task} Task`}</span>
                <InformationCircleIcon className="w-5 text-mygray-1" />
              </li>
            );
          })}
        </ul>
        <h3 className="text-sm mt-4 mb-2">Reminder's</h3>

        {works.map((work, index) => {
          return (
            <div
              className="flex gap-x-2 my-2 items-center cursor-pointer hover:bg-mygray-5"
              key={index}
            >
              <button className="bg-mygreen w-5 flex justify-center items-center h-5 rounded">
                <BellIcon className="w-4 text-white" />
              </button>
              <div className="flex flex-col">
                <span className=" text-mygray-1 text-xs font-bold">
                  {work.name}
                </span>
                <span className="text-xs text-mygray-2">{work.deadline}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Rightbar;
