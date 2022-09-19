import React from 'react'
import './experience.css'
import PLOGO from '../../assests/PROTAL_LOGO3.svg'
import ALOGO from '../../assests/accelerize360.png'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Whats Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="plogocont">
            <img src={PLOGO} className="plogo" alt="companylogo" />
          </div>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>Title : Frontend ReactJs Developer</h4>
              <h4>Duration : August 2021 - November 2021</h4>
              <p>Protal is a Talent Building Social Media platform for the easy showcasing of talents.</p>
              <ul>
                <li>Developing and Integrating Several Reusable Components for the Official website.</li>
                <li>Made API calls to fetch and push relevant data. Also, performed error handling for these data.</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <div className="plogocont">
            <img src={ALOGO} className="plogo" alt="companylogo" />
          </div>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>Title : Software Developer</h4>
              <h4>Duration : October 2022 - Present</h4>
              <p>Accelerize 360 is a Salesforce Partner specialized in financial services including Wealth Management, Insurance, Real Estate, Lending and Banking.</p>
              <ul>
                <li>Develop custom applications on the Salesforce Platform, Site.com, Salesforce
                  Communities and Salesforce1 using Apex and Objects.</li>
                <li>Build custom interfaces using Lightning Components and the AURA
                  framework.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience