"use client"; // This is important to enable client-side rendering

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
interface ChartData {
  name: string;
  count: number;
  fill: string;
}

const data = [
  {
    name: 'total',
    count: 100, 
    fill: 'white',
  },
  
  {
    name: 'Boys',
    count: 55,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* title */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold'>STUDENT</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* chart */}
      <div className=' relative w-full h-[75%]'>
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="count" />
  
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src ="/maleFemale.png"
        alt = ""
        width={50}
        height = {50}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>

      {/* bottom */}
      <div className='flex justify-center gap-16'>
  <div className='flex flex-col items-center gap-2'> {/* Increased gap here */}
    <div className='w-10 h-10 bg-lamaPurple rounded-full flex items-center justify-center'>
      <h1 className='font-bold text-sm'>1,000</h1>
    </div>
    <h2 className='text-xs text-gray-300'>Boys(55%)</h2>
  </div>

  <div className='flex flex-col items-center gap-2'> {/* Increased gap here */}
    <div className='w-10 h-10 bg-lamaYellow rounded-full flex items-center justify-center'>
      <h1 className='font-bold text-sm'>1,000</h1>
    </div>
    <h2 className='text-xs text-gray-300'>Girls(45%)</h2>
  </div>
</div>



    </div>
  );
};

export default CountChart;
