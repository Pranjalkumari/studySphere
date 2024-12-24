

const Announcements = () => {
  return (
    <div className=" bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className=" text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-cyan-50 rounded-md p-4">
                <div className="flex items-center justify-between">
                <div className="font-medium">Friday will be your test</div>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-12-19</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing
             elit. Magni tempora perspiciatis fuga, 
                 Nesciunt doloremque voluptas ducimus corporis quisquam.</p>

            </div>
           
            <div className="bg-lamaYellowlight rounded-md p-4">
                <div className="flex items-center justify-between">
                <div className="font-medium">Friday will be your test</div>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-12-19</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing
             elit. Magni tempora perspiciatis fuga, 
                 Nesciunt doloremque voluptas ducimus corporis quisquam.</p>

            </div>


            <div className="bg-indigo-50 rounded-md p-4">
                <div className="flex items-center justify-between">
                <div className="font-medium">Friday will be your test</div>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-12-19</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing
             elit. Magni tempora perspiciatis fuga, 
                 Nesciunt doloremque voluptas ducimus corporis quisquam.</p>

            </div>
        </div>
    </div>
  )
}

export default Announcements