import React from 'react'

const ModerateCard = () => {
    return (
        <div className='w-full border border-gray-300 rounded-xl px-3 py-6'>
            <h3>Flagged Job Posting</h3>
            <div className='flex justify-between border-b border-gray-300
            '>
                <div className='flex flex-col gap-2'>
                    <h3>Data Entry: earn$500/day</h3>
                    <p>QUickHire Co</p>
                    <p>Why flagged:Unrealistic payc, upfront free requested, vague duties</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <p className>92%risk</p>
                    <button>Mark safe</button>
                    <button>Review</button>
                    <button>Remove</button>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default ModerateCard