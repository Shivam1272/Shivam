import React from 'react'
import Aboutme from './Aboutme/Aboutme'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Portfolio from './portfolio/Portfolio'
import Services from './services/Services'


function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Aboutme/>
      <Contact/>
    </div>
  )
}

export default Home
