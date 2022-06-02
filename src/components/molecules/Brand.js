import Logo from "../atoms/Logo";

const Brand = () => {
  return (
    <div className="flex items-center justify-center h-36">
      <a href="/#" className="flex gap-x-2">
        <Logo />
        <h1 className="font-brand text-mygray-1 text-4xl">SYST.LY</h1>
      </a>
    </div>
  );
};

export default Brand;
