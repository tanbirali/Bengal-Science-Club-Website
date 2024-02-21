import React from "react";

const Contact = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-28">
      <div
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
       flex flex-col w-screen m-3  lg:w-11/12 p-14 items-center rounded-md space-y-6"
      >
        <h1 className="text-white font-bold text-3xl">Get In Touch!</h1>
        <h2 className="text-white font-semibold text-xl">
          Subscribe us to get in touch and to enjoy more discounts, promos, and
          much more!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div>
            <input
              type="text"
              placeholder="Enter you email here"
              className="rounded-md p-2"
            />
          </div>
          <div className="m-auto">
            <button className="bg-white font-bold p-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
