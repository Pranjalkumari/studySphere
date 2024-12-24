"use client";
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface ChartData {
    title: string;
    time: string;
    description: string;
  }

const events =  [

    {
        id:1,
        title:"dance events ",
        time: " 12:00 pm- 02:00 pm ",
        description: "all student must be present as constent and audience",
    },
    {
        id:2,
        title:"dance events ",
        time: " 12:00 pm- 02:00 pm ",
        description: "all student must be present as constent and audience",
    },
    {
        id:3,
        title:"dance events ",
        time: " 12:00 pm- 02:00 pm ",
        description: "all student must be present as constent and audience",
    },

]

export const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar onChange={onChange} value={value} />
            
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold my-4'>EVENTS</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            
            <div className='flex flex-col gap-4'>
                {events.map(event => {
                    return (  // Make sure to return the JSX for each event
                        <div className='p-5  rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaYellow even: border-t-sky-200' key={event.id}>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                                <span className='text-gray-300 text-xs'>{event.time}</span>
                            </div>
                            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
