import { useState } from "react";
import AccordionItem from "../../../Components/AccordionItem/AccordionItem";
import UseFetch from "../../../UseFetch";

const Accordion = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: faq } = UseFetch(`${apiUrl}core_api/faq`);

  const [curOpen, setCurOpen] = useState(null);
  return (
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
  );
};

export default Accordion;
