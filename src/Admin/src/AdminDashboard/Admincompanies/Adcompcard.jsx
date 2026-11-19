import React from 'react'

const Adcompcard = () => {
    const list = [
        { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
        { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
        { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
        { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



    ]
    return (
        <div className='w-full border border-gray-300 rounded-xl px-3 py-6 mt-3 bg-white'>
            <div className="bg-red-200 w-[70%] flex justify-between">
                <h6>Company</h6>
                <h6>Profile</h6>
                <h6>Jobs</h6>
                <h6>Status</h6>
            </div>
            <div>
                {list.map((el, indx) => {
                    return <div className="flex justify-between ">
                        <div className="bg-red-200 w-[70%] flex justify-between">
                            <h6>{el.Name}</h6>
                            <h6>{el.jobs}</h6>
                            <h6>{el.profile}</h6>
                            <h6>{el.status}</h6>
                        </div>
                        <div>
                            <button>Approve</button>
                            <button>Reject</button>

                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default Adcompcard