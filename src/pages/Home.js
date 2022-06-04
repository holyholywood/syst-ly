import works from "../databases/worksData";
import team from "../databases/teamName";
import TeamCard from "../components/molecules/TeamCard";
import Topbar from "../components/molecules/Topbar";
import Footer from "../components/organisms/Footer";
const Home = () => {
  return (
    <section className="w-full pt-20  px-16">
      <Topbar Heading="Dashboard" />
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
        <TeamCard color="mygreen" teamName={team[0].name} />
        <TeamCard color="myred" teamName={team[1].name} />
        <TeamCard color="myblue-1" teamName="Search for Teams" search={true} />
      </div>
      <h1 className="font-semibold text-mygray-2 my-4">Your Assignment's</h1>
      {works.map((work, index) => {
        return (
          <button className="w-full h-16 rounded bg-myblue-3 duration-700 text-white flex items-center px-4 gap-x-8 my-4 justify-between hover:bg-opacity-70">
            <h1 className="text-2xl font-semibold">{work.name}</h1>
            <div className="flex gap-x-6">
              <span className="flex justify-between gap-x-10">
                {work.creator + " - " + work.assigner}
              </span>
              <span className="block place-self-end">{work.deadline}</span>
            </div>
          </button>
        );
      })}
      <Footer />
    </section>
  );
};

export default Home;
