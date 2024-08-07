import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'

const CenterFlex = () => {
    return (
        <div className='absolute flex justify-between items-end top-[31%] w-[93%]'>
            <CenterLeft />
            <CenterRight />
        </div>
    )
}

export default CenterFlex
