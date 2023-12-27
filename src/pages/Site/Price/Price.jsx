import React, { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Loading from "../../../Components/Loading/Loading";
import PriceCard from "../../../Components/PriceCard/PriceCard";
import UseFetch from "../../../UseFetch";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import "./Price.scss";
import { CgScrollV } from "react-icons/Cg";
import { animateScroll as scroll } from "react-scroll";

export default function Price() {
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const inputRef = useRef(null);

  

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { data: priceCards } = UseFetch(`${apiUrl}service_api/package/`);
  const { data: price } = UseFetch(`${apiUrl}service_api/services_property/`);

  const [isModalOpen, setIsModalOpen] = useState(false);




  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
   
  };

  const [search, setSearch] = useState("");



  const handleClick = (id) => {
    setSearch(id);
    setIsModalOpen(false);
  };

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
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

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
        {/*       headerLink start */}
        <div className="linkHeader">
          <div className="linkTitle">
            <h2>

              Qiy<span>m</span>ətlər
            </h2>

          </div>

          <div className="linkLinks">
            <Link to="/" className="linkLink">
              Ana səhifə
            </Link>
            <FaAngleRight className="angleIcon" />
            <Link to="about">Qiymətlər</Link>
          </div>
        </div>
        {/*      headerLink end */}

          {/*    header start */}

          <div className="header">
            <h2>Sizə uyğun qiyməti seçin</h2>
           
          </div>

          {/*    header end*/}

        <div className="container">
        {isModalOpen && <div className="overlay" onClick={openModal} />}

          <div className="modal-section">
            <div className="kateqoriya" onClick={openModal} >
          
                <BiCategory className="category-icon" />
           
              <p>Kateqoriya seçin</p>
            </div>

            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="modal-wrapper"
              >
                <div className="price-modal">
                <li
                   className="modal-all-prices"
                      // onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick("")}
                    >
                      Butun paketlər
                      {/* <FaAngleRight className="modal-angle-icon" /> */}
                    </li> 
                  <ul className="price-modal-1">
                   
                    {price &&
                      price.map((card) => (
                        <li
                        className="price-modal-1-li"
                          key={card.id}
                          // onMouseEnter={() => handleMouseEnter(card.title)}
                          // onMouseLeave={handleMouseLeave}
                          onClick={() => handleClick(card.id)}
                        >
                          {card.title}
                          {/* <FaAngleRight className="modal-angle-icon" /> */}
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          <div className="cardsContainer">
            {priceCards &&
              priceCards
                .filter((priceCard) => {
                  if (search) {
                    return priceCard?.services_property == search;
                  }
                  return true;
                })
                .map((card) => (
                  <PriceCard
                    title={card.package_name}
                    price={card.price}
                    period={card.price_period}
                    serviceItems={card.property_name}
                    color={card.color}
                    property={card.package_properties}
                    symbol={card.symbol}
                    key={card.id}
                  />
                ))}
          </div>
        </div>
      </motion.div>

      {/* )} */}
    </>
  );
}
