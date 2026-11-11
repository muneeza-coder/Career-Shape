import React from 'react'
const JobL=()=>{

    const jobs=[
        {   'job':'Frontend Developer'  ,  
            'skills':['react','css','typescript'],
            'req_emp':'2'
        },
          {   'job':'Backend Developer'  ,  
            'skills':['python','django','database'],
            'req_emp':'1'
        },
        {   'job':'Sales manager'  ,  
            'skills':['negotiation','crm','leadership'],
            'req_emp':'2'
        }
    ]
    return(
        <div  className='  w-full   flex flex-col  px-5 py-4 '>
            {jobs.map((elem,idx)=>{
                    return(
                        <div className="w-full  flex flex-col gap-4 py-2 ">
                            <div className=" flex flex-row justify-between ">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-semibold text-[#1B2340]">{elem.job}</h1>
                                <h3 className="text-sm text-[#6B7391]">{elem.req_emp} Candidates</h3>
                                <div className ="flex flex-row gap-1">
                                    {elem.skills.map((el)=>{
                                      return <h5 className="bg-blue-100 text-[#3D5AFE] text-[13px] px-1 rounded ">{el}</h5>
                                    })}
                                </div>   

                                
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className=' flex justify-center items-center rounded-xl bg-blue-100 text-[#3D5AFE] px-5 py-3 text-[15px]  font-semibold  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95'>Remove</button>
                            </div>

                            </div>
                            <div className={`${ ( idx <= idx-1 )? 'w-full h-[1px] bg-gray-200':'hidden'}`}></div>
                            
                        </div>
                    )
            })}
        </div>
    )
}
export default JobL