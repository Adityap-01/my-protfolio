import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiGitCommit } from 'react-icons/fi'
import { TbCertificate } from 'react-icons/tb'


const About = () => {
  const mystyle = {
    margin: "3rem"
  };
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__para">
          <p>Currently, I am a B.Tech student at VIT Vellore pursuing Computer Science and Engineering with specialization in IoT. I am a full-stack web developer specializing in MERN Stack. I am also interested in software development with proficiency in JAVA.</p>
          <br />
          <p>I am an avid Football player and a FIFA fanatic. Music is my escape.</p>
          <br />
          <p>Feel free to reach out to me !</p>

            
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className='about__card'>
              <FiGitCommit className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>

            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Certifications</h5>
              <small>5</small>
            </article>
          </div>
          <div className="btn_wrap">
            <a href="#contact" className='btn btn-primary' style={mystyle}>Let's talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About