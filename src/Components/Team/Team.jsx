import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.scss";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
// const [loading, setLoading] = useState(false);

const Team = ({ team }) => {
  // useEffect(() => {
  //   setLoading(true);
  //   window.scrollTo({ top: 0 });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className="container">

    <div className="teamHeaderContainer">
    <p>Komandamız</p>
    <h2>Komandamız ilə tanış olun</h2>
  </div>

  <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
      <div className="team-container">
        {team.map((member) => (
             <SwiperSlide key={member.id}>

           
          <div className="team-container__cardContainer" >
            <div className="team-container__profile-container">
              {member.github || member.facebook || member.instagram || member.linkedln || member.tweeter ? (
                <div className="team-container__socialContainer">
                  {member.github && (
                    <Link to={member.github}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="team-container__teamSocialIcon"
                      />
                    </Link>
                  )}
                  {member.facebook && (
                    <Link to={member.facebook}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faFacebook}
                      />
                    </Link>
                  )}
                  {member.instagram && (
                    <Link to={member.instagram}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faInstagram}
                      />
                    </Link>
                  )}
                  {member.linkedln && (
                    <Link to={member.linkedln}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faLinkedin}
                      />
                    </Link>
                  )}
                  {member.tweeter && (
                    <Link to={member.tweeter}>
                      <FontAwesomeIcon
                        className="team-container__teamSocialIcon"
                        icon={faTwitter}
                      />
                    </Link>
                  )}
                </div>
              ) : null}
              <img src={member.image} alt="" />
            </div>

            <div className="team-container__profile-details">
              <p className="team-container__name">{member.fullname}</p>
              <p className="team-container__job">{member.position}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </div>
 
     
   
      </Swiper>


    
      </div>
  );
};

export default Team;
