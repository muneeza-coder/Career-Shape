import React from 'react'
import Card3left from './Card3left'
import Card3right from './Card3right'

const ProfileCard3Main = () => {
    return (
        <div className='flex gap-3 flex-wrap lg:flex-nowrap'>
            <Card3left />
            <Card3right />
        </div>
    )
}

export default ProfileCard3Main