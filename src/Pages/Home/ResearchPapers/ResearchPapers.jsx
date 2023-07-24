import React from "react";
import useColleges from "../../../Hooks/useColleges";
import { FaCalendar,FaDownload } from "react-icons/fa";


const ResearchPapers = () => {
  const [colleges] = useColleges();

  return (
    <div>
      <h1 className="mt-12 lg:text-center sm:text-center text-2xl font-bold  mb-8">
        Recent Research paper Works by students
      </h1>

      <div className="grid lg:grid-flow-col sm:grid-flow-row justify-self-start ms-12 gap-12 me-12 mb-12">
        {/* div for first column */}
        <div>
          <h1 className="mt-12 lg:text-start  text-xl font-bold mb-4 ">
            Research paper links
          </h1>
          {/* underline */}
          <div className="border-solid border-2 border-indigo-600 ..."></div>

          {colleges.map((college) => (
            <div
              key={college._id}
              college={college}
              className="mt-12 grid grid-flow-col    "
            >
              {/* for image */}
              <div className="text-">
                <img
                className=" w-[200px] h-[100px] "
                  src={college.details.research_works.research_image}
                  alt=""
                />
              </div>
              {/* for links */}
              <div className=" w-[500px] h-[100px]">
                <h1 className="font-bold text-start">  {college.details.research_works.research_title}</h1>
                <h1 className="font-semibold text-start">  Done By {college.details.research_works.research_authors}</h1>
                <h1 className=" text-start">  {college.details.research_works.research_description}</h1>
                <h1 className=" text-start"> <span className="font-semibold">Published in : </span>  {college.details.research_works.research_date}</h1>
              </div>
            </div>
          ))}
        </div>
        {/* div for second column */}
        <div>
          <h1 className="mt-12 lg:text-start  text-xl font-bold mb-4">
            Download Research Papers
          </h1>
          <div className=" border-solid border-2 border-indigo-600 ..."></div>

          {colleges.map((college) => (
            <div
              key={college._id}
              college={college}
              className="mt-8 grid grid-flow-row   "
            >
              {/* for image */}
              <div className="flex gap-1">
                <FaCalendar className="m-1 "></FaCalendar> By {college.name} on Friday 03/12/22 14:58
              </div>
              {/* for links */}
              <div className=" w-[500px] h-[100px]">
                <h1 className="font-bold ms-7">  {college.details.research_works.research_title}</h1>
                <h1 className="font-bold ms-7">  Research Paper Link : <a className="text-blue-700" href="https://shorturl.at/bdgi4">Click Here !</a> </h1>
                <button className="mt-4 ms-7 btn btn-sm btn-primary"><FaDownload></FaDownload> Download PDF</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;
