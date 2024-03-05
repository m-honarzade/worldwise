import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Logo from "../Logo";
import AppNav from "./AppNav";

const Sidebar = () => {
  console.log(<Outlet />);
  return (
    <div className="border border-white ">
      <aside className="flex flex-col justify-between items-center text-center p-8  h-[94dvh] bg-[#2d3439]">
        <section className="w-full flex flex-col items-center">
          <Logo />
          <AppNav />
          <Outlet />
        </section>
        <Footer />
      </aside>
    </div>
  );
};

export default Sidebar;
