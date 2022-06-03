import { PlusCircleIcon } from "@heroicons/react/outline";

const TeamCard = ({ teamName, color, search }) => {
  return (
    <div
      className={`bg-${color} rounded  w-44 h-44 2xl:w-72 2xl:h-72 2xl:pt-4`}
    >
      <div className="bg-myblue-1 w-20 h-20 2xl:w-32 2xl:h-32 rounded-full mx-auto mt-4">
        {search && <PlusCircleIcon className="w-full 2xl:w-32 text-white" />}
      </div>
      <h4 className="text-white block text-center font-bold mt-4 2xl:text-3xl 2xl:mt-8">
        {teamName}
      </h4>
      <a
        href="/#"
        className="mt-2 ml-3 block text-sm text-white 2xl:mt-6 2xl:text-lg 2xl:ml-5"
      >
        View Profile
      </a>
    </div>
  );
};

export default TeamCard;
