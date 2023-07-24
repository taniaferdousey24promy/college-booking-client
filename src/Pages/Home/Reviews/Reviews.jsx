import React from "react";
import useColleges from "../../../Hooks/useColleges";

const Reviews = () => {
  const [colleges] = useColleges();

  return (
    <div className="mt-28 ">
      <h1 className="lg:text-center sm:text-center text-2xl font-bold   mb-12">
        TESTIMONIALS
      </h1>
      <h1 className="lg:text-center sm:text-center text-5xl    mb-12">
        {" "}
        <span className="">Student </span>
        <span className="font-bold">reviews </span>
      </h1>

      {colleges.map((college) => (
        <div
          key={college._id}
          college={college}
          className="ms-32 flex gap-20  mb-20"
        >
          <div className="w-[200px] h-[200px] mt-4">
            <img
              className="rounded-full h-[200px] w-[200px] "
              src={college.details.review.student_profile}
              alt=""
            />
          </div>

          <div className="mt-4 w-[900px] h-[300px]">
            <h1 className="text-3xl" >{college.details.review.student_name}</h1>
            <h1 className="text-xl mt-8">"{college.details.review.feedback}"</h1>
            <button className="underline underline-offset-8 mt-4 ms-1 text-xl"> READ MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

