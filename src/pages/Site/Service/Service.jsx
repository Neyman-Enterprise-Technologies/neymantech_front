import React, { useEffect, useState } from "react";
import "./Service.scss";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/Bs";

import firstSectionImg from "../../../images/about-img1-1-1.png";
import secondSectionImg from "../../../images/why-choose-img1-1-1.png";
import Loading from "../../../Components/Loading/Loading";
import { FaAngleRight } from "react-icons/fa";

export default function Service() {
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
      {loading ? (
        <Loading />
      ) : (
   
         <div className="service">
          {/* heading start */}
          <div className="serviceHeader">
            <div className="container">
              <div className="serviceTitle">
                <h2>
                  Ser<span>vi</span>ces
                </h2>
              </div>
            </div>
            <div className="serviceLinks">
              <Link to="/home" className="serviceLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="service">Services</Link>
            </div>
          </div>
          {/* heading end */}
         
            {/* first section start*/}
         <div className="container">
         <div className="firstSection">
            <div className="firstSection__textContent">
              <p className="firstSection__header">WHY CHOOSE US</p>
              <p className="firstSection__title">
                The key to your motivation and success
              </p>
              <p className="firstSection__description">
                We believe brand interaction is key in communication. Real
                innovations and a positive customer experience are the heart of
                successful communication.
              </p>
              <div className="firstSection__ListTtitleContainer">
                <BsCheckLg className="firstSection__list-title-icon" />
                <p className="firstSection__list-title-description">Core Development</p>
              </div>
              <div className="firstSection__ListTtitleContainer">
                <BsCheckLg className="firstSection__list-title-icon" />
                <p className="firstSection__list-title-description">Define Your Choices</p>
              </div>
            </div>
            <div className="firstSection__imgContainer">
              <img src={firstSectionImg} />
            </div>
          </div>
         </div>
            {/* first section end */}
        </div>

        
      )}
    </>
  );
}
