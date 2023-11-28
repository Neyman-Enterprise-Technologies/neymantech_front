import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import "./Project.scss";
// import { BiChevronRight } from "react-icons/Bi";

import { motion } from "framer-motion";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import LatestWorkCardInHome from "../../../Components/Home/LatestWorkCardInHome/LatestWorkCardInHome";
import UseFetch from "../../../UseFetch";

// import LatestWorkCardInHome from "../../../Components/Home/LatestWorkCardInHome/LatestWorkCardInHome";

export default function Project() {
  const apiUrl = import.meta.env.VITE_API_URL;
  
  const { data: latestWorkCardInHome } = UseFetch(
    `${apiUrl}service_api/services/`
  );
  const { data: latestWork } = UseFetch(
    `${apiUrl}service_api/last_works/`
  );



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
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="projects"
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
        {/*   HEADER LINK START  */}
        <div className="linkHeader">
          <div className="linkTitle">
            <h2>

              Işlə<span>r</span>imiz

            </h2>
          </div>

          <div className="linkLinks">
            <Link to="/" className="linkLink">

            Ana səhifə
            </Link>
            <FaAngleRight className="angleIcon" />
            <Link to="about"> İşlərimiz</Link>

          </div>
        </div>
        {/*  HEADER LINK END  */}
        {/*  HEADER START */}
        {/* <div className="projectHeader">
          <h2 className="projectTitle">İşlərimiz</h2>
          <p className="description">
            Şirkətlər üçün etdiyimiz işləri buradan daha detaylı görə bilərsiniz.
          </p>
        </div> */}

        {/*  CARDS CONTAINER START */}

        <div className="project-cards-container">
         
            {latestWorkCardInHome && (
              <LatestWorkCardInHome
               
                latestWorkCardInHome={latestWorkCardInHome}
                isProjectPage={true}
                latestWork={latestWork}
              />
            )}
         
        </div>

        {/*  HEADER END */}
      </motion.div>
      {/* )} */}
     
    </>
  );
}
