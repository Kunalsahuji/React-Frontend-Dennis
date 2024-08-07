import React from 'react'
// import "remixicon/fonts/remixicon.css";

const CenterLeft = () => {
    return (
        <div className='flex items-center gap-10 py-4 pl-12 pr-4 rounded-e-full bg-[#1C1D20] text-white'>
            <h2 className='font-medium text-lg leading-6'>
                Located <br />
                in the <br />
                Netherlands
            </h2>
            <div className="flex items-center justify-center bg-[#999D9E] h-[5vw] w-[5vw] rounded-full">
                <i className="ri-global-line text-4xl font-thin inline-block rotate-12"></i>
            </div>
        </div>
    )
}

export default CenterLeft
