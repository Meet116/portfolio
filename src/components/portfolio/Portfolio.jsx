import React from 'react'
import './Portfolio.css'
import ME from '../../assests/ME.png'
import PortFolio from '../../assests/Portfolio.png'
import Vagary from '../../assests/vagary.png'
import Music from '../../assests/music.png'


const data = [
  {
  id:1,
  image: PortFolio,
  title:" Create my portfolio using React JS.",
  github:"https://github.com/Meet116/portfolio",
  demo:"https://meet116.github.io/portfolio/",
  target:"_blank",
  },
  {
    id:2,
    image: Vagary,
    title:" Create a travel guide website Vagary with MERN stack.",
    github:"https://github.com/Meet116/Vagery",
    demo:"https://amazing-blancmange-33051d.netlify.app/",
    target:"_blank",
    },
    {
      id:3,
      image: Music,
      title:"Create a music website store using MEAN stack.",
      github:"https://github.com/Meet116/MusicApp",
      demo:"javascript:void(0)",
      target:"",
      }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo,target}) => {
            return(
              <arcticle key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} al={title} />
          </div>
          <div className="portfolio__item-image">
            <h3>{title}</h3>

          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo } className='btn btn-primary' target={target}>Live Demo</a>
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