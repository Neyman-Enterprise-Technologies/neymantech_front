import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './MySlider.scss'
import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
function MySlider() {
  const sliderRef = useRef(null)
  return (
      
    <div className='slider-container'>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
      >

 
       <SwiperSlide>
          <div className='slider1'>
            <img
              className='slider1__img'
              src='https://img.freepik.com/premium-vector/white-simple-abstract-wallpaper_393744-50.jpg?w=2000'
              alt='Slide 1'
            />


              <div className='slider1__content'>
                <h1>
                  Secure IT solutions<br></br> for a more secure environment!{' '}
                </h1>
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  do site Phasellus nec feugiat nunc, non commodo diam. non
                  commodo diam elit sit. We work hand-in-hand with
                  industry-leading brands to help redefine the possibilities and
                  potential of digital engagements.
                </p>
                <Link to='/contact'>
                  {' '}
                  <button>Get Started</button>
                </Link>
              
     
            </div>
          </div>
          
        </SwiperSlide>
     
        
    
        <SwiperSlide>
          
          <div className='slider1'>
            <img
              className='slider1__img'
              src='https://wallpaperset.com/w/full/8/8/0/462749.jpg'
              alt='Slide 1'
            />
          <div className="container">
          <div className='slider1__content'>
              <h1>
                Secure IT solutions<br></br> for a more secure environment!{' '}
              </h1>
              <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                do site Phasellus nec feugiat nunc, non commodo diam. non
                commodo diam elit sit. We work hand-in-hand with
                industry-leading brands to help redefine the possibilities and
                potential of digital engagements.
              </p>
              <Link to='/contact'>
                {' '}
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          </div>
        </SwiperSlide>
      
    
        <SwiperSlide>
          <div className='slider1'>
            <img
              className='slider1__img'
              src='https://cdn.wallpapersafari.com/55/13/4KtLmN.jpg'
              alt='Slide 1'
            />
          <div className="container">
          <div className='slider1__content'>
              <h1>
                Secure IT solutions<br></br> for a more secure environment!{' '}
              </h1>
              <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                do site Phasellus nec feugiat nunc, non commodo diam. non
                commodo diam elit sit. We work hand-in-hand with
                industry-leading brands to help redefine the possibilities and
                potential of digital engagements.
              </p>
              <Link to='/contact'>
                {' '}
                <button>Get Started</button>
              </Link>
            </div>
          </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  
  )
}

export default MySlider
