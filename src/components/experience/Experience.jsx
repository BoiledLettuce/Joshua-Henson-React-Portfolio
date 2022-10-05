import React from 'react'
import './experience.css'
import {SiCheckio} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>

      <h5> Skills I Have tho </h5>    
      <h2>My Experience</h2>

      <div className="container experience__container">


{/* ================= FRONT END SHOWCASE ======================= */}
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiCheckio/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>React</h4>
              <small className='text-light'>Noob</small>
            </article>
          </div>
        </div>

        {/* ================= BACKEND SHOWCASE ======================= */}
        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiCheckio/>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>PHP</h4>
              <small className='text-light'>Noob</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>MySQL</h4>
              <small className='text-light'>Scrub</small>
            </article>
            <article className='experience__details'>
              <SiCheckio/>
              <h4>Python</h4>
              <small className='text-light'>Noob</small>
            </article>
          </div>
        </div>

      </div>
      </section>
  )
}

export default Experience