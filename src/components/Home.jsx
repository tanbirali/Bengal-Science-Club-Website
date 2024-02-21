import { Book, PlayCircleIcon, User2 } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-20 space-y-5">
          <h1 className="text-3xl font-bold">
            Explore the Wonders of Life: Where Biology Meets Brilliance!
          </h1>
          <p>
            Welcome to Bengal Science Club – your gateway to the fascinating
            world of biology! Embark on a journey where science meets wonder, as
            we unravel the mysteries of life from the microscopic to the
            macroscopic. Our educational YouTube channel is committed to
            delivering captivating content that simplifies complex biological
            concepts, making learning an enjoyable adventure. Join us in
            exploring the wonders of the biosphere, igniting your curiosity, and
            unlocking the secrets of life. Let the journey into the heart of
            biology begin!
          </p>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-md border-white font-bold">
            Enroll Now
          </button>
        </div>
        <div className="w-full p-2">
          <img
            src="/bsc-header-image.png"
            alt="Header Image"
            height={1080}
            width={1080}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-800">
        <marquee>
          <p className="text-white font-bold text-xl">
            {" "}
            Learn Online || Classes Available for classes 9,10,11,12 and for ANM
            and GNM
          </p>
        </marquee>
      </div>
      <div className="flex flex-col items-center justify-center p-10 space-y-5">
        <h1 className="text-3xl font-bold ">Search Online Courses</h1>
        <div className="flex space-x-5">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            placeholder="Search Your Course "
            type="text"
            className="rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none p-2"
          />
          <button
            className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-800
           p-2 text-white font-bold rounded-md"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <img
            src="skeleton.jpg"
            alt="Skeleton"
            className="w-48 h-48 lg:h-96 lg:w-96 rounded-full ring-4"
          />
          <div className="flex flex-col space-y-3 items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-red-400">Benefits</span> From Our Online
              Learning
            </h1>
            <div className="space-y-5 flex flex-col justify-center">
              <div className="flex space-x-4 items-center">
                <p className="p-5 bg-red-500 rounded-full text-white">
                  <Book />
                </p>
                <div>
                  <h1 className="text-xl font-bold">Short Courses</h1>
                  <p className="text-sm">
                    Enhace your knowlege with our concise and focussed short
                    courses, designed for quick and effective learning
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="p-5 bg-violet-500 rounded-full text-white">
                  <User2 />
                </p>
                <div>
                  <h1 className="text-xl font-bold">Expert Teachers</h1>
                  <p className="text-sm">
                    Immerse yourself in knowlege with industry experts guiding
                    you with theirs years of experience
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <p className="p-5 bg-pink-500 rounded-full text-white">
                  <PlayCircleIcon />
                </p>
                <div>
                  <h1 className="text-xl font-bold">100+ Video Lectures</h1>
                  <p className="text-sm">
                    Immerse yourself in knowlege with industry experts guiding
                    you with their years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
