import Image from "next/image";

const userCard = ({type}: {type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] flex-1 p-4" >
        <div className="flex justify-between items-center ">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25

            </span>
            <Image src='/more.png' alt="" width={20} height={20} />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,345</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500"> {type}s</h2>
        </div>
  )
}

export default userCard;