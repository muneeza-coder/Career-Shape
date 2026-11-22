import React from 'react'
const Interview=(props)=>{
    return(
        <div  className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-nowrap  flex-col shrink-0'>
                          
                            <div className='w-full flex flex-col gap-3 '>
                               <div className='flex gap-2 items-center'>
                                  <h2 className='text-blue-800 font-bold h-10 w-10 shrink-0 text-sm bg-blue-200 p-2 rounded-full flex flex-nowrap items-center justify-center' >{props.shortName}</h2>
                                  <h2 className='font-bold text-[#1B2340] text-sm'>{props.Name}</h2>
                               </div>
                               <div className='w-full flex flex-col gap-3' >
                                    <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
                                        <h5>{props.Jobtype}</h5>
                                        <h5> .{props.Experience}yrs(exp)</h5>
                                    </div>
                                    <div className='flex flex-row '>
                                    <h5 className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>Missing skills:</h5>
                                     <div   className=' flex gap-1'>
                                    {props.MissingSkills.map((el,index)=>{
                                        return(
                                        
                                                <h4  key={index} className="bg-red-100 text-red-500  text-[13px] px-1 rounded ">{el}</h4>
                                           
                                        )
                                    })}
                                    </div>
                                    </div>
                                </div>
                                <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
                                    ${props.percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{props.Matchpercentage}% match</div>

                            </div>
                        </div>
    )
}
export default Interview