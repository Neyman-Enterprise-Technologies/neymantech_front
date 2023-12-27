import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { MdOutlineMarkEmailRead } from "react-icons/Md";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Loading from "../../../Components/Loading/Loading";
import UseFetch from "../../../UseFetch";
import "./Contact.scss";

const contactCardsIconsObj = {
  MdOutlineMarkEmailRead: <MdOutlineMarkEmailRead className="contactIcon" />,
  ImLocation: <ImLocation className="contactIcon" />,
  BsFillTelephoneFill: <BsFillTelephoneFill className="contactIcon" />,
};

export default function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data: contact } = UseFetch(`${apiUrl}core_api/contact_card`);
  console.log(contact)

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

  /* FORM START */
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setInputPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname && email && phone_number && service && message) {
      fetch(`${apiUrl}core_api/contact/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          phone_number,
          service,
          message,
        }),
      });
      setFullname("");
      setEmail("");
      setInputPhone("");
      setService("");
      setMessage("");
      toast.success("Mesajınız uğurla göndərildi!");
    } else {
      toast.error("Düzgün işləmir. ");
    }
  };

  /* FORM END */

  const [loading, setLoading] = useState(false);
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

        {/*   HEADER LINK START  */}
        <div className="linkHeader">
          <div className="linkTitle">
            <h2>
              Əl<span>a</span>qə
            </h2>
          </div>

          <div className="linkLinks">
            <Link to="/" className="linkLink">
              Ana səhifə
            </Link>
            <FaAngleRight className="angleIcon" />
            <Link to="about">Əlaqə</Link>

          </div>
        </div>
        {/*  HEADER LINK END  */}

        <div className="container">

          {contact && (
            <div className="contactCardContainer">
              <div className="card">
                <div className="icon-container">
                  {/* {contactCardsIconsObj[icon]} */}
                  <MdOutlineMarkEmailRead className="contactIcon" />
                </div>
                <h2 className="title">E-poçta</h2>

                <div className="descriptionContainer">
                  <p className="contact-type">{contact[0].email}</p>
                  {/* <p className="phoneNumber"></p> */}
                </div>

              </div>
              <div className="card">
                <div className="icon-container">
                  {/* {contactCardsIconsObj[icon]} */}
                  <ImLocation className="contactIcon" />
                </div>

                <h2 className="title">Konum</h2>

                <div className="descriptionContainer">
                  <p className="contact-type">{contact[0].location}</p>
                  {/* <p className="phoneNumber">{contact[0].phone}</p> */}
                </div>
              </div>
              <div className="card">
                <div className="icon-container">
                  {/* {contactCardsIconsObj[icon]} */}
                  <BsFillTelephoneFill className="contactIcon" />
                </div>
                <h2 className="title">Telfon nömrəsi</h2>

                <div className="descriptionContainer">
                  <p className="contact-type">{contact[0].phone}</p>
                  {/* <p className="phoneNumber"></p> */}

                </div>
              </div>
            </div>
          )}

          <div className="faqSection-2">
            <div className="faqTitleBottom">
              <p className="about-description">Əlaqə</p>
              <h2>Suallarını bizə göndərə bilərsən.</h2>
            </div>
            <div className="section-2-content">
              <div className="left">
                <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/faq-contact-1-1.png" />
              </div>
              <div className="right">
                <Toaster position="top-center" />
                <form onSubmit={handleSubmit}>
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Phone"
                      required
                      value={phone_number}
                      onChange={(e) => setInputPhone(e.target.value)}
                    />
                    <input
                      type="Subject"
                      placeholder="Subject"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    />
                  </div>
                  <textarea
                    name=""
                    id=""
                    required
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <Link className="contact-send">
                    <span>Mesaj göndər</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* )} */}
    </>
  );
}
