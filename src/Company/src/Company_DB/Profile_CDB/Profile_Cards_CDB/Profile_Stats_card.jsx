import  React from 'react'
const Profile_Card=()=>{
     const data=[
        {"About":"Active Jobs",
            "Count":"5"
        },
        {"About":"Candidates",
            "Count":"8"
        },
        {'About':"In interview",
            "Count":"9"
        }
    ]
    return(
        <div className='w-full gap-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] '>
                 {data.map((elem,index)=>{
                 return(
                    <div key={index} className='w-full flex  flex-col justify-between  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95  border border-gray-200 hover:border  hover:border-[#3D5AFE]  bg-white rounded-xl w-1/3 p-2 sm:p-4'>
                        <h3 className='text-3xl font-bold text-[#1B2340]'>{elem.Count}</h3>
                        <h3 className='text-sm text-[#6B7391]'>{elem.About}</h3>
                    </div>
                 )
                })}
        </div>
    )
}
export default Profile_Card