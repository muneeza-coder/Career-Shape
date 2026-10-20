import React from 'react'
import Pip1 from './Pip1'
import Pip2 from './Pip2'
import Pip3 from './Pip3'
import Pip4 from './Pip4'
import Pip5 from './Pip5'


const MainPipline = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Pip1 />
            <Pip2 />
            <Pip3 />
            <Pip4 />
            <Pip5 />
        </div>
    )
}

export default MainPipline