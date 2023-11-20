import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Carusel from "../../../Components/Carusel/Carusel";
import DijitalMarketingSecInHome from "../../../Components/Home/DijitalMarketingSecInHome/DijitalMarketingSecInHome";
import LatestNews from "../../../Components/Home/LatestNews/LatestNews";
import LatestWorkCardInHome from "../../../Components/Home/LatestWorkCardInHome/LatestWorkCardInHome";
import ServiceCards from "../../../Components/Home/ServiceCards/ServiceCards";
import WebDesignSecHome from "../../../Components/Home/WebDesignSecHome/WebDesignSecHome";
// import Loading from "../../../Components/Loading/Loading";
import MySlider from "../../../Components/MySlider/MySlider";
import UseFetch from "../../../UseFetch";
import "./Home.scss";
export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  //*CARUSEL
  const { data: feedback, error: feedbackError } = UseFetch(
    `${apiUrl}core_api/feedback/`
  );

  //*HOME - SERVICECARDS- SECTION-1
  // const { data: serviceCards, error } = UseFetch(`${apiUrl}serviceCards`);
  const { data: serviceCards, error } = UseFetch(
    `${apiUrl}service_api/services`
  );

  //*HOME - DIJITAL MARKETING- SECTION-2
  // const { data: digitalMarketingSecInHome } = UseFetch(`${apiUrl}digitalMarketingSecInHome`);
  const { data: digitalMarketingSecInHome } = UseFetch(
    `${apiUrl}service_api/services`
  );

  //*HOME - WEB DESIGN SECTION- SECTION-3
  // const { data: webDesignSecHome } = UseFetch(`${apiUrl}webDesignSecHome`);
  const { data: webDesignSecHome } = UseFetch(
    `${apiUrl}service_api/services_property/${id}`
  );

  //*HOME - OUR LATEST WORK -4
  // const { data: latestWorkCardInHome } = UseFetch(`${apiUrl}latestWorkCardInHome`);
  const { data: latestWorkCardInHome } = UseFetch(
    `${apiUrl}service_api/services/`
    
  );



  const { data: latestNews } = UseFetch(`${apiUrl}blog_api/blog`);
  const [loading, setLoading] = useState(false);

  const [showIcon, setShowIcon] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 900,
      delay: 0,
      smooth: "easeInOutQuint",
    });
    setShowIcon(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
      >
        {showIcon && (
          <div
            className="scroll-to-top"
            style={{
              opacity: showIcon ? 1 : 0,
              transition: "opacity 0.5s",
            }}
            onClick={handleScrollToTop}
          >
            <FaChevronUp className="scroll-icon" />
          </div>
        )}
        <MySlider />

        <div className="home__service" name="services">
          <div className="container">
            <div className="home__service__content">
              <h2 id="services" className="services" name="services">
                {" "}
                Our Services
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            {/* SERVICE CARDS START */}
            {serviceCards && <ServiceCards serviceCards={serviceCards} />}
            {error && <div>{error}</div>}
          </div>
        </div>

        <div className="container" id="cards">
          {digitalMarketingSecInHome && (
            <DijitalMarketingSecInHome
              digitalMarketingSecInHome={digitalMarketingSecInHome}
            />
          )}
        </div>

        <div className="container">
          {webDesignSecHome && (
            <WebDesignSecHome webDesignSecHome={webDesignSecHome} />
          )}
        </div>

        <div className="container">
          <div className="home__works">
            <div className="home__works__header">
              <h2>Our latest works</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            {LatestWorkCardInHome && (
              <LatestWorkCardInHome
                latestWorkCardInHome={latestWorkCardInHome}
                isProjectPage={false}
              />
            )}
          </div>
        </div>

        <div className="home__feedback">
          <div className="home__feedback__content">
            <p>TESTIMONIALS</p>
            <h2>Some lovely feedback from our clients</h2>
          </div>
          {feedback && <Carusel feedback={feedback} />}
        </div>

        <div className="home__blogs">
          <div className="container">
            <div className="home__blogs__content">
              <h2>Latest news</h2>
            </div>

            <div className="container">
              <div className="cards-wrapper">
                {latestNews && <LatestNews latestNews={latestNews} />}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* )} */}
    </>
  );
}

