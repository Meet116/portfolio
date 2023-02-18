import React from 'react';
import './About.css';
import ME from '../../assests/ME.png'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, commodi maiores alias vitae deserunt voluptate odit, vero eius iusto libero voluptatem dignissimos soluta? Pariatur quam similique et consequatur dicta repellendus?
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About