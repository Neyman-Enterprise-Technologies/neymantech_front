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
import { Link, useNavigate } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll' 
import * as Scroll from 'react-scroll' 

import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const scroller = Scroll.scroller
  // const scrollToServices = async () => {
  //   navigate('/home')
  //   const servicesElement = document.getElementById('services') // Remove the # symbol
  //   setTimeout(() => {
  //     servicesElement.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start', // You can adjust this as needed
  //     })
  //   }, 2000)
  // }
  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }
  const goToHomeAndScroll = async () => {
    await navigate('/')
    await scroller.scrollTo('anchor', {
      //r
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50,
    })
  }
  return (
    <>
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
      <div className='container'>
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
                  {/* <li>
                    <Link to='/home#services'>Services</Link>
                  </li> */}
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
                  
                </Link>
              </li>

              <li>
                <Link to='/about'>
                  About{' '}
                  
                </Link>
              </li>
              <li>
                {/* <Link to='/home#services'>
                  Services{' '}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className='angle-down-icon'
                  />
                </Link> */}
                <ScrollLink
                  onClick={goToHomeAndScroll}
                  to='services'
                  smooth={true}
                >
                  Services{' '}
                  {' '}
                  {/* r*/}
                </ScrollLink>
              </li>
              <li>
                <Link to='/project'>
                  Projects{' '}
                  
                </Link>
              </li>
              <li>
                <Link to='/price'>
                  Price{' '}
                  
                </Link>
              </li>
              <li>
                <Link to='/blogs'>
                  Blogs{' '}
                  
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contact{' '}
                  
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
    </>
  )
}
