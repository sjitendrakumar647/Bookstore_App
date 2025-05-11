import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Freebook from '../components/Freebook'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
    </div>
  )
}

export default Home
