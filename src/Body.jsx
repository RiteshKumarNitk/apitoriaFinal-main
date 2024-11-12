import React from 'react'
import HeroSection from './components/hero/HeroSection'
import Portfolio from './components/hero/Portfolio'
import OpportunitySection from './components/hero/OpportunitySection'
import Business from './components/hero/Business'
const Body = () => {
  return (
    <div>
       <HeroSection />
       <Portfolio />
       <OpportunitySection/>
       <Business/>
    </div>
  )
}

export default Body
