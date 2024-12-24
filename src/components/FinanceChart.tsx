"use client";
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', income: 5000, expense: 3000 },
    { name: 'Feb', income: 4200, expense: 2500 },
    { name: 'Mar', income: 6000, expense: 3200 },
    { name: 'Apr', income: 5500, expense: 2800 },
    { name: 'May', income: 7000, expense: 4000 },
    { name: 'Jun', income: 8000, expense: 4500 },
    { name: 'Jul', income: 7500, expense: 4200 },
    { name: 'Aug', income: 6800, expense: 3800 },
    { name: 'Sep', income: 6000, expense: 3500 },
    { name: 'Oct', income: 7200, expense: 4000 },
    { name: 'Nov', income: 7800, expense: 4300 },
    { name: 'Dec', income: 9000, expense: 4800 },
  ];
  
  
const FinanceChart = () => {
  return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
          {/* title */}
          <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>FINANCE</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
          </div>

          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"    axisLine = {false}
          tick={{fill: "#d1d5db"}}
          tickLine= {false}
          tickMargin= {20} />
          <YAxis   axisLine ={false} 
          tick={{fill: "#d1d5db"}}
          tickLine= {false}
          tickMargin= {20}/>
          <Tooltip />
          <Legend
          align ="center"
          verticalAlign ="top"
          wrapperStyle = {{paddingTop: "10px", paddingBottom: "30px"}}
          />
          
          <Line type="monotone" dataKey="expense" stroke="#82ca9d"
            // strokeWidth = {5}
            />
          <Line type="monotone" dataKey="income" stroke="#8884d8"  />
        </LineChart>
      </ResponsiveContainer>


          </div>
  )
}

export default FinanceChart