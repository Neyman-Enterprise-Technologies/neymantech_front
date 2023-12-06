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
import LastThreeProjectCards from "../../../Components/LastThreeProjectCards/LastThreeProjectCards";
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

  const { data: lastThreeProjectCards } = UseFetch(
    `${apiUrl}service_api/last_works/`
  );

  const last3Projects =
    lastThreeProjectCards && lastThreeProjectCards.slice(-3);

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
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuint",
    });
   
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
              transition: "all 0.5s",
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
                Xidmətlər
              </h2>
              <p>
                Neyman Enterprise Technologies şirkəti olaraq sizə
                xidmətlərimizi təklif etməkdən məmnunuq.
              </p>
            </div>
            {/* SERVICE CARDS START */}
            {serviceCards && <ServiceCards serviceCards={serviceCards} />}
            {error && <div>{error}</div>}
          </div>
          {/* SERVICE CARDS START */}
        </div>

        <div id="cards">
          {digitalMarketingSecInHome && (
            <DijitalMarketingSecInHome
              digitalMarketingSecInHome={digitalMarketingSecInHome}
            />
          )}
        </div>

        {webDesignSecHome && (
          <WebDesignSecHome webDesignSecHome={webDesignSecHome} />
        )}

        <div className="home__works">
          <div className="home__works__header">
            <h2>Son işlərimiz</h2>
            {/* <p>
                Müxtəlif şirkətlər üçün yaratdığımız son işləri sizlərə göstərməkdə məmnun olarıq. 
              </p> */}
          </div>
        </div>

        {last3Projects && (
          <LastThreeProjectCards
            // lastThree={lastThree}
            last3Projects={last3Projects}
          />
        )}

        <div className="home__feedback">
          <div className="container">
            <div className="home__feedback__content">
              <p>Rəylər</p>
              <h2>Müştərilərimizin bizim üçün verdiyi rəylər</h2>
            </div>

            {feedback && <Carusel feedback={feedback} />}
          </div>
        </div>

        <div className="home__blogs">
          <div className="container">
            <div className="home__blogs__content">
              <h2>Son bloqlar</h2>
            </div>

            <div className="cards-wrapper">
              {latestNews && <LatestNews latestNews={latestNews} />}
            </div>
          </div>
        </div>
      </motion.section>
      {/* )} */}
    </>
  );
}
