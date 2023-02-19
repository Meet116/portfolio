import React from 'react'
import './Portfolio.css'
import ME from '../../assests/ME.png'

const data = [
  {
  id:1,
  image: ME,
  title:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, consectetur.",
  github:"https://github.com",
  demo:"https://github.com",
  },
  {
    id:2,
    image: ME,
    title:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, consectetur.",
    github:"https://github.com",
    demo:"https://github.com",
    },
    {
      id:3,
      image: ME,
      title:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, consectetur.",
      github:"https://github.com",
      demo:"https://github.com",
      }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <arcticle key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} al={title} />
          </div>
          <div className="portfolio__item-image">
            <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo } className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>  
          </div>
        </arcticle>
            )
          })
        }


      </div>

    </section>
  )
}

export default Portfolio