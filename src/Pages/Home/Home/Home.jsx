import React from "react";
import useColleges from "../../../Hooks/useColleges";
import { Link } from "react-router-dom";
import CollegeGallery from "../CollegeGallery/CollegeGallery";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [colleges] = useColleges();

  return (
    <div>
      {/* search box */}
      <input
        type="text"
        placeholder="Search your college"
        className="input input-bordered input-primary w-full max-w-full"
      />
      {/* card for colleges */}
      <div className="grid   lg:grid-cols-3 gap-8 mt-20 mx-7 ">
        {colleges.slice(0,3).map((college) => (
          <div
            key={college._id}
            college={college}
            className="  bg-[#82E0AA] card card-compact  bg-base-100 shadow-xl "
          >
            <figure>
              <img
                src={college.college_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.name}</h2>
              <p className="text-base"> <span className="font-bold"> Admission Date :</span> {college.admission_date}</p>
              <p className="text-base"><span className="font-bold">Event Facilities : </span>{college.events_facilities}</p>
              <p className="text-base"><span className="font-bold">Sports : </span> {college.sports_facilities}</p>
              <p className="text-base"><span className="font-bold">Total research publications : </span>{college.research_history}</p>
              <div className="card-actions justify-end">
                <Link to={`/${college._id}`}><button className=" btn btn-primary">See details</button></Link>

              </div>
            </div>
          </div>
        ))}

        
      </div>
      {/* college gallery */}
      <div className="mt-12">
      <CollegeGallery></CollegeGallery>
      <ResearchPapers></ResearchPapers>
      <Reviews></Reviews>

      </div>
    </div>
  );
};

export default Home;
