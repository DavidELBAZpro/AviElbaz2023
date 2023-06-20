import React, { useState } from 'react'
import hamburgerImage from '../assets/images/hamburger.svg'
import crossImage from '../assets/images/cross.svg'

export const ToggleHamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="hamburger-container">
      <a className="hamburger" onClick={toggleMenu}>
        {!isOpen && <img src={hamburgerImage} alt="Hamburger" />}
        {isOpen && <img src={crossImage} alt="Cross" />}
        <span className={`line ${isOpen ? 'active' : ''}`} />
        <span className={`line ${isOpen ? 'active' : ''}`} />
        <span className={`line ${isOpen ? 'active' : ''}`} />
      </a>

      {isOpen && (
        <>
          <div className="menu-hamburger">
            <ul>
              <li>Vidéos</li>
              <li>Musiques</li>
              <li>Contacts</li>
            </ul>

            <ul id="menu-social-french" className="menu">
              <li
                id="menu-item-4097"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4097"
              >
                <a
                  title="Céline Dion Youtube"
                  href="https://www.youtube.com/channel/UC_yGU4qz9zAjEWLQxCg9NZQ"
                >
                  <span className="sr-only">YouTube</span>
                  <i className="fab fa-youtube-square" aria-hidden="true"></i>
                </a>
              </li>
              <li
                id="menu-item-4095"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4095"
              >
                <a
                  title="Céline Dion Facebook"
                  href="https://www.facebook.com/celinedion"
                >
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
              <li
                id="menu-item-4098"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4098"
              >
                <a
                  title="Céline Dion Instagram"
                  href="https://www.instagram.com/celinedion/"
                >
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li
                id="menu-item-10096"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10096"
              >
                <a href="https://www.tiktok.com/@celinedion?lang=en">
                  <span className="sr-only">Tiktok</span>
                  <i className="fab fa-tiktok" aria-hidden="true"></i>
                </a>
              </li>
              <li
                id="menu-item-4096"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4096"
              >
                <a
                  title="Céline Dion Twitter"
                  href="https://twitter.com/celinedion"
                >
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
