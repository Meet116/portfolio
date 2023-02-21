import React from 'react';
import './About.css';
import ME from '../../assests/me2.JPG'
import { FaAward } from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5 Year</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
            </article>
          </div>

          <p>
          My name is Meet Luhar, and I recently earned a postgraduate degree in web design and development. I earned my bachlor degree in computer science in India. Also, I have previous work expertise in DevOps and support roles. Always eager to learn about cutting-edge technologies and create useful apps.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About