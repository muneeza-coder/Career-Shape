import React from 'react'

const Overview=(props)=>{

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
  const AImatcher=[
    {'Name':'Hajra','nickName':'HJ','Education':'Software engineer','MatchingPer':'20'},
    {'Name':'Hania','nickName':'HN','Education':'Graphic designer','MatchingPer':'60'},
    {'Name':'Amna','nickName':'AM','Education':'Sale manager','MatchingPer':'40'},
    {'Name':'Zain','nickName':'ZN','Education':'Frontend developer','MatchingPer':'80'}
  ]
    
    // const hiringpipline=[
    //     {"name":'Applied' ,
    //       "count":"2"
    //     },
    //     {"name":'Screening' ,
    //       "count":"2"
    //     },
    //     {"name":'Interview' ,
    //       "count":"2"
    //     },
    //     {"name":'Offer',
    //       "count":"2"
    //     },
    //     {"name":'Hired' ,
    //       "count":"2"
    //     }
    // ]

    return(
        <div  className=' w-full px-10 pt-14 pb-25 flex flex-col gap-5  '>


            <div className='w-full flex flex-col '>
                <h1 className='text-3xl text-[#1B2340] font-bold'>Welcome back</h1>
                <p className=' text-[#6B7391]'>Here is where your hiring stands today.</p>
            </div>


            <div className='  w-full gap-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  '>

                {data.map((elem)=>{
                 return(
                    <div className='w-full flex flex-nowrap shrink-0  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95  flex-col justify-between border border-gray-200 border-l-4  border-l-[#3D5AFE] bg-white rounded-xl   p-4'>
                        <h3 className='w-full text-3xl font-bold text-[#1B2340]'>{elem.Count}</h3>
                        <h3 className='w-full text-sm text-[#6B7391]'>{elem.About}</h3>
                    </div>
                 )
                })}
                
            </div>

            <div className='w-full flex flex-col lg:flex-row  gap-3'>
                <div className=' w-full lg:w-1/2 bg-white rounded-xl border border-gray-200 flex flex-col  p-5'>
                           <h1 className='text-xl font-bold text-[#1B2340]' >Hiring pipeline</h1> 
                           <div>
                              <div>
                                  <div></div>
                                  <h1>Applied</h1>
                                  <h2>2</h2>
                              </div>
                           </div>

                           <div>

                           </div>

                           <div>

                           </div>
                </div>
                <div className=' w-full lg:w-1/2  bg-white rounded-xl border  border-gray-200 flex flex-col  p-5'>
                          <h1 className='text-xl font-bold text-[#1B2340] p-2' >Top AI matches</h1> 
                          {AImatcher.map((elem)=>{
                            return(
                                <div className='w-full border-t border-t-gray-200 flex flex-row justify-between p-2'>
                                    <div className='flex flex-row  justify-center items-center'> 
                                    <h1 className=" text-[#222f77] font-bold bg-[#c9ddf7] rounded-full h-12 w-12 flex flex-nowrap shrink-0 items-center justify-center ">{elem.nickName}</h1>
                                        <div className='flex flex-col p-2 '>
                                            <h2 className=' font-semibold text-[#1B2340]'>{elem.Name}</h2>
                                            <h3 className='text-sm text-[#6B7391]'>{elem.Education}</h3>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h3 className=' flex justify-center items-center rounded-full bg-amber-100 text-amber-500 p-1 text-sm font-bold '>{elem.MatchingPer}%</h3>
                                    </div>

                                 </div>   
                            )
                          })}
                           
                </div>
            </div>


            <div className='w-full bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-5 '>
                 <h1 className=' font-semibold text-[#1B2340]'>Suggested shortlist</h1>
                 <h1  className='text-sm text-[#6B7391]'>Find applicants who meet your 60% criteria.</h1>
                 <button className='p-2 w-[70px]  text-[#222f77] font-bold bg-[#c9ddf7] rounded-xl flex items-start justify-baseline '>Run AI</button>
            </div>
        </div>
    )
}
export default Overview