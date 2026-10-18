import React from 'react'
import Pip1 from './Pip1'
import Pip2 from './Pip2'

const MainPipline = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Pip1 />
            <Pip2 />
        </div>
    )
}

export default MainPipline