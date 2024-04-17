import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='home-sec-one '>
    <Header />
    <div className='cotainer-fluid sec-one-title text-center mt-2'>

      <div style={{lineHeight:'.2'}}>
      <h1>Design your <span style={{color:'#01DDE9'}}>Ideas</span></h1>
      <h1>Into <span style={{color:'#01DDE9'}}>Visuals</span></h1>
      </div>
      
      <div className='mt-2' style={{lineHeight:'.5'}}>
      <p>Krut AI give you the tools to create eye-catching visuals in seconds.Design images for ads,</p>
      <p>banners,websites,and more-all with click of a button </p>
      </div>
      
      
    </div>
    </div>
      
    </>
  )
}

export default Home