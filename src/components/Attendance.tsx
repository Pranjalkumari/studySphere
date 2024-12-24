"use client";

import Image from "next/image";
import { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the type for the data
interface Data {
  name: string;
  Present: number;
  Absent: number;
}

// Example data
const data: Data[] = [
  { name: 'Mon', Present: 70, Absent: 30 },
  { name: 'Tue', Present: 60, Absent: 40 },
  { name: 'Wed', Present: 40, Absent: 60 },
  { name: 'Thus', Present: 50, Absent: 50 },
  { name: 'Fri', Present: 80, Absent: 20 },
 
];

const Attendance: FC = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex items-center justify-between'>
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="More" height={20} width={20} />
      </div>


      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
          axisLine = {false}
          tick={{fill: "#d1d5db"}}
          tickLine= {false}
          />
          <YAxis  axisLine ={false} 
          tick={{fill: "#d1d5db"}}
          tickLine= {false}
          />
          <Tooltip 
          contentStyle = {{borderRadius: "10px", borderColor: "lightgray"}}
          />
          <Legend
          align ="left"
          verticalAlign ="top"
          wrapperStyle = {{paddingTop: "20px", paddingBottom: "40px"}}
          />
          <Bar dataKey="Present" fill="#8884d8" 
          legendType = "circle"
          radius = {[10,10,0,0]}/>

          <Bar dataKey="Absent" fill="#82ca9d"
           legendType = "circle"
           radius = {[10,10,0,0]}
           barSize={5}
          />
        </BarChart>
      </ResponsiveContainer>



    </div>
  );
};

export default Attendance;
