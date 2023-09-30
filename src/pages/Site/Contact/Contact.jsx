import React from "react";
import "./Contact.scss";
import "./Contact.scss";
import { useState, useEffect } from "react";
import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from "react-icons/Md";
import { SlLocationPin } from "react-icons/Sl";
import { BiChevronRight } from "react-icons/Bi";
import { FaAngleRight } from "react-icons/fa";
import {ImLocation} from "react-icons/im";
import { BsFillTelephoneFill, BsPhone } from "react-icons/Bs";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import UseFetch from "../../../UseFetch";
export default function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;

  // const { data: services } = UseFetch(`${apiUrl}core_api/contact`);
  const { data: services } = UseFetch(`${apiUrl}contact`);

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
        <section>
          <div className="home__contact">
            {/*   HEADER LINK START  */}
            <div className="projectHeaderLink">
              <div className="container">
                <div className="projectTitle">
                  <h2>
                    Con<span>t</span>act
                  </h2>
                </div>
              </div>
              <div className="projectLinks">
                <Link to="/home" className="projectLink">
                  Home
                </Link>
                <FaAngleRight className="angleIcon" />
                <Link to="contact">Contact</Link>
              </div>
            </div>
            {/*  HEADER LINK END  */}

            <div className="container">
              {services && (
                <div className="contactCardContainer">
                  {services.map(({fullname,email,phone_number,id,service,}) => (
                    <div className="card" key={id}>
                      <div className="icon-container">
                      <MdOutlineMarkEmailRead className="contactIcon" />
                          {/* <ImLocation className="contactIcon" />
                          <BsFillTelephoneFill className="contactIcon" /> */}
               
                      {/* {icon === "MdOutlineMarkEmailRead" && (
                        
                        )}
                        {icon === "ImLocation" && (
                          <ImLocation className="contactIcon" />
                        )}
                        {icon === "BsFillTelephoneFill" && (
                          <BsFillTelephoneFill className="contactIcon" />
                        )} */}
                      </div>
                      <h2 className="title">{fullname}</h2>

                      <div className="descriptionContainer">
                        <p className="contact-type">{phone_number}</p>
                        <p className="contact-type">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
