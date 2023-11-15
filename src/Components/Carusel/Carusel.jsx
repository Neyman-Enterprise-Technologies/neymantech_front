import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carusel.scss";

const Carusel = ({ feedback }) => {
  return (
    <div className="container">
      <div>
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {feedback.map(({ avatar, fullname, id, position, feedback }) => (
            <SwiperSlide className="Slider" key={id}>
              <div className="Slider__feedbackContainer">
                <div className="Slider__feedback">{feedback}</div>
                <div className="Slider__avatarAndInfo">
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

        {/* Sonraki üç slayt */}
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          initialSlide={3}
        ></Swiper>
      </div>
    </div>
  );
};

export default Carusel;
