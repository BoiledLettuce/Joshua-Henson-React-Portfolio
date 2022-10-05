import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {TbAward} from 'react-icons/tb'
import {RiTeamFill} from 'react-icons/ri'
import {GiCubes} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>

    <h5>Get to Know</h5>
    <h2>About Me Bro</h2>

    <div className="container about__container"></div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
      <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <TbAward className='about__icon'/>
            <h5>Experience</h5>
            <small>300+ Years Working</small>
          </article>

          <article className="about__card">
            <RiTeamFill className='about__icon'/>
            <h5>Clients</h5>
            <small>300,000+ Worldwide</small>
          </article>

          <article className="about__card">
            <GiCubes className='about__icon'/>
            <h5>Projects</h5>
            <small>9000+ Completed Projects</small>
          </article>
        </div>
      </div>

    </section>
  )
}

export default About