import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentMarksArr = [
        {
                id: 1,
                a_serial:1,
                a_name: "HTML",
                a_nmb: 50
        },
        {
                id: 2,
                a_serial:2,
                a_name: "CSS",
                a_nmb: 59
        },
        {
                id: 3,
                a_serial:3,
                a_name: "CSS Framework",
                a_nmb: 60
        },
        {
                id: 4,
                a_serial:4,
                a_name: "JS Basic",
                a_nmb: 45
        },
        {
                id: 5,
                a_serial:5,
                a_name: "DOM JS",
                a_nmb: 60
        },
        {
                id: 6,
                a_serial:6,
                a_name: "ES6 & API",
                a_nmb: 59
        },
        {
                id: 7,
                a_serial:7,
                a_name: "Debug",
                a_nmb: 60
        },
        {
            id: 8,
            a_serial:8,
            a_name: "React Basic",
            a_nmb: 60
    }
    ]

    return (
        <div className='mx-80 my-16' width="100%" height="100%"> 
        <AreaChart   width={800}
          height={400}
          data={assignmentMarksArr}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          >
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="a_name" />
          <YAxis dataKey=""/>
          <Tooltip />
          <Area type="monotone" dataKey="a_nmb" stroke="#8884d8" fill="#8884d8"   activeDot={{ r: 8 }}/>
        </AreaChart>
        </div>
    );
};

export default Statistics;