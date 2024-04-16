import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const data = [
    {
      image: "student1.png",
      name: "John Doe",
      comment: "The course is very good and I like what sir teaches.",
    },
    {
      image: "student2.png",
      name: "John Doe",
      comment: "The course is very good and I like what sir teaches.",
    },
    {
      image: "student3.png",
      name: "John Doe",
      comment: "The course is very good and I like what sir teaches.",
    },
    {
      image: "student4.png",
      name: "John Doe",
      comment: "The course is very good and I like what sir teaches.",
    },
    {
      image: "student5.png",
      name: "John Doe",
      comment: "The course is very good and I like what sir teaches.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="p-8 lg:p-20">
      <div
        className="flex flex-col m-auto items-center p-8 border
        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-800
        rounded-md "
      >
        <div className="flex gap-3 flex-col lg:flex-row">
          {data.map((student, index) => (
            <div key={index} className="">
              <div className="flex flex-col space-y-3 items-center border rounded-md p-3">
                <img src={student.image} alt="alt" />
                <div className="border w-full"></div>
                <div className="flex flex-col items-center text-center text-white">
                  <h1 className="font-bold">{student.name}</h1>
                  <div className="border w-full"></div>
                  <p>{student.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
