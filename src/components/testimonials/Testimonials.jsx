import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Kootra',
    review: 'Truly a big scrub.'
  },
  {
    avatar: AVTR2,
    name: 'James',
    review: 'Alright Hello.'
  },
  {
    avatar: AVTR3,
    name: 'Marshall',
    review: `You wouldn't shoot a guy with glasses would you?`
  },
  {
    avatar: AVTR4,
    name: 'Seamus',
    review: `Double by twice the amount.`
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testismonials</h2>

        <div className="container testimonials__container">
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <article key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Kootra" />
            </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
          </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default Testimonials