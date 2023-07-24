import React, { useState } from "react";
import useColleges from "../../Hooks/useColleges";
import { Rating } from '@smastrom/react-rating'
import { FaGreaterThan } from "react-icons/fa";


import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges] = useColleges();
  const [rating, setRating] = useState(0) // Initial value

  return (
    <div>
        <div className="flex justify-between">
        <h1 className=" text-3xl font-bold ms-7 mb-8 mt-20">Top Colleges</h1>
<div className="flex">
<h1 className="  text-2xl font-bold ms-7 mb-8 mt-20">See All </h1>
        <FaGreaterThan className="mt-[90px] ms-1"/> <FaGreaterThan className="mt-[90px]  "/>
</div>

        </div>
      <div className="border-solid border-2 ms-7 border-green-700 ..."></div>
      <div className="ms-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-9  mb-20">
        {colleges.map((college) => (
          <div key={college._id} college={college} className="mt-12     ">
            <div className=" card bg-base-100 shadow-xl ">
              <figure>
                <img src={college.college_img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                    <div>
                    <h2 className="text-2xl font-bold">{college.name}</h2>

                    </div>
                    <div className="w-[150px] h-[50px] mt-1">
                    <Rating className="" readOnly value={college.details.college_rating} />

                    </div>

                </div>
                <p className="">{college.college_description}</p>
                <h2 className="font-semibold mt-5"> Research Publication Done : Total {college.research_history}</h2>
                <h2 className="font-semibold "> Admission Date Starts : From {college.admission_date}</h2>

                <div className="card-actions justify-end mt-5">
                <Link to={`/${college._id}`}><button className=" btn btn-primary">See details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
