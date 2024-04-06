import User from "../components/User/User";
import Map from "../components/app/Map";
import Sidebar from "../components/app/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-4  ">
      <div className="w-[55%]">
        <Sidebar />
      </div>
      <div className="w-[45%] relative">
        <Map />
      </div>
      {/* <div className="absolute right-10 top-10">
        <User />
      </div> */}
    </div>
  );
};

export default AppLayout;
