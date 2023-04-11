import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hardy from "../assets/hardy.png";
import JobCategory from "./JobCategory";
import Featured from "./Featured";

const Home = () => {
  const [jobLists, setJobLists] = useState([])
  useEffect(()=> {
    fetch('jobList.json')
    .then(res => res.json())
    .then(data=> setJobLists(data))
  },[])
  
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12">
        <div className="my-container grid grid-cols-1 text-right pb-24 lg:pb-56 text-gray-900">
          <h1 className="text-2xl font-bold w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
            One Step Closer To Your{" "}
            <span className="text-purple-600">Dream Job</span>
          </h1>
          <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex flex-wrap justify-center ml-auto">
            <Link to="/login">
              <button type="button" className="btn-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <img
          src={hardy}
          alt=""
          className="mb-12 mt-12 rounded-lg md:w-fit"
        />
      </div>
      {/* Category */}
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4">Job Category List</h1>
          <p className="text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid  md:grid-cols-4 px-5 ml-9 mt-4">
          {
            jobLists.map(jobList=> <JobCategory
            key={jobList.id}
            jobList={jobList}
            >  
            </JobCategory>)
          }
        </div>
      </div>
 {/* featured */} 
    <Featured></Featured>
    </section>
  );
};

export default Home;
