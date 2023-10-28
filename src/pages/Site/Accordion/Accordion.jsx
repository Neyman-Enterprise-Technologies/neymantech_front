import { useState } from "react";
import "./Accordion.scss"
import AccordionItem from "../../../Components/AccordionItem/AccordionItem";
import UseFetch from "../../../UseFetch";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Accordion = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: faq } = UseFetch(`${apiUrl}core_api/faq`);

  const [curOpen, setCurOpen] = useState(null);
  return (
    <>
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
      <Link to="faq">FAQ</Link>
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
    </>
  );
};

export default Accordion;
