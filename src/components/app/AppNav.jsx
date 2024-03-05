import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <ul className="flex flex-row text-white  rounded-md  mt-8">
      <li className="bg-[#42484d] rounded-l-md ">
        <NavLink
          to="cities"
          className={`px-2 py-1 ${(isActive) =>
            isActive ? "bg-[#2d3439]" : ""} rounded-md `}
        >
          Cities
        </NavLink>
      </li>
      <li className="bg-[#42484d] rounded-r-md ">
        <NavLink
          to="countries"
          className={`px-2 py-1 ${(isActive) =>
            isActive ? "bg-[#2d3439]" : ""} rounded-md `}
        >
          Countries
        </NavLink>
      </li>
    </ul>
  );
};

export default AppNav;
