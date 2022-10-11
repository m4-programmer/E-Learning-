import Hero from '../components/Hero';
import Features from '../components/Features';
import Client from '../components/Client';
import Services from '../components/Services';
import About from '../components/About';
import Achievement from '../components/Achievement';
import AppInfo from '../components/AppInfo';
import Testimonials from '../components/Testimonials';
import NewsLetter from '../components/NewsLetter';
import PricingTable from '../components/PricingTable';
import CallAction from '../components/CallAction';



import React from 'react'

const Homepage = () => {
  return (
      <div>
        <Hero />
       <Features />
       <Client />
       <Services />
       <About />
       <Achievement />
       <AppInfo />
       
       <NewsLetter />
       
       <CallAction />
    </div>
  )
}

export default Homepage