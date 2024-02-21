import { AlignCenter, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <nav className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-800 p-5 flex flex-col ">
        <div className="lg:flex lg:w-full lg:justify-between lg:items-center hidden">
          <Link to={"/"}>
            <div className="text-white p-2 border rounded-md font-bold hover:bg-white hover:text-black">
              Bengal Science Club
            </div>
          </Link>
          <Menu
            size={35}
            className="text-white lg:hidden"
            onClick={() => setEnabled(!enabled)}
          />

          <ul className="text-white hidden lg:flex lg:flex-row lg:space-x-6 lg:px-6">
            <li>
              <NavLink to={"/courses"}>Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile View   Navbar */}
        <div className="flex justify-between items-center lg:hidden">
          <Link to={"/"}>
            <div className="text-white p-2 border rounded-md font-bold hover:bg-white hover:text-black">
              Bengal Science Club
            </div>
          </Link>
          <Menu
            size={35}
            className="text-white lg:hidden"
            onClick={() => setEnabled(!enabled)}
          />
        </div>
        {/* mobile menu  */}
        {enabled && (
          <div className="flex flex-col mt-3">
            <ul className="text-white  flex flex-col">
              <li
                className="w-full p-2 flex text-center justify-center "
                onClick={() => setEnabled(!enabled)}
              >
                <NavLink to={"/courses"}>Courses</NavLink>
              </li>
              <li
                className="w-full  p-2 flex text-center justify-center "
                onClick={() => setEnabled(!enabled)}
              >
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li
                className="w-full  p-2 flex text-center justify-center "
                onClick={() => setEnabled(!enabled)}
              >
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
