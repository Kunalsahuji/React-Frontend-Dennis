import React from 'react'

const Navbar = () => {
    return (
        <div className='py-9 text-white px-12 z-20 w-screen flex itmes-center justify-between fixed'>
            <h3 className='text-xl'>@Code by Dennis</h3>
            <div className="flex gap-12 items-center"></div>
            <h3 className='text-xl'>Work</h3>
            <h3 className='text-xl'>About</h3>
            <h3 className='text-xl'>Contact</h3>
        </div>
    )
}

export default Navbar
