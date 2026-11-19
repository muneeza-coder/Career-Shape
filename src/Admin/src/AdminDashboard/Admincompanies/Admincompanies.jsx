import React from 'react'
import Adcompcard from './Adcompcard'

const Admincompanies = () => {
    return (
        <div className='flex flex-col px-8 py-20 gap-4 w-full mb-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-extrabold text-[26px] text-[#1B2340]'>Companies</h3>
                <p className='text-[#6B7391] text-[15px]'>Verification and company accounts</p>
            </div>
            <input type="text" placeholder="Search companies"></input>
            <Adcompcard />
        </div>
    )
}

export default Admincompanies