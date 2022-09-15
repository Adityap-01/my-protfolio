import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import  LOGO from '../../assests/LOGO.png'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        
      
        {/* <img src={LOGO} className="logo" alt="logo" /> */}
      
        <a href="https://www.linkedin.com/in/aditya-pradhan-15964a1b2/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Adityap-01" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/adityapradhan_01/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials