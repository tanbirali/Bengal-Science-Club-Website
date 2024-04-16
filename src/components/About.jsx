import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-10 lg:p-20">
        <h1>
          <span className="text-5xl font-bold">W</span>elcome to{" "}
          <span className=" font-bold">Bengal Science Club</span>, where science
          and discovery converge to make biology an exciting voyage! Founded
          with a passion for education and a deep appreciation for the wonders
          of life, <span className=" font-bold">Bengal Science Club</span> is
          dedicated to providing enriching and accessible content for learners
          of all levels. At{" "}
          <span className=" font-bold">Bengal Science Club</span>, we believe
          that everyone can connect with the marvels of biology. Whether you're
          a student, an enthusiast, or simply curious about the world around
          you, our goal is to make the intricate web of life understandable and
          captivating. Our team of experienced educators and passionate science
          communicators collaborates to bring you engaging videos that demystify
          complex biological concepts. From the intricacies of cellular life to
          the grandeur of ecosystems, we strive to create content that sparks
          curiosity, fosters understanding, and leaves you inspired. Join us on
          this educational journey as we explore the beauty, diversity, and
          interconnectedness of the living world. Let's delve into the realms of
          DNA, organisms, and ecosystems, celebrating the incredible tapestry of
          life that surrounds us.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold ">About the Instructor</h1>
        <div className="flex flex-col p-5 items-center">
          <div className="p-5">
            <img
              src="instructor_img.png"
              alt="Instructor"
              className="h-48 w-48 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Md Raju </h1>
            <h1 className="text-xl font-bold">M.Sc, B.Ed, M.Ed </h1>
            <h1 className="text-xl font-bold text-center">
              8 years of Teaching Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
