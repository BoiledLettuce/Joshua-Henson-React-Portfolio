import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="The Creature Vault" />
          </div>
          <h3>The Creature Vault</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/BoiledLettuce/Project-3" className='btn' target='_blank'>GitHub</a>
            <a href="https://boiledlettuce.github.io/Project-3/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="The Creature Vault" />
          </div>
          <h3>The Creature Vault</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://boiledlettuce.github.io/Project-3/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Porfolio