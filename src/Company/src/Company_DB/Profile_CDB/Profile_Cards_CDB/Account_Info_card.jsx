import  React from 'react'
const Account=(edit)=>{
    
    return(
        <div className='w-full'>
            <div className='w-full pb-3 '>
                        <h1 className='text-2xl font-semibold text-[#1B2340]'>Account</h1>
                     </div>
                     <div className='w-full flex flex-row justify-between gap-3'>
                         <div className='flex flex-col gap-2'>
                           <h1  className=' font-bold text-[rgb(27,35,64)]'>Account type</h1>
                           <h5  className='text-sm text-[#6B7391]'>Company/HR</h5>
                         </div>
                         
                         <div  className='flex flex-col justify-center items-center' >
                            <button className='text-[#3D5AFE] bg-blue-100  px-3 py-2 rounded-xl  text-sm font-semibold'>Company</button>
                         </div>
                     </div>
                   
                     <div className='w-full flex flex-col gap-3 border-t border-t-gray-200 p-2' >
                           <h1 className=' font-bold text-[#1B2340]'>Email</h1>
                           <h2 className='text-sm text-[#6B7391]'>myemail</h2>
                     </div>
                   
                     <div className='w-full flex flex-col border-t border-t-gray-200 gap-3 p-2'>
                           <h1 className=' font-bold text-[#1B2340]'>Last login</h1>
                           <h3 className='text-sm text-[#6B7391]'></h3>
                     </div>
        </div>
    )
}
export default Account