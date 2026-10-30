import React from 'react'
import ProfileCard1 from './ProfileCard1'
import ProfileCard2 from './ProfileCard2'
import ProfileCard3Main from './ProfileCard3Main'
import Profilecard4 from './Profilecard4'

const AdminProfile = () => {
    return (
        <div className='flex flex-col px-8 py-20 gap-4 w-full'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-3xl text-[#1B2340]'>My Profile</h3>
                <p className='text-[#6B7391] text-[15px]'>Your administrator account's detail</p>
            </div>
            <ProfileCard1 />
            <ProfileCard2 />

            <ProfileCard3Main />
            <Profilecard4 />
        </div>
    )
}

export default AdminProfile