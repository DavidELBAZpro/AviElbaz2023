import React, { useState } from 'react'
import hamburgerImage from '../assets/images/hamburger.svg'

export const ToggleHamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="hamburger-container">
      <a className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerImage} alt="Hamburger" />
        <span className={`line ${isOpen ? 'active' : ''}`} />
        <span className={`line ${isOpen ? 'active' : ''}`} />
        <span className={`line ${isOpen ? 'active' : ''}`} />
      </a>

      {isOpen && (
        <div className="menu-hamburger">
          <ul>
            <li>Vidéos</li>
            <li>Musiques</li>
            <li>Contacts</li>
          </ul>
        </div>
      )}
    </div>
  )
}
