import UserCard from "@/components/UserCard"

import CountChart from "@/components/CountChart"
import Attendance from "@/components/Attendance"
import FinanceChart from "@/components/FinanceChart"
import { EventCalendar } from "@/components/EventCalendar"
import Announcements from "@/components/Announcements"



const Adminpage = () => {
  return (
    <div className=" p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard  type="student"/>
          <UserCard  type="teacher"/>
          <UserCard  type="parent"/>
          <UserCard  type="staff"/>
        </div>



{/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
 <div className="w-full lg:w-1/3 h-[450px]">
<CountChart/>
 </div>


{/* attendance chart */}

 <div className="w-full lg:w-2/3 h-[450px]">
 <Attendance/>
 </div>

        </div>
         {/* bottom chat */}
        <div className="w-full h-[500px]">
        <FinanceChart/>
      </div>
 
      </div>

     
     
     

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8" >
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default Adminpage