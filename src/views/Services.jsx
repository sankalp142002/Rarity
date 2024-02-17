import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../css/services.css'

function Services() {
  return (
    <div>
      <Nav/>

      <div className="servicesHero">
      <iframe src="https://lottie.host/embed/85a58750-a001-42d6-81a5-341a4cca005f/FAS6nJxdmR.json"></iframe>
      <div className='serviceHeading'>Services? We have got your Back!</div>
      <iframe src="https://lottie.host/embed/e8cf2d89-ea78-4d6f-800d-e5f3760fa42d/zXAoeyI1O4.json"></iframe>

      </div>
      <div className='service'></div>
      <div className='service2'></div>
      <div className='service'></div>
      <div className='service2'></div>
      <div className='service'></div>
      <Footer />
    </div>
  )
}

export default Services
