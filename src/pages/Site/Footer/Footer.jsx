import React from "react";
import toast , {Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Footer.scss";

// import { BiLogoGmail } from "react-icons/bi";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faHandshakeSlash,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import UseFetch from "../../../UseFetch";
// import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data: contact } = UseFetch(`${apiUrl}core_api/contact_card`);

  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email) {
      fetch(`${apiUrl}core_api/subscribe/`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmail("");
      toast.success("You have successfully subscribed");
    
    }else{
      toast.error("Did not work. Please type your email")
    }
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__subscribers">
          <div className="footer__subscribe-content">
            <h2>Haqqımızda</h2>
            <p>

              "Neyman Enterprise Technologies" şirkəti 2022'ci il yanvarın 1'dən
              fəaliyyət göstərən startap komandasıdır.
            </p>
          </div>

            <Toaster position="top-center" />
          <div className="footer__input-button-container">
            <input
              type="text"
              placeholder="Yeniliklərdən xəbərdar olmaq üçün abonə olun"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__subscribe-input"
            />
            <Link to={"#"} onClick={handleClick} className="footer__subscribe-button">
          <span>Abonə ol</span>
            </Link> 
          </div>

        
        </div>

        <div className="footer__top">
          <div className="footer__contactInfoCol">
            <div className="footer__headerandBorderBottom">
              <h2>Bizimlə əlaqə</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="footer__phoneIcon"
                />
              </div>
              <div className="footer__phoneInfo">
                <p>7/24 aktiv </p>
                <Link to="tel:+994 0000000">+994 51 573 86 74 </Link>
              </div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="footer__phoneIcon"
                />
              </div>
              <div className="footer__phoneInfo">
                <p>E-poçtamız</p>
                <Link to="#">info.neyman.e.t@gmail.com</Link>
              </div>
            </div>
            <div className="footer__contactContainer">
              <div className="footer__iconContainer">
                <FontAwesomeIcon
                  icon={faHandshakeSlash}
                  className="footer__phoneIcon"
                />
              </div>

              {/*    FOOTER SOCIAL MEDIA ICONS */}

              <div className="footer__phoneInfo">
                <p>Sosial şəbəkələr</p>
                <div className="footer__socialMediaContainer">
                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://twitter.com/"}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="footer__socialIcon"
                    />
                  </Link>

                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://www.facebook.com//"}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="footer__socialIcon"
                    />
                  </Link>

                  <Link
                    className="footer__socialMediaLinks"
                    to={"https://www.instagram.com//"}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="footer__socialIcon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__quickLinksContainer">
            <div className="footer__bottomUnderscore">
              <h2>Sayt xəritəsi</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__quickLinks">
              <div className="footer__left">
                <Link className="footer__footerLinks" to={"/"}>
                  Ana səhifə
                </Link>
                <Link className="footer__footerLinks" to={"/about"}>
                  {/* Bloq */}
                  Haqqımızda
                </Link>
                <Link className="footer__footerLinks" to={"/"}>
                  Xidmətlər
                </Link>
                <Link className="footer__footerLinks" to={"/project"}>
                  İşlərimiz
                </Link>
                <Link className="footer__footerLinks" to={"/price"}>
                  Qiymətlər
                </Link>
                <Link className="footer__footerLinks" to={"/about"}>
                  Komandamiz
                </Link>
                <Link className="footer__footerLinks" to={"/blogs"}>
                  Bloq
                </Link>
              
              </div>
              <div className="footer__right">
               
                <Link className="footer__footerLinks" to={"/contact"}>
                  Əlaqə
                </Link>
                <Link className="footer__footerLinks" to={"/faq"}>
                  FAQ
                </Link>


                {/* <Link className='footer__footerLinks' to={'/blogs'}>
                Services
              </Link> */}
              </div>
            </div>
          </div>
          <div className="footer__galleryContainer">
            <div className="footer__bottomUnderscore">
              <h2>Qalareya</h2>
              <div className="footer__devider"></div>
            </div>
            <div className="footer__galleries">
              <div className="footer__firstLine">
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-2-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-10-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-9-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="footer__secondLine">
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-8-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-7-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="footer__galleriesImagesCont">
                  <img
                    src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/blog-image-6-1-1-300x300.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   

    <div className="container">
    <div className="footer__bottom">

          <div className="footer__bottomDevider"></div>
          <div className="footer__copyright">
            <p className="footer__copyrightLeft">
              Copyright 2023. Bütün hüquqlar Neyman Enterprise Technologies şirkəti tərəfindən qorunur
            </p>
            
          </div>
        </div>
      </div>
    </div>

   
    
    
  );

}
