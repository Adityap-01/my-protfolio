import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/Me.png'
import  LOGO from '../../assests/LOGO.png'
import HeaderSocials from './HeaderSocials'
import SOUNDBAR from './SoundBar'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h4>Hello I'm</h4>

      <div className="logo_cont">
        <img src={LOGO} className="logo" alt="logo" /> 
      </div>
      
      <div className="sound_cont">
        <SOUNDBAR/>
      </div>

      <h1>Aditya Pradhan</h1>
      <h5 className='text-light'>Web Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="Me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header