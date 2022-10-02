import React from 'react'
import VITPIC from '../../assests/VIT.png'
import DPSPIC from '../../assests/DPS.png'
import './education.css'

const Education = () => {
    return (
        <section id='education'>
            <h5>Schooling and Colleges</h5>
            <h2>Education</h2>

            <div className="container edu__container">

                <article className='edu__item'>
                    <div className="edu__item-image">
                        <img src={VITPIC} className="inspic" alt="Institution Pic" />
                    </div>
                    <h3>Vellore Institue of Tehnology</h3>
                    <h5>Vellore</h5>
                    <h5>B.Tech Computer Science and Engineering with specialization in Internet of Things</h5>
                    <h5>CGPA : 8.9</h5>
                    <h5>Duration : July 2019 - Aug 2023</h5>
                </article>

                <article className='edu__item'>
                    <div className="edu__item-image">
                        <img src={DPSPIC} className="inspic" alt="Institution Pic" />
                    </div>
                    <h3>Delhi Public School</h3>
                    <h5>Kolar Road, Bhopal</h5>
                    <h5>CBSE</h5>
                    <h5>PCM</h5>
                    <h5>Percentage : 89.8%</h5>
                    <h5>Duration : Feb 2018 - May 2019</h5>
                </article>

                <article className='edu__item'>
                    <div className="edu__item-image">
                        <img src={DPSPIC} className="inspic" alt="Institution Pic" />
                    </div>
                    <h3>Delhi Public School</h3>
                    <h5>Kolar Road, Bhopal</h5>
                    <h5>CBSE</h5>
                    <h5>CGPA : 10</h5>
                    <h5>Duration : Feb 2016 - May 2017</h5>
                </article>

            </div>
        </section>
    )
}

export default Education