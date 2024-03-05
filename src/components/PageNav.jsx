import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className="flex flex-row justify-between w-full p-10">
      <Logo />
      <ul className="flex flex-row text-[#f8feff] gap-8 uppercase text-sm">
        <li>
          <NavLink
            to="/pricing"
            className="text-[#f8feff] visited:text-green-200"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className="text-[#f8feff] visited:text-green-200"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="bg-[#00c46a] px-3 py-2 rounded-md text-[#242a2e] text-xs font-semibold"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
