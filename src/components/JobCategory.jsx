import React from 'react';

const JobCategory = ({jobList}) => {
    // console.log(jobList)
    return (
        <div className='mx-4'>   
        <img className='mb-4 w-11  h-11 bg-gray-100 p-2 rounded-lg' src={jobList.imgLink} alt="" />
            <h1 className='text-lg font-bold'>{jobList.title}</h1>
            <p className='text-gray-500'>{jobList.jobQuantity}</p>
        </div>
    );
};

export default JobCategory;