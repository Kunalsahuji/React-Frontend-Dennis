import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const HeroText = () => {
    const scrollY = useScroll().scrollY
    const [scrollDirection, setScrollDirection] = useState(1)
    // useEffect(() => {
    scrollY.on('change', () => {
        const currentScrolling = scrollY.get() - scrollY.getPrevious()
        if (currentScrolling > 0) {
            setScrollDirection(1)
        } else {
            setScrollDirection(0)
        }
    })
    // }, [scrollY])
    return (
        <div className='absolute top-[58%]'>
            <motion.div
                initial={{
                    x: -1957,
                }}
                animate={{
                    x: scrollDirection > 0 ? -3914 : 0
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                className='flex'>
                <h1 className='text-white whitespace-nowrap font-medium text-[14.5vw]'>- Dennis Snellenberg</h1>
                <h1 className='text-white whitespace-nowrap font-medium text-[14.5vw]'>- Dennis Snellenberg</h1>
                <h1 className='text-white whitespace-nowrap font-medium text-[14.5vw]'>- Dennis Snellenberg</h1>
            </motion.div>
        </div>
    )
}

export default HeroText
