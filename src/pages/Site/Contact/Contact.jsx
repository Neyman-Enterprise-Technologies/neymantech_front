import React from 'react'
import './Contact.scss'
import { useState,useEffect } from 'react';
import { MdOutlineMailOutline } from 'react-icons/Md';
import {SlLocationPin } from 'react-icons/Sl';
import {BsPhone} from 'react-icons/Bs'
import {BiChevronRight} from 'react-icons/Bi'
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
         <div className='home__contact__content'>
           <h2>Contact</h2>
           <div className='lines'></div>
            <ul><li><Link className='home' to='/'>Home</Link></li><BiChevronRight className='iconss'/><li><Link className='contact' to='/contact'>Contact</Link></li></ul>
         </div>
         <div className='home__contact__cards'>
          <div className='home__contact__cards__card'>
             <div className='home__contact__cards__card__icon'>
              <MdOutlineMailOutline className='icon1'/>
             </div>
             <h3>Email Here</h3>
             <p>loremipsum@gmail.com</p>
             <p>hesen@gmail.com</p>
          </div>
          <div className='home__contact__cards__card'>
          <div className='home__contact__cards__card__icon'>
           <SlLocationPin className='icon1'/>
          </div>
          <h3>Location Here</h3>
          <p>&nbsp;2750 Quadra Street Victoria Road, New York, Canada  &nbsp;  </p>
     
          </div>
       <div className='home__contact__cards__card'>
       <div className='home__contact__cards__card__icon'>
        <BsPhone className='icon1'/>
       </div>
       <h3>Phone Here</h3>
       <p>+123 67 5634 8989</p>
       <p>+2345 67 8912</p>
       </div>
       </div>
      </div>
          
        <div className='container'>
          <div className='contact'>
              <div className='contact__content'>
                <span>Contact us</span>
                <h2>Do you have any questions?</h2>
                <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p>
              </div>
              <div className='contact__bottom'>
               <div className='contact__bottom__left'>
                 <img src='https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/faq-contact-1-1.png'></img>
               </div>
               <div class='contact__bottom__right'>
               <div class='content__bottom__right__top'>
                 <div class='column'>
                   <p><input type='text' placeholder='Name'/></p>
                   <input type='email' placeholder='Email'/>
                 </div>
                 <div class='column'>
                   <input type='tel' placeholder='Phone'/>
                   <input type='text' placeholder='Subject'/>
                 </div>
               </div>
               <div>
                 <textarea className='area' placeholder='Your Message'></textarea>
               </div>
               <div>
                 <button type='submit'>Send Message</button>
               </div>
             </div>
             
            </div>             
          </div>
        
        </div>
         
         </section>
      )
     }
    
    </>
  )
}
