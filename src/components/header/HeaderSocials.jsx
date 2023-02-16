import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
  <div className="header__socials">
      < a href="www.linkedin.com/in/meet-luhar" target="_blank"><BsLinkedin /></a>
      < a href="https://github.com/Meet116" target="_blank"><FaGithub /></a>
  </div>
    )
}

export default HeaderSocials