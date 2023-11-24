import React from "react";
import "./About.scss";
// import { BiChevronRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCheckSquare } from "react-icons/ai";
import Loading from "../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import Carusel1 from "../../../Components/Carusel1/Carusel1";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import {
  BsCheckLg,
  BsFillCheckSquareFill,
  BsFillPatchCheckFill,
} from "react-icons/Bs";
import Team from "../../../Components/Team/Team";
import UseFetch from "../../../UseFetch";
// import AboutSection1 from "../../../Components/AboutSection1/AboutSection1";
import Partners from "../../../Components/Partners/Partners";
import { CgScrollV } from "react-icons/Cg";

export default function About() {
  const apiUrl = import.meta.env.VITE_API_URL;
  //*OUR TEAM SECTION-4
  // const { data: team, error } = UseFetch("http://localhost:8001/team");
  const { data: team, error } = UseFetch(`${apiUrl}core_api/our_team/`);

  //*ABOUTSECTION -1
  const { data: aboutSection1 } = UseFetch(
    "http://localhost:8001/aboutSection1"
  );

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
              transition: "opacity 0.5s",
            }}
            onClick={handleScrollToTop}
          >
            <FaChevronUp className="scroll-icon" />
          </div>
        )}
        {/* ABOUT HEADER START */}
        <div className="linkHeader">
          <div className="linkTitle">
            <h2>
              Haqq<span>ım</span>ızda
            </h2>
          </div>

          <div className="linkLinks">
            <Link to="/" className="linkLink">
              Ana səhifə
            </Link>
            <FaAngleRight className="angleIcon" />
            <Link to="about">Haqqımızda</Link>
          </div>
        </div>
        {/* ABOUT HEADER END */}

        {/* SECTION-1 START */}
        {/* <div className="container">
            {aboutSection1 && <AboutSection1 aboutSection1={aboutSection1} />}
          </div> */}
        {/* SECTION-1 END */}

        {/* SECTION-2 START  */}

        <div className="container">
          <section className="section-2">
            <div className="cardsContainer">
              <div className="card">
                <h2>Haqqımızda</h2>
                <div className="devider"></div>
                <p className="description">
                  2022-ci ilin yanvarının 1-də təsis edilmiş Neyman Enterprise
                  Technologies, rəqəmsal həllər sahəsində müştərilərinin
                  ehtiyaclarına cavab verərək inkişaf etmiş bir şirkətdir.
                  Şirkət, müştərilərinin müasir texnologiyalardan və dijital
                  həllərdən maksimum istifadə etmələrini təmin etmək üçün geniş
                  bir xidmət portföyünü təklif edir.
                  <br />
                  **Bizim haqqımızda əsas prinsiplər:**
                  <br />
                  1. **İnnovasiya və Yaradıcılıq:** <br />
                  Müştərilərimizə yaratıcı və innovativ rəqəmsal çözümlər təklif
                  edərək onların dijital sahədə öne çıxmağını təmin etməyə
                  çalışırıq.
                  <br />
                  2. **Müştəri Memnuniyyəti:** <br />
                  Müştərilərimizin tələblərini anlamağa, ehtiyaclarına cavab
                  verməyə və onların memnuniyyətini əsas qayğımız kimi görməyə
                  nail olmağa çalışırıq.
                  <br />
                  3. **Texnologiyalarda Sürətli İnkişaf:** <br />
                  Sürətli inkişaf etməyə və texnologiyalardakı son yenilikləri
                  izləyərək müştərilərimizin daima müstəqil və müasir olmalarına
                  kömək edirik. Neyman Enterprise Technologies, müştərilərimizlə
                  güclü bir əməkdaşlıq qurmağa və onların rəqəmsal hədəflərinə
                  çatmağına kömək olmağı hədəfləyən şirkətdir.
                </p>
                {/* <div className="cardListsContainer">
                    <div className="cardList">
                      <div className="icon-container">
                        {" "}
                        <AiFillCheckCircle className="list-icon" />
                      </div>
                      <p>Activate listening</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Brilliant minds</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Better, best, wow!</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Branding it better!</p>
                    </div>
                  </div> */}
              </div>
              <div className="card">
                <h2>Missiyamız</h2>
                <div className="devider"></div>
                <p className="description">
                  "2022-ci ildə fəaliyyətə başlayan Neyman Enterprise
                  Technologies şirkəti olaraq, müştərilərimizə yenilikçi
                  rəqəmsal həllər təklif edərək onların iş məqsədlərinə nail
                  olmalarına kömək etməyi özümüzə söz vermişik. Neyman
                  Enterprise Technologies olaraq, texnoloji inkişafları izləyir
                  və müştərilərimizi gələcəyin rəqəmsal dünyasında lider mövqedə
                  tutmaq üçün sürətli bir şəkildə fəaliyyət göstəririk.
                </p>
                {/* <div className="cardListsContainer">
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Creating results</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Expect more</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Good thinking</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>In real we trust</p>
                    </div>
                  </div> */}
              </div>
              <div className="card">
                <h2>Vizyonumuz</h2>
                <div className="devider"></div>
                <p className="description">
                  Real innovations and positive customer experience are the
                  heart of successful communication.
                </p>
                {/* <div className="cardListsContainer">
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Stay real always</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>We have you covered</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>We turn heads</p>
                    </div>
                    <div className="cardList">
                      <AiFillCheckCircle className="list-icon" />
                      <p>Your brand, promoted</p>
                    </div>
                  </div> */}
              </div>
            </div>
          </section>

          {/* SECTION-2 END  */}

          {/* SECTION-3 START */}

          <section className="section-3">
            <div className="left">
              <p className="title">Niyə bizi seçməlisiniz?</p>
            
              <p className="description">
                Neyman Enterprise Technologies'i seçmək üçün bir neçə əsas
                səbəb:
                <br />
                1. **İnnovativ Rəqəmsal Həllər:** <br /> Biz, müştərilərimizə
                innovativ və yaradıcı rəqəmsal çözümlər təqdim edirik. İş
                həllərimiz, müştərilərimizin müasir dijital dünyada öne
                çıxmağını təmin edir.
                <br />
                2. **Müştəri Memnuniyyəti:** <br /> Müştəri memnuniyyəti bizim
                üçün ən əhəmiyyətli prioritetdir. Müştərilərimizin tələblərini
                anlamağa çalışır, şəxsi və effektiv xidmətlər təklif edirik.
                <br />
                3. **Texnologiyalarda Təcrübə:** <br /> Biz, texnologiyalardakı
                son yenilikləri müştərilərimizin üstünə tətbiq etməklə onların
                müasir və müstəqil qalmağını təmin edirik.
                <br />
                4. **Sürətli və Təhlükəsiz Implementasiya:** <br />{" "}
                Proseslərimizi sürətli və təhlükəsiz şəkildə implement etmək
                üçün nailiyyətə çatmağa çalışır, müştərilərimizə ən yaxşı
                keyfiyyət təmin etmək üçün fəaliyyət göstəririk.
                <br />
                5. **Əməkdaşlıq və İtmiş Komanda:** <br /> Bizim komandamız,
                müştərilərimizlə yaxın əməkdaşlıq edərək onların müstəqil
                dijital hədəflərinə nail olmağında kömək edir.
                <br />
                <br />
                Neyman Enterprise Technologies, müştərilərinin dijital inkşafını
                dəstəkləmək və müasir rəqəmsal sahədə lider mövqedə olmağa nail
                etmək üçün mükəmməl bir təhlükəsizdir.
              </p>
              {/* <div className="selected-title-container">
                <BsCheckLg className="tick-icon" />
                <h2 className="selected-title"> Core Development</h2>
              </div>
              <p className="selected-description">
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p>
              <div className="selected-title-container">
                <BsCheckLg className="tick-icon" />
                <h2 className="selected-title"> Define Your Choices</h2>
              </div>
              <p className="selected-description">
                No fake products and services. The customer is king, their lives
                and needs are the inspiration.
              </p> */}
            </div>
            <div className="right">
              <img
                src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/why-choose-img1-1-1.png"
                alt=""
              />
            </div>
          </section>
        </div>
        {/* SECTION-3 END */}

        {/* SECTION-3 END */}
        {/* SECTION-4 START */}

        {error && <div>{error}</div>}
        {team && <Team team={team} />}

        {/* SECTION-4 END */}

        <Partners />
      </motion.section>
      {/* )} */}
    </>
  );
}
