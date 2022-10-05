import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {GiSpellBook} from 'react-icons/gi'
import {MdDesignServices} from 'react-icons/md'
import {RiMessage2Line} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <BiHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FiUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <GiSpellBook/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <MdDesignServices/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <RiMessage2Line/> </a>
    </nav>
  )
}

export default Nav