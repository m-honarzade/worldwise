import Map from "../components/app/Map";
import Sidebar from "../components/app/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-4  ">
      <div className="w-[55%]">
        <Sidebar />
      </div>
      <div className="w-[45%]">
        <Map />
      </div>
    </div>
  );
};

export default AppLayout;
