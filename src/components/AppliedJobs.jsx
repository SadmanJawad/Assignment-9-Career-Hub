import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJob, setAppliedJobs] = useState([]);
    const [filter, setFilter] = useState('all');


    useEffect(() => {
        const getAppliedJobs = async () => {
            const storedJobs = JSON.parse(localStorage.getItem('shopping-cart'));
            if (storedJobs) {
                const response = await fetch('fakeData.json');
                const jobsData = await response.json();
                const appliedJob = [];

                for (let i = 0; i < jobsData.length; i++) {
                    const job = jobsData[i];
                    if (storedJobs[job.id]) {
                        appliedJob.push(job);
                    }
                }

                setAppliedJobs(appliedJob);
                // console.log(appliedJob);
            }
        };
        getAppliedJobs();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredJobs = filter === 'all'
    ? appliedJob
    : appliedJob.filter(job => job.jobType === filter);

    return (
        <div>
             <div className='flex justify-between items-center '>
                <div>
                    <img src="https://i.ibb.co/fQbYK30/Vector.png" alt="" />
                </div>
                <h3 className='text-5xl font-bold text-center mb-20'>Applied Jobs </h3>
                <div className='-mt-72 '>
                    <img src="https://i.ibb.co/C7cGNzg/Vector-1.png" alt="" />
                </div>
            </div>
            <div className='w-10/12 mx-auto mt-36 bg-img'>

                {/* Filter dropdown */}
                <div className='flex justify-end w-5/6 mx-auto '>
                    <select name='Filter by..' className='bg-gray-100 rounded-sm p-1 border mb-6' onChange={handleFilterChange}>
                        <option value="all">Filter by</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>

                {
                    filteredJobs.map(data =>
                        <div className='md:flex justify-between md:w-10/12 mx-auto mb-6 border p-4 rounded-lg '>
                            <div className='flex gap-8'>
                                <div>
                                    <img className='bg-gray-200 p-6 rounded-lg mb-5 md:w-40 md:h-40 ' src={data.companyLogo} alt="" />

                                </div>
                                <div className='bg-purple-50 rounded-lg'>
                                    <h5 className='text-xl font-bold mb-4'>{data.jobTitle}</h5>
                                    <p className='mb-3 text-xl'>{data.companyName}</p>
                                    <button className='border rounded p-1 text-purple-600 mr-3'>{data.jobType}</button> <button className='border rounded p-1 text-purple-600 mr-3'>{data.jobTime}</button>
                                    <div className='flex gap-2 text-gray-600 mt-4'>
                                        <span>
                                            
                                            {data.location}
                                        </span>
                                        <span>
                                           
                                            Salary: {data.salary}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link to={`/${data.id}`} className='btn-default'>
                                    <button >View Details</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;