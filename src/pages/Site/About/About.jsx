import { Link as ScrollLink } from "react-scroll";
import React from "react";
import "./About.scss";

// import { BiChevronRight } from "react-icons/bi";

import { useEffect, useState } from "react";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import Team from "../../../Components/Team/Team";
import UseFetch from "../../../UseFetch";
import Partners from "../../../Components/Partners/Partners";

export default function About() {
  const apiUrl = import.meta.env.VITE_API_URL;
  //*OUR TEAM SECTION-4
  const { data: team, error } = UseFetch(`${apiUrl}core_api/our_team/`);

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
    // setShowIcon(true);
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
              transition: "all 0.5s",
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
                </p>
                <p className="description">
                  **Bizim haqqımızda əsas prinsiplər:<br/>
                  1.**İnnovasiya və
                  Yaradıcılıq:<br/>** Müştərilərimizə yaratıcı və innovativ rəqəmsal
                  çözümlər təklif edərək onların dijital sahədə öne çıxmağını
                  təmin etməyə çalışırıq.
                </p>
                <p className="description">
                <br/>
                  2. **Müştəri Memnuniyyəti:<br/>** Müştərilərimizin tələblərini
                  anlamağa, ehtiyaclarına cavab verməyə və onların
                  memnuniyyətini əsas qayğımız kimi görməyə nail olmağa
                  çalışırıq.
                </p>
                <p className="description">
                  3.**Texnologiyalarda Sürətli İnkişaf:<br/>** Sürətli inkişaf
                  etməyə və texnologiyalardakı son yenilikləri izləyərək
                  müştərilərimizin daima müstəqil və müasir olmalarına kömək
                  edirik. Neyman Enterprise Technologies, müştərilərimizlə güclü
                  bir əməkdaşlıq qurmağa və onların rəqəmsal hədəflərinə
                  çatmağına kömək olmağı hədəfləyən şirkətdir.
                </p>
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
              </div>
              <div className="card">
                <h2>Vizyonumuz</h2>
                <div className="devider"></div>
                <p className="description">
                  Real innovations and positive customer experience are the
                  heart of successful communication.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION-2 END  */}

          {/* SECTION-3 START */}

          <section className="section-3">
            {/* <p className="title">Niyə bizi seçməlisiniz?</p>

              <p className="description title-left-text">
                Neyman Enterprise Technologies'i seçmək üçün bir neçə əsas
                səbəb:
              </p> */}
            <img
              src="https://themes.hibootstrap.com/varn/wp-content/uploads/2020/01/why-choose-img1-1-1.png"
              alt=""
            />

            <div className="description">
              1. **İnnovativ Rəqəmsal Həllər:<br/>** Biz, müştərilərimizə innovativ
              və yaradıcı rəqəmsal çözümlər təqdim edirik. İş həllərimiz,
              müştərilərimizin müasir dijital dünyada öne çıxmağını təmin edir.<br/>
              2. **Müştəri Memnuniyyəti:<br/>** Müştəri memnuniyyəti bizim üçün ən
              əhəmiyyətli prioritetdir. Müştərilərimizin tələblərini anlamağa
              çalışır, şəxsi və effektiv xidmətlər təklif edirik. <br/>3.
              **Texnologiyalarda Təcrübə:<br/>** Biz, texnologiyalardakı son
              yenilikləri müştərilərimizin üstünə tətbiq etməklə onların müasir
              və müstəqil qalmağını təmin edirik.<br/> 4.**Sürətli və Təhlükəsiz
              Implementasiya:<br/>** Proseslərimizi sürətli və təhlükəsiz şəkildə
              implement etmək üçün nailiyyətə çatmağa çalışır, müştərilərimizə
              ən yaxşı keyfiyyət təmin etmək üçün fəaliyyət göstəririk.<br/> 5.
              **Əməkdaşlıq və İtmiş Komanda:<br/>** Bizim komandamız,
              müştərilərimizlə yaxın əməkdaşlıq edərək onların müstəqil dijital
              hədəflərinə nail olmağında kömək edir. Neyman Enterprise
              Technologies, müştərilərinin dijital inkşafını dəstəkləmək və
              müasir rəqəmsal sahədə lider mövqedə olmağa nail etmək üçün
              mükəmməl bir təhlükəsizdir.
            </div>
          </section>
        
        </div>
        <div id="team-section">
          {error && <div>{error}</div>}
          {team && <Team team={team} />}
        </div>

        <Partners />
      </motion.section>
      {/* )} */}
    </>
  );
}
