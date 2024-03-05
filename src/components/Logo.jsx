import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex flex-row ">
      <Link to="/">
        <img src="../../public/images/logo.png" alt="logo" className="w-40" />
        {/* <p className="text-[#f8feff] font-bold">WorldWise</p> */}
      </Link>
    </div>
  );
};

export default Logo;
