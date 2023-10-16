import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carusel.scss";


const Carusel = ({ feedback }) => {
  return (
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
        {feedback.map(({avatar,fullname, position, id, feedback}) => {
          <SwiperSlide className="Slider" key={id}>
            <p>{console.log(feedback)}</p>
            <div className="Slider__div">
              <div>
                <img src={avatar} alt="Slide 1" />
              </div>
              <div>
                <h3>{fullname}</h3>
                <span>{position}</span>
              </div>
            </div>
          </SwiperSlide>;
        })}
        {/* <SwiperSlide className="Slider">
          <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
          <div className="Slider__div">
            <div><img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-2-1-1.jpg" alt="Slide 1" /></div>
            <div><h3>James Ander Taylor</h3><span>Web Developer</span></div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="Slider">
          <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
          <div className="Slider__div">
            <div><img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-1-1-1.jpg" alt="Slide 2" /></div>
            <div><h3>Sarah Taylor</h3><span>Designer</span></div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="Slider">
          <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
          <div className="Slider__div">
            <div><img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-3-1-1.jpg" alt="Slide 3" /></div>
            <div><h3>Tom Anderson Taylor</h3><span>CEO at Google</span></div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide className="Slider">
        <p>“We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.”</p>
        <div className="Slider__div">
          <div><img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-3-1-1.jpg" alt="Slide 3" /></div>
          <div><h3>Tom Anderson Taylor</h3><span>CEO at Google</span></div>
        </div>
      </SwiperSlide> */}
        {/* <SwiperSlide className="Slider">
          <p>
            “We believe brand interaction is key in communication. Real
            innovations and a positive customer experience are the heart of
            successful communication. No fake products and services.”
          </p>
          <div className="Slider__div">
            <div>
              <img
                src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-3-1-1.jpg"
                alt="Slide 3"
              />
            </div>
            <div>
              <h3>Tom Anderson Taylor</h3>
              <span>CEO at Google</span>
            </div>
          </div>
        </SwiperSlide>{" "} */}
        {/* <SwiperSlide className="Slider">
          <p>
            “We believe brand interaction is key in communication. Real
            innovations and a positive customer experience are the heart of
            successful communication. No fake products and services.”
          </p>
          <div className="Slider__div">
            <div>
              <img
                src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/client-image-3-1-1.jpg"
                alt="Slide 3"
              />
            </div>
            <div>
              <h3>Tom Anderson Taylor</h3>
              <span>CEO at Google</span>
            </div>
          </div>
        </SwiperSlide> */}
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
  );
};

export default Carusel;
