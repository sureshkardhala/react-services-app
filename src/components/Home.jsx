import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import OurClient from './OurClient'
import Our6dProcess from './Our6dProcess'
import Services from './Services'
import Experience from './Experience'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full pb-0'>
    <Navbar />
    <Cards />
    <OurClient />
    <Our6dProcess />
    <Services />
    <Experience />
    <Footer />
    </div>
  )
}

export default Home