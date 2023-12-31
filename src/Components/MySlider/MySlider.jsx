import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./MySlider.scss";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import UseFetch from "../../UseFetch";
import { motion } from "framer-motion"



function MySlider() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: slider } = UseFetch(`${apiUrl}core_api/slider`);

  const sliderRef = useRef(null);
  return (
   
  
       <motion.div className="slider-container"
    whileHover={{ scale: 1 }}
  whileTap={{ scale: 1.07 }}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
   >
     
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
      >
        {slider &&
          slider.map(({slider_image,slider_header,content,id}) => (
            <SwiperSlide key={id}>
              <div className="slider1">
                <img
                  className="slider1__img"
                  src={slider_image}
                  alt="Slide 1"
                />

                  <div className="slider1__content">
                    <h1>{slider_header}</h1>
                    <p className="">
                      {content}
                    </p>
                    <Link to="/contact">
                      {" "}
                      {/* <button>Get Started</button> */}
                    </Link>
                  </div>
            
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    
    </motion.div>

    
  );
}

export default MySlider;
