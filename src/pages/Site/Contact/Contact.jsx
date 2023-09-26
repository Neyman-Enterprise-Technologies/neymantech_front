import React from 'react'
import './Contact.scss'
import { useState,useEffect } from 'react';
import { MdOutlineMailOutline } from 'react-icons/Md';
import {SlLocationPin } from 'react-icons/Sl';
import {BiChevronRight} from 'react-icons/Bi'
import { FaAngleRight } from "react-icons/fa";
import {BsPhone} from 'react-icons/Bs'
import { Link } from 'react-router-dom';
import Loading from "../../../Components/Loading/Loading";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
     {
      loading ?(
        <Loading/>
      ):(
         <section>
         <div className='home__contact'>
         {/*   HEADER LINK START  */}
         <div className="projectHeaderLink">
            <div className="container">
              <div className="projectTitle">
                <h2>
                  Con<span>t</span>act
                </h2>
              </div>
            </div>
            <div className="projectLinks">
              <Link to="/home" className="projectLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="contact">Contact</Link>
            </div>
          </div>
          {/*  HEADER LINK END  */}
       
      </div>
          
        <div className='container'>
         
        
        </div>
         
         </section>
      )
     }
    
    </>
  )
}
