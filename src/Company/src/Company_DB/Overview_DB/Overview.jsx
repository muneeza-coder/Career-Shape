import React from 'react'
const Overview=()=>{

     const data=[
        {"About":"Open Jobs",
            "Count":"5"
        },
        {"About":"Candidates",
            "Count":"8"
        },
        {'About':"In interview",
            "Count":"9"
        },
        {'About':"Hired",
            "Count":"4"
        }
    ]

    return(
        <div  className='h-full w-full p-10 flex flex-col gap-5 '>


            <div className='w-full flex flex-col '>
                <h1 className='text-3xl text-[#1B2340] font-bold'>Welcome back</h1>
                <p className=' text-[#6B7391]'>Here is where your hiring stands today.</p>
            </div>


            <div className=' w-full h-35 flex flex-row  gap-3 p-3 '>

                {data.map((elem)=>{
                 return(
                    <div className='flex  flex-col justify-between border border-gray-200 border-l-4  border-l-[#3D5AFE] bg-white rounded-xl w-1/3 p-4'>
                        <h3 className='text-3xl font-bold text-[#1B2340]'>{elem.Count}</h3>
                        <h3 className='text-sm text-[#6B7391]'>{elem.About}</h3>
                    </div>
                 )
                })}
                
            </div>
        </div>
    )
}
export default Overview