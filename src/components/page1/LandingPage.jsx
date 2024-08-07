import React from 'react'
import CenterFlex from './centerflex/CenterFlex'
import HeroImage from './herosection/HeroImage'
import HeroText from './herosection/HeroText'

const LandingPage = () => {
    return (
        <div className='min-h-screen bg-emerald-300'>
            <CenterFlex />
            <HeroImage />
            <HeroText />
        </div>
    )
}

export default LandingPage
