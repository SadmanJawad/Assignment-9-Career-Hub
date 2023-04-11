import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Featured = () => {
  const [cards, setCards] = useState(4);

  const featuredJobs = useLoaderData();
  console.log(featuredJobs)
  const { id } = featuredJobs;

  const handleSeeAllBtn = () => {
    setCards(featuredJobs.length); // Set the number of cards to the total number of jobs
  };

  return (
    <div className="w-10/12 mt-32 mx-auto">
      <div className="text-center">
        <h3 className="text-5xl font-bold mb-6">Featured Jobs </h3>
        <p className="text-sm mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:ml-36 gap-6">
        {featuredJobs.map((job) => (
          <div key={job.id}>
            <img className="mb-4 w-auto h-10" src={job.companyLogo} alt="" />
            <Link to={`/details/${job.id}`}>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                {job.jobTitle}
              </h5>
            </Link>
            <p className="mb-3 font-normal ">{job.companyName}</p>
            <button className="border rounded p-1 text-purple-600 mr-3">
              {job.jobType}
            </button>
            <button className="border rounded p-1 text-purple-600 mr-3">
              {job.jobTime}
            </button>
            <div className="flex gap-2 text-gray-600 mt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mb-1 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {job.location}
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mb-1 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Salary: {job.salary}
              </span>
            </div>
            <Link to={`/${job.id}`} className="btn-primary">
              <button className="mt-6">View Details</button>
            </Link>
          </div>
        ))}
      </div>
      {cards < featuredJobs.length && (
        <div className="text-center mt-16 text-white">
          <button className="btn-default" onClick={handleSeeAllBtn}>
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
