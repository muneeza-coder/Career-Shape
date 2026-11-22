// import React, { useState } from 'react'
// const CandidatePipeline=()=>{


//     // const[shortName,setShortName]=useState('AB')
//     // const[Name,setName]=useState('AliBaba')
//     // const[jobtype,setJObtype]=useState('Sales manager')
//     // const[experience,setExperience]=useState('4')
//     // const[missingSkills,setMissingSkills]=useState('')

//     const candidateDetail=[
//         {'about':'Applied',
//          'detail':[
//             {'shortName':'AB'},
//             {'Name':"AliBaba"},
//             {'Jobtype':'Sales manager'},
//             {'Experience':'4'},
//             {'MissingSkills':['react','html']},
//             {'Macthpercentage':'25'}
//          ]
//         },
//         {'about':'Screening',
//             'detail':[
//             {'shortName':'AB'},
//             {'Name':"AliBaba"},
//             {'Jobtype':'Sales manager'},
//             {'Experience':'4'},
//             {'MissingSkills':['react','html']},
//             {'Macthpercentage':'25'}
//          ]
//         },
//         {'about':'Interview',
//             'detail':[
//             {'shortName':'AB'},
//             {'Name':"AliBaba"},
//             {'Jobtype':'Sales manager'},
//             {'Experience':'4'},
//             {'MissingSkills':['react','html']},
//             {'Macthpercentage':'25'}
//          ]
//         },
//         {'about':'Offered',
//             'detail':[
//             {'shortName':'AB'},
//             {'Name':"Bisma"},
//             {'Jobtype':'Sales manager'},
//             {'Experience':'4'},
//             {'MissingSkills':['react','html']},
//             {'Macthpercentage':'25'}
//          ]
//         },
//         {'about':'Hired',
//             'detail':[
//             {'shortName':'AA'},
//             {'Name':"Alya"},
//             {'Jobtype':'Sales manager'},
//             {'Experience':'4'},
//             {'MissingSkills':['react','html']},
//             {'Macthpercentage':'25'}
//          ]
//         },
//     ]

// const  appliedDetail=[
//     {}
// ]   
//     return(
//         <div className='w-full  flex gap-2 p-2 border border-gray-200 rounded-xl grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  '>
             
//               {candidateDetail.map((elem,index)=>{
//                 return(
//                     <div key={index} className='w-full p-2 border border-gray-200 rounded-xl'>
//                         <h1 className='w-full font-bold flex items-center justify-center'>{elem.about}</h1>
                        
                           
//                             {elem.detail.map((el,indx)=>{
//                                 return(
//                                     <div key={indx} className='flex  w-full'>
//                                         {/* <div className='w-full flex flex-row '>
            
//                                             <h2 className='text-blue-800 font-bold bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center'>{el.shortName}</h2>
//                                             <h2>{el.Name}</h2>
                                            
//                                         </div> */}
//                                         <div className='w-full flex flex-col' >
//                                             <div className='flex flex-row w-full'>
//                                                 <h5>{el.Jobtype}</h5>
//                                                 <h5>{el.Experience}</h5>
//                                             </div>
//                                             <h5>Missing:{el.MissingSkills}</h5>
//                                         </div>

//                                     </div>
//                                 )
//                             })}
                        
//                     </div>
//                 )
//               })}
//         </div>
//     )
// }
// export default CandidatePipeline
// import React, { useState } from 'react'
// const CandidatePipeline=()=>{


//     // const[shortName,setShortName]=useState('AB')
//     // const[Name,setName]=useState('AliBaba')
//     // const[jobtype,setJObtype]=useState('Sales manager')
//     // const[experience,setExperience]=useState('4')
//     // const[missingSkills,setMissingSkills]=useState('')

//     const candidateDetail=[
//         {'about':'Applied',
        
//             'shortName':'AB',
//             'Name':"AliBaba",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Macthpercentage':'25'
    
//         },
//         {
//             'about':'Screening',
//             'shortName':'AB',
//             'Name':"AliBaba",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Macthpercentage':'25'
//         },
//         {'about':'Interview',
            
//           'shortName':'AB',
//           'Name':"AliBaba",
//           'Jobtype':'Sales manager',
//           'Experience':'4',
//           'MissingSkills':['react','html'],
//           'Macthpercentage':'25'
         
//         },
//         {'about':'Offered',
//            'shortName':'AB',
//            'Name':"Bisma",
//            'Jobtype':'Sales manager',
//            'Experience':'4',
//            'MissingSkills':['react','html'],
//            'Macthpercentage':'25'
//         },
//         {'about':'Hired',
//             'shortName':'AA',
//             'Name':"Alya",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Macthpercentage':'25'
         
//         },
//     ]

// const  appliedDetail=[
//     {}
// ]   
//     return(
//         <div className='w-full  flex gap-2 p-2 border border-gray-200 rounded-xl grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  '>
             
//               {candidateDetail.map((elem,index)=>{
//                 return(
//                     <div key={index} className='w-full p-2 border border-gray-200 rounded-xl'>
//                         <h1 className='w-full font-bold flex items-center justify-center'>{elem.about}</h1>
//                         <div className='w-full flex flex-col gap-2 bg-red-300'>
//                             <div className='flex gap-2'>
//                                 <h2>{elem.shortName}</h2>
//                                 <h2>{elem.Name}</h2>
//                             </div>
//                             <div className='w-full flex flex-col' >
//                                             <div className='flex flex-row w-full'>
//                                                 <h5>{elem.Jobtype}</h5>
//                                                 <h5>{elem.Experience}</h5>
//                                             </div>
//                                             <h5>Missing:{elem.MissingSkills}</h5>
//                             </div>


//                         </div>
                           
//                     </div>
//                 )
//               })}
//         </div>
//     )
// }
// export default CandidatePipeline
// import React, { useState } from 'react'
// const CandidatePipeline=()=>{

//     const AppliedCandidate=[
            
//         {
//             'shortName':'AB',
//             'Name':"AliBaba",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'25'
    
//         },
//          {
//             'shortName':'AB',
//             'Name':"Ahmed Bilal",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'25'
    
//         }
//      ]
//     const  ScreenedCandidate=[
       
//         {
//             'shortName':'MZ',
//             'Name':"Muneeza Zia",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'25'
//         },
//        {
//             'shortName':'BN',
//             'Name':"Bisma Noor",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'25'
//        }
//     ] 

//     const InterviewedCandidate=[
        
//         { 
//           'shortName':'ZI',
//           'Name':"Zainab Ilyas",
//           'Jobtype':'Sales manager',
//           'Experience':'4',
//           'MissingSkills':['react','html'],
//           'Matchpercentage':'95'
//         },
//         {
//           'shortName':'TN',
//           'Name':"Tahniat",
//           'Jobtype':'Sales manager',
//           'Experience':'4',
//           'MissingSkills':['react','html'],
//           'Matchpercentage':'60'
//         }
//     ]
//     const OfferedCandidate=[
         
//             {
//                 'shortName':'AB',
//             'Name':"Bisma",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'25'
         
//         },
//     ]
//     const HiredCandidate=[
//       {
//             'shortName':'AA',
//             'Name':"Alya",
//             'Jobtype':'Sales manager',
//             'Experience':'4',
//             'MissingSkills':['react','html'],
//             'Matchpercentage':'85'
         
//         }
//     ] 
//     return(
//         <div className='w-full  flex gap-2 mb-30 rounded-xl grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] overflow-x-auto '>
//              <div className=' px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
//                 <div>
//                     <h1 className='w-full font-bold text-[#6B7391] flex items-start justify-baseline'>Applied</h1>
//                 </div>
                
//                 {AppliedCandidate.map((elem,index)=>{
//                      const percentage=elem.Matchpercentage 
//                     return(
                          
//                         <div key={index} className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-col'>
                          
//                             <div className='w-full flex flex-col gap-3 '>
//                                <div className='flex gap-2 items-center'>
//                                   <h2 className='text-blue-800 font-bold text-sm bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center' >{elem.shortName}</h2>
//                                   <h2 className='font-bold text-[#6B7391]'>{elem.Name}</h2>
//                                </div>
//                                <div className='w-full flex flex-col gap-3' >
//                                     <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
//                                         <h5>{elem.Jobtype}</h5>
//                                         <h5> .{elem.Experience}yrs</h5>
//                                     </div>
//                                     <div className='flex flex-row '>
//                                     <h5 className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>Missing skills:</h5>
//                                      <div   className=' flex gap-1'>
//                                     {elem.MissingSkills.map((el,index)=>{
//                                         return(
                                        
//                                                 <h4  key={index} className="bg-red-100 text-red-500  text-[13px] px-1 rounded ">{el}</h4>
                                           
//                                         )
//                                     })}
//                                     </div>
//                                     </div>
//                                 </div>
//                                 <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
//                                     ${percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{elem.Matchpercentage}% match</div>

//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>
             
//              <div className=' px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
//                     <div>
//                         <h1 className='w-full font-bold flex items-start justify-baseline text-[#6B7391]'>Screening</h1>
//                     </div>
//                 {ScreenedCandidate.map((elem,index)=>{
//                      const percentage=elem.Matchpercentage 
//                     return(
//                         <div key={index} className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-col gap-2'>
//                             <div className='w-full flex flex-col gap-3 '>
//                                <div className='flex gap-2 items-center'>
//                                   <h2 className='text-blue-800 font-bold text-sm bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center' >{elem.shortName}</h2>
//                                   <h2 className='font-bold text-[#6B7391]'>{elem.Name}</h2>
//                                </div>
//                                <div className='w-full flex flex-col  gap-3' >
//                                     <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
//                                         <h5>{elem.Jobtype}</h5>
//                                         <h5> .{elem.Experience}yrs</h5>
//                                     </div>
//                                     <div className='flex flex-row '>
//                                     <h5 className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>Missing skills:</h5>
//                                      <div   className=' flex gap-1'>
//                                     {elem.MissingSkills.map((el,index)=>{
//                                         return(
                                        
//                                                 <h4  key={index} className="bg-red-100 text-red-500  text-[13px] px-1 rounded ">{el}</h4>
                                           
//                                         )
//                                     })}
//                                     </div>
//                                     </div>
//                                 </div>
//                                  <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
//                                     ${percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{elem.Matchpercentage}% match</div>

//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>
          
//              <div className=' px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
//                 <div>
//                     <h1 className='w-full font-bold flex items-start justify-baseline text-[#6B7391]'>Interview</h1>
//                 </div>
//                 {InterviewedCandidate.map((elem,index)=>{
//                      const percentage=elem.Matchpercentage 
//                    return(
//                         <div key={index} className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-col gap-2'>
//                             <div className='w-full flex flex-col  gap-3 '>
//                                <div className='flex gap-2 items-center'>
//                                   <h2 className='text-blue-800 font-bold text-sm bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center' >{elem.shortName}</h2>
//                                   <h2 className='font-bold text-[#6B7391]'>{elem.Name}</h2>
//                                </div>
//                                <div className='w-full flex flex-col  gap-3' >
//                                     <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
//                                         <h5>{elem.Jobtype}</h5>
//                                         <h5> .{elem.Experience}yrs</h5>
//                                     </div>
//                                      <div className='flex flex-row '>
//                                     <h5 className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>Missing skills:</h5>
//                                      <div   className=' flex gap-1'>
//                                     {elem.MissingSkills.map((el,index)=>{
//                                         return(
                                        
//                                                 <h4  key={index} className="bg-red-100 text-red-500  text-[13px] px-1 rounded ">{el}</h4>
                                           
//                                         )
//                                     })}
//                                     </div>
//                                     </div>
//                                 </div>
//                             <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
//                                     ${percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{elem.Matchpercentage}% match</div>

//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>
//               <div className=' px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
//                 <div>
//                     <h1 className='w-full font-bold flex items-start justify-baseline text-[#6B7391]'>Offered</h1>
//                 </div>
//                 {OfferedCandidate.map((elem,index)=>{
//                      const percentage=elem.Matchpercentage 
//                     return(
//                         <div key={index} className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-col gap-2'>
//                             <div className='w-full flex flex-col gap-3 '>
//                                <div className='flex gap-2 items-center'>
//                                   <h2 className='text-blue-800 font-bold text-sm bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center' >{elem.shortName}</h2>
//                                   <h2 className='font-bold text-[#6B7391]'>{elem.Name}</h2>
//                                </div>
//                                <div className='w-full flex flex-col  gap-3' >
//                                     <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
//                                         <h5>{elem.Jobtype}</h5>
//                                         <h5> .{elem.Experience}yrs</h5>
//                                     </div>
//                                     <div className='flex flex-row '>
//                                     <h5 className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>Missing skills:</h5>
//                                      <div   className=' flex gap-1'>
//                                     {elem.MissingSkills.map((el,index)=>{
//                                         return(
                                        
//                                                 <h4  key={index} className="bg-red-100 text-red-500 text-[13px] px-1 rounded ">{el}</h4>
                                           
//                                         )
//                                     })}
//                                     </div>
//                                     </div>
//                                 </div>
//                                  <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
//                                     ${percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{elem.Matchpercentage}% match</div>

//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>
//               <div className=' px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
//                 <div>
//                     <h1 className='w-full font-bold flex items-start justify-baseline text-[#6B7391]'>Hired</h1>
//                 </div>
//                 {HiredCandidate.map((elem,index)=>{
//                      const percentage=elem.Matchpercentage 
//                     return(
//                         <div key={index} className='w-full p-2 bg-white border border-gray-200 rounded-xl flex flex-col gap-2'>
//                             <div className='w-full flex flex-col gap-3 '>
//                                <div className='flex gap-2 items-center'>
//                                   <h2 className='text-blue-800 font-bold text-sm bg-blue-200 p-2 rounded-full flex flex-wrap items-center justify-center' >{elem.shortName}</h2>
//                                   <h2 className='font-bold text-[#6B7391] text-sm'>{elem.Name}</h2>
//                                </div>
//                                <div className='w-full flex flex-col  gap-3' >
//                                     <div className='flex flex-row w-full gap-2  text-[13px] text-gray-500'>
//                                         <h5>{elem.Jobtype}</h5>
//                                         <h5> .{elem.Experience}yrs</h5>
//                                     </div>
//                                      <div className='flex flex-row '>
//                                     <h5 className='flex flex-row w-full gap-1  text-[13px] text-gray-500'>Missing skills:</h5>
//                                      <div   className=' flex gap-1'>
//                                     {elem.MissingSkills.map((el,index)=>{
//                                         return(
                                        
//                                                 <h4  key={index} className="bg-red-100 text-red-500 text-[13px] px-1 rounded ">{el}</h4>
                                           
//                                         )
//                                     })}
//                                     </div>
//                                     </div>
//                                 </div>
//                                  <div className={`font-bold text-sm  p-2 rounded-full flex flex-wrap items-center justify-center
//                                     ${percentage<=60?"bg-amber-100 text-amber-500":"bg-green-100 text-green-600"}`}>{elem.Matchpercentage}% match</div>

//                             </div>
//                         </div>
//                     )
//                 })}
//              </div>

            
//         </div>
//     )
// }
// export default CandidatePipeline
import React, { useState } from 'react'
import Applied from './Pipeline_cards/Applied_pipeline'
import Screening from './Pipeline_cards/Screening_pipeline'
import Interview from './Pipeline_cards/Interview_pipeline'
import Offer from './Pipeline_cards/Offered_pipeline'
import Hire from './Pipeline_cards/Hired_pipeline'
const CandidatePipeline=()=>{

    const AppliedCandidate=[
            
        {
            'shortName':'AB',
            'Name':"AliBaba",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'25'
    
        },
         {
            'shortName':'AB',
            'Name':"Ahmed Bilal",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'50'
    
        },
        {
            'shortName':'BN',
            'Name':"Bisma Noor",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'85'
       }
     ]
    const  ScreenedCandidate=[
       
        {
            'shortName':'MZ',
            'Name':"Muneeza Zia",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'65'
        },
       {
            'shortName':'BN',
            'Name':"Bisma Noor",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'60'
       }
    ] 

    const InterviewedCandidate=[
        
        { 
          'shortName':'ZI',
          'Name':"Zainab Ilyas",
          'Jobtype':'Sales manager',
          'Experience':'4',
          'MissingSkills':['react','html'],
          'Matchpercentage':'85'
        },
        {
          'shortName':'TN',
          'Name':"Tahniat",
          'Jobtype':'Sales manager',
          'Experience':'4',
          'MissingSkills':['react','html'],
          'Matchpercentage':'70'
        }
    ]
    const OfferedCandidate=[
         
            {
                'shortName':'AB',
            'Name':"Bisma",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'90'
         
        },
    ]
    const HiredCandidate=[
      {
            'shortName':'AA',
            'Name':"Alya",
            'Jobtype':'Sales manager',
            'Experience':'4',
            'MissingSkills':['react','html'],
            'Matchpercentage':'85'
         
        }
    ] 
    return(
        <div className="w-full overflow-x-auto overflow-y-hidden flex  gap-2 mb-40 md:mb-0">
            <div className='w-[200px] shrink-0 px-2 py-4 flex  flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
                <div>
                    <h1 className='w-full font-bold text-[#1B2340] text-sm flex  items-start justify-baseline'>Applied</h1>
                </div>
                {AppliedCandidate.map((elem,index)=>{
                     const percentage=elem.Matchpercentage 
                    return(
                          
                        <div key={index} className='w-full 
                    
                        '>
                          <Applied  shortName={elem.shortName}
                                     Name={elem.Name}
                                     Jobtype={elem.Jobtype}
                                     Experience={elem.Experience}
                                     MissingSkills={elem.MissingSkills}
                                     Matchpercentage={elem.Matchpercentage}
                                     percentage={percentage}
                          
                          />
                        </div>
                    )
                })}
            </div>
             
            <div className='  w-[200px] shrink-0 px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
                    <div>
                        <h1 className='w-full text-sm font-bold flex items-start justify-baseline text-[#1B2340]'>Screening</h1>
                    </div>
                {ScreenedCandidate.map((elem,index)=>{
                     const percentage=elem.Matchpercentage 
                    return(
                        <div key={index} className='w-full 
                    
                        '>
                          <Screening  shortName={elem.shortName}
                                     Name={elem.Name}
                                     Jobtype={elem.Jobtype}
                                     Experience={elem.Experience}
                                     MissingSkills={elem.MissingSkills}
                                     Matchpercentage={elem.Matchpercentage}
                                     percentage={percentage}
                          
                          />
                        </div>
                    )
                })}
            </div>
          
            <div className=' w-[200px] shrink-0 px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
                <div>
                    <h1 className='w-full  text-sm font-bold flex items-start justify-baseline text-[#1B2340]'>Interview</h1>
                </div>
                {InterviewedCandidate.map((elem,index)=>{
                     const percentage=elem.Matchpercentage 
                   return(
                        <div key={index} className='w-full 
                    
                        '>
                          <Interview shortName={elem.shortName}
                                     Name={elem.Name}
                                     Jobtype={elem.Jobtype}
                                     Experience={elem.Experience}
                                     MissingSkills={elem.MissingSkills}
                                     Matchpercentage={elem.Matchpercentage}
                                     percentage={percentage}
                          
                            />
                        </div>
                    )
                })}
            </div>

            <div className='w-[200px] shrink-0 px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
                <div>
                    <h1 className='w-full text-sm font-bold flex items-start justify-baseline text-[#1B2340]'>Offered</h1>
                </div>
                {OfferedCandidate.map((elem,index)=>{
                     const percentage=elem.Matchpercentage 
                    return(
                        <div key={index} className='w-full 
                    
                        '>
                          <Offer  shortName={elem.shortName}
                                     Name={elem.Name}
                                     Jobtype={elem.Jobtype}
                                     Experience={elem.Experience}
                                     MissingSkills={elem.MissingSkills}
                                     Matchpercentage={elem.Matchpercentage}
                                     percentage={percentage}
                          
                          />
                        </div>
                    )
                })}
            </div>

            <div className='w-[200px] shrink-0 px-2 py-4 flex flex-col gap-4 bg-[#ecedf1] border border-gray-200 rounded-xl'>
                <div>
                    <h1 className='w-full text-sm font-bold flex items-start justify-baseline text-[#1B2340]'>Hired</h1>
                </div>
                {HiredCandidate.map((elem,index)=>{
                     const percentage=elem.Matchpercentage 
                    return(
                        <div key={index} className='w-full 
                    
                        '>
                          <Hire  shortName={elem.shortName}
                                     Name={elem.Name}
                                     Jobtype={elem.Jobtype}
                                     Experience={elem.Experience}
                                     MissingSkills={elem.MissingSkills}
                                     Matchpercentage={elem.Matchpercentage}
                                     percentage={percentage}
                          
                          />
                        </div>
                    )
                })}
            </div>
        </div>

            
    
    )
}
export default CandidatePipeline