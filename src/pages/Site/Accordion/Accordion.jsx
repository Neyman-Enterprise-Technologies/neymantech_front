import { useEffect, useState } from "react";
import "./Accordion.scss";
import AccordionItem from "../../../Components/AccordionItem/AccordionItem";
import UseFetch from "../../../UseFetch";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Loading from "../../../Components/Loading/Loading";
import { motion } from "framer-motion";
import { CgScrollV } from "react-icons/Cg";
import { animateScroll as scroll } from "react-scroll";
const Accordion = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: faq } = UseFetch(`${apiUrl}core_api/faq`);

  const [curOpen, setCurOpen] = useState(null);
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
      {loading ? (
        <Loading />
      ) : (
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
        transition: "opacity 0.5s",
      }}
      onClick={handleScrollToTop}
    >
      <CgScrollV />
    </div>
  )}
          <div className="accordionHeader">
            <div className="container">
              <div className="accordionTitle">
                <h2>
                  F<span>A</span>Q
                </h2>
              </div>
            </div>
            <div className="accordionLinks">
              <Link to="/home" className="homeLink">
                Home
              </Link>
              <FaAngleRight className="angelIcon" />
              <Link className="faqLink" to="faq">
                FAQ
              </Link>
            </div>
          </div>
          <div className="accordion">
            {faq &&
              faq.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  num={i}
                  title={item.question}
                  text={item.answer}
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                >
                  {item.answer}
                </AccordionItem>
              ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Accordion;
