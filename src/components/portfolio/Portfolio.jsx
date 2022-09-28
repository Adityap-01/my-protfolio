import React from 'react'
import './portfolio.css'
import MEMPIC from '../../assests/mempic.png'
import CRYPPIC from '../../assests/cryppic.png'
import COVPIC from '../../assests/covpic.PNG'
import CGPAPIC from '../../assests/cgpapic.PNG'
import TASKPIC from '../../assests/taskpic.png'
import LPIC from '../../assests/lpic.PNG'
import {FaGithub} from 'react-icons/fa'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={MEMPIC} className="propic" alt="Project Pic" />
          </div>
          <h3>MemoryGram</h3>
          <h5>A MERN Stack social media website , where people can store their memories and view others.</h5>
          <a href="https://github.com/Adityap-01/MemoryGram" className='btn' target='_blank'><FaGithub/> Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CRYPPIC} className="propic" alt="Project Pic" />
          </div>
          <h3>TheCryptoUpdate</h3>
          <h5>A react application gives updates about Cryptocurrencies. Uses Redux Toolkit for State Management
            and includes UI Creation using Ant Design, creating charts using Chart.js.</h5>
          <a href="https://github.com/Adityap-01/TheCryptoUpdate" className='btn' target='_blank'><FaGithub/> Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LPIC} className="propic" alt="Project Pic" />
          </div>
          <h4>Lane Prediction Optimization in VANET</h4>
          <h5>The detailed study on the various existing approaches to overcome the problems on the general VANET network and an approach which could help to improve the overall efficiency of the VANET.</h5>
          <a href="https://drive.google.com/file/d/1dwpUpAF3G9aLqTNW7v5ZahpHtWED7jkS/view?usp=sharing" className='btn' target='_blank'>Document</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={COVPIC} className="propic" alt="Project Pic" />
          </div>
          <h3>Covid_TrackingApp</h3>
          <h5>A ReactJs Project which fetches data From a API and presents it using reactjs and some modules
            like materialui and react-chartjs-2.</h5>
          <a href="https://github.com/Adityap-01/Covid_TrackingApp" className='btn' target='_blank'><FaGithub/> Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CGPAPIC} className="propic" alt="Project Pic" />
          </div>
          <h3> CGPA-Calculator</h3>
          <h5>A Simple CGPA Calculator using HTML , CSS and JS</h5>
          <a href="https://github.com/Adityap-01/CGPA-Calculator" className='btn' target='_blank'><FaGithub/> Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TASKPIC} className="propic" alt="Project Pic" />
          </div>
          <h3>TaskList-App</h3>
          <h5>This is my First react app which allows us to add and delete some tasks along with their description.</h5>
          <a href="https://github.com/Adityap-01/TaskList-App" className='btn' target='_blank'><FaGithub/> Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio