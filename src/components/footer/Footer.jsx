import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Aditya</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/aditya.pradhan.754/"><BsFacebook/></a>
        <a href="https://www.instagram.com/adityapradhan_01/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/aditya-pradhan-15964a1b2/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aditya Pradhan. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer