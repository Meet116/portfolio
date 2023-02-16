import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/ME.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Meet</h1>
        <h5 className= "text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>

      <div className="me"></div>
        <img src={ME}className="me" />
      </div>
      < a href="#contact" className='scroll_down'>Scroll Down</a>
    </header>
  )
}

export default Header