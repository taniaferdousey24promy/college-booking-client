import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useColleges from "../../../Hooks/useColleges";

const SeeDetails = () => {
  const colleges = useLoaderData();
  console.log(colleges);
  const { collegeId } = useParams();
  console.log(collegeId);

  let singleCollege = colleges.find(
    (singleCollege) => singleCollege._id === parseInt(collegeId)
  );
  console.log(singleCollege);
  return (
    <div>
      {/* <h1>this is college details</h1>
            <h1>{singleCollege.name}</h1> */}

      {/* this is singlecollege details */}
      <div className="mt-32 mb-32 card lg:card-side bg-base-100 shadow-xl ">
        <figure className=" ">
          {/* <img src={singleCollege.details.images[0]} alt="Album"/> */}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <img
                className="w-[400px] h-[400px]"
                src={singleCollege.details.images[0]}
                alt="Album"
              /> 
            </div>
            <div>
              <img
                className="w-[400px] h-[400px]"
                src={singleCollege.details.images[1]}
                alt="Album"
              /> 
            </div>
            <div>
              <img
                className="w-[300px] h-[300px]"
                src={singleCollege.details.images[2]}
                alt="Album"
              /> 
            </div>
            <div>
              <img
                className="w-[300px] h-[300px]"
                src={singleCollege.details.images[3]}
                alt="Album"
              /> 
            </div>
            {/* <div className="col-span-2 ..."><img src={singleCollege.details.images[0]} alt="Album"/> </div> */}
          </div>
        </figure>
        <div className="m-8">
          <h2 className="text-2xl card-title">{singleCollege.name}</h2>
          <p className="text-xl mt-3 text-green-700 font-semibold">
            The admission processes are following : 
          </p>
          <p className="mt-4">
             
            1. {singleCollege.details.admission_process[0]}
          </p>
          <p className="mt-4">
            2. {singleCollege.details.admission_process[1]}
          </p>
          <p className="mt-4">
            3. {singleCollege.details.admission_process[2]}
          </p>
          <p className="text-xl mt-3 mb-2 text-green-700 font-semibold">
            The upcoming events are : 
          </p>
          <span className="mt-4 font-semibold">
             
            1. {singleCollege.details.event_details[0].event_name} : 
          </span> 
          <span>
            {singleCollege.details.event_details[0].event_description}
          </span> 
          <span>[{singleCollege.details.event_details[0].event_date} ]</span>
          <p>
            <span className="mt-4 font-semibold">
               
              2. {singleCollege.details.event_details[1].event_name} : 
            </span> 
            <span>
              {singleCollege.details.event_details[1].event_description}
            </span> 
            <span>[{singleCollege.details.event_details[1].event_date} ]</span>
          </p>
          <p>
            <span className="mt-4 font-semibold">
               
              3. {singleCollege.details.event_details[2].event_name} : 
            </span> 
            <span>
              {singleCollege.details.event_details[2].event_description}
            </span> 
            <span>[{singleCollege.details.event_details[2].event_date} ]</span>
          </p>

          <p className="text-xl mt-3 text-green-700 font-semibold mb-2">
            Recent Research Works : 
          </p>
          <span className="mt-4 font-semibold">
             
            {singleCollege.details.research_works.research_title} :
          </span> <span>
            {singleCollege.details.research_works.research_description}
          </span> 
           <p>
            <span className=" font-semibold">Authors :</span> <span>
            {singleCollege.details.research_works.research_authors}
          </span>
            
            </p> 
          <p className="text-xl mt-3 text-green-700 font-semibold mb-2">
            Sports : 
          </p>
         
          
           <p>
            <span className=" font-semibold">Sport Category :</span> <span>
            {singleCollege.details.sports[0].sport_name} .{singleCollege.details.sports[0].sport_description}
          </span>
            
            </p> 
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
