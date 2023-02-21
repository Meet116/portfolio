import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Skills And Technologies</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Web Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>React JS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Angular JS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Express JS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Wordpress</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Bash Scripting</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
             <div>
              <h4>Jira</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>AWS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
              <h4>Docker</h4>
              </div>
            </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience