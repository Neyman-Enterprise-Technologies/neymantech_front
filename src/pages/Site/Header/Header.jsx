import React from 'react'
import './Header.scss'
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/Im";
// import { BiPhoneCall } from "react-icons/Bi";
import newlogo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='container'>
      {/* <div className="header__top">
        <div className="header__top__left">
          <ul>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
        <div className="header__top__right">
          <ul>
            <li>
              <ImLocation2 className="header__top__icons" /> 2750 Quadra Street
              Victoria Road, New York, Canada
            </li>
            <li>
              <BiPhoneCall className="header__top__icons" /> +123 456 23 4590
            </li>
          </ul>
        </div>
      </div> */}

      <div className='header__bottom'>
        <div className='header__bottom__left'>
          <Link to='' className='logo-img'>
            {' '}
            <img src={newlogo} alt='Responsive Image' />
          </Link>
        </div>
        <div className='header__res'>
          <div className='burger-menu'>
            <div className='burger-icon' onClick={handleMenuClick}>
              <CiMenuBurger />
            </div>
          </div>
          {isOpen && (
            <div className='menu-items-res'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/service'>Services</Link>
                </li>
                <li>
                  <Link to='/project'>Projects</Link>
                </li>
                <li>
                  <Link to='/price'>Price</Link>
                </li>
                <li>
                  <Link to='/blogs'>Blogs</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className='header__bottom__right'>
          <ul>
            <li>
              <Link to='/'>
                Home{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>

            <li>
              <Link to='/about'>
                About{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
            <li>
              <Link to='/service'>
                Services{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
            <li>
              <Link to='/project'>
                Projects{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
            <li>
              <Link to='/price'>
                Price{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
            <li>
              <Link to='/blogs'>
                Blogs{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                Contact{' '}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className='angle-down-icon'
                />
              </Link>
            </li>
          </ul>
          <div className='header__bottom__langSelect'>
            <select name='languages' id='languages'>
              <option value='english'>EN</option>
              <option value='azərbaycan'>AZ</option>
              <option value='türkçe'>TR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
