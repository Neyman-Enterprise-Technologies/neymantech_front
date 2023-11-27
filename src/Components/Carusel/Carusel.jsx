import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carusel.scss";

import "swiper/css";
import "swiper/css/pagination";

import "./Carusel.scss";

// import required modules
import { Pagination } from "swiper/modules";

const Carusel = ({ feedback }) => {
  return (
    <div className="container">

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          
          },
        
        
         
         
         
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
     





  
        {feedback.map(({ avatar, fullname, id, position, feedback }) => (
          <SwiperSlide className="Slider1" key={id}>
            <div className="Slider1__feedbackContainer">
              <div className="Slider1__feedback">" {feedback} "</div>
              <div className="Slider1__avatarAndInfo">
                <div className="avatar-container">
                  <img src={avatar} alt="Slide 1" />
                </div>
                <div className="nameAndPosition">
                  <span className="name">{fullname}</span>
                  <span className="position">{position}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
 </Swiper>
    </div>
  );
};

export default Carusel;
