import Logo from "../atoms/Logo";

const Brand = ({ isClose }) => {
  return (
    <div className="flex items-center justify-center h-36 mt-8">
      <a href="/#" className="flex gap-x-2">
        <Logo />
        {!isClose && (
          <h1 className="font-brand text-mygray-1 text-4xl duration-100">
            SYST.LY
          </h1>
        )}
      </a>
    </div>
  );
};

export default Brand;
