import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-gradient-to-br from-violet-600 to-pink-600">
      <div className=" grid grid-cols-2 lg:grid-cols-4">
        <div className="w-44">
          <Link to={"/"}>
            <div className="text-white p-2 font-bold">Bengal Science Club</div>
          </Link>
          <p className="text-white p-2">
            Welcome to Bengal Science Club – your gateway to the fascinating
            world of biology!
          </p>
        </div>
        <div>
          <h1 className="text-white p-2 font-bold">Company</h1>
          <ul className="text-white px-2">
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/privacy-policies"}>Privacy Policies</Link>
            </li>
            <li>
              <Link to={"/testimonials"}>Testimonials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white p-2 font-bold">Link</h1>
          <ul className="text-white px-2">
            <li>
              <Link to={"/courses"}>Class 9</Link>
            </li>
            <li>
              <Link to={"/courses"}>Class 10</Link>
            </li>
            <li>
              <Link to={"/courses"}>Class 11</Link>
            </li>
            <li>
              <Link to={"/courses"}>Class 12</Link>
            </li>
            <li>
              <Link to={"/courses"}>ANM & GNM</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white p-2 font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="border text-white mx-5 shadow-lg"></div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <p className="text-white p-2 font-bold">
          Copyright © 2024 Bengal Science Club.
        </p>
        <p className="text-white p-2 font-bold">All Rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
