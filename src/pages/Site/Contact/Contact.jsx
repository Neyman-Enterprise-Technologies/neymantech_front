import React from "react";
import "./Contact.scss";
import "./Contact.scss";
import { useState, useEffect } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/Md";
import { SlLocationPin } from "react-icons/Sl";
import { BiChevronRight } from "react-icons/Bi";
import { FaAngleRight } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill, BsPhone } from "react-icons/Bs";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import UseFetch from "../../../UseFetch";

const contactCardsIconsObj = {
  MdOutlineMarkEmailRead: <MdOutlineMarkEmailRead className="contactIcon" />,
  ImLocation: <ImLocation className="contactIcon" />,
  BsFillTelephoneFill: <BsFillTelephoneFill className="contactIcon" />,
};

export default function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data: contact } = UseFetch(`${apiUrl}core_api/contact`);
  // const { data: contact } = UseFetch(`${apiUrl}contact`);
 
 


  /* FORM START */
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setInputPhone] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname && email && phone_number && inputSubject&& message) {
      fetch(`${apiUrl}core_api/contact/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ fullname ,email , phone_number , inputSubject, message}),
      });
    }
  }
 


  /* FORM END */

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
              {contact && (
                <div className="contactCardContainer">
                  {contact.map(
                    ({ contactType2, title, id, contactType1, icon }) => (
                      <div className="card" key={id}>
                        <div className="icon-container">
                          {contactCardsIconsObj[icon]}
                        </div>
                        <h2 className="title">{title}</h2>

                        <div className="descriptionContainer">
                          <p className="contact-type">{contactType1}</p>
                          <p className="contact-type">{contactType2}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="container">
            <div className="faqSection-2">
              <div className="faqTitleBottom">
                <p className="about-description">Contact Us</p>
                <h2>Do you have any questions?</h2>
                <p className="faqDescription">
                  Real innovations and a positive customer experience are the
                  heart of successful communication. No fake products and
                  services.
                </p>
                <div className="section-2-content">
                  <div className="left">
                    <img src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/faq-contact-1-1.png" />
                  </div>
                  <div className="right">
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
                          type="number"
                          placeholder="Phone"
                          required
                          value={phone_number}
                          onChange={(e) => setInputPhone(e.target.value)}
                        />
                        <input
                          type="Subject"
                          placeholder="Subject"
                          required
                          value={inputSubject}
                          onChange={(e) => setInputSubject(e.target.value)}
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
                      <button>
                        <span>SEND MESSAGE</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
