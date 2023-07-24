import useColleges from "../../../Hooks/useColleges";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import "./styles.css";

// import required modules

const CollegeGallery = () => {
  const [colleges] = useColleges();

  return (
    <div className="">
      <h1 className="lg:text-center sm:text-center text-2xl font-bold  mb-12">
        Gallery of all college Graduates (Swipe to see)
      </h1>
      <div className=" sm:mx-8 carousel rounded-box ">
        {colleges.map((college) => (
          <div key={college._id} college={college} className="carousel-item">
            <img
              className="h-[300px] w-[300px]"
              src={college.details.graduate_group_pictures[0]}
              alt="Burger"
            />
            <img
              className="h-[300px] w-[300px]"
              src={college.details.graduate_group_pictures[1]}
              alt="Burger"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeGallery;
