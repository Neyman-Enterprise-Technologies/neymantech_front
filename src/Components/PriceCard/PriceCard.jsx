
import { faCheck, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";




const PriceCard = ({ title, price, color, period, property, symbol }) => {


 const sorted = [...property].sort((a,c)=> c.is_active - a.is_active )

  return (
    <motion.div className="cardsContainer__card"  initial={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1 }}>
      <h2
        style={{ backgroundColor: color }}
        className="cardsContainer__cardHeader"
      >
        {title}
      </h2>

      <div className="cardsContainer__pricePeriodContainer">
        <p className="cardsContainer__exchangeRate">{symbol}</p>
        <span className="cardsContainer__price">{price}</span>
        <p className="cardsContainer__period">/ {period}</p>
       
      </div>

      <div className="cardsContainer__devider"></div>
      <div className="cardsContainer__cardContentContainer">
        {sorted.map((item, index) => (
          <div className="cardsContainer__itemsContainer" key={index}>
          
            {item.is_active ? (
              <div className="cardsContainer__check-icon-container">
           <FontAwesomeIcon icon={faCheck} fade className="cardsContainer__tick-icon" />
           </div>
            ) : (
              // <AiOutlineClose className="cardsContainer__notAveilble-icon" />
            
              // <FontAwesomeIcon icon={faXmark} className="cardsContainer__notAveilble-icon"/>
              <div className="cardsContainer__check-icon-container">
              <FontAwesomeIcon icon={faX} className="cardsContainer__notAveilble-icon" />
              </div>
              // <FontAwesomeIcon icon={faXmark} className="cardsContainer__notAveilble-icon" />
            )}
             {/* <div style={{backgroundColor:'yellow'}}> */}
               <p className="cardsContainer__items">{item.property_name}</p>
               {/* </div> */}
          </div>
        ))}
      </div>
    
    </motion.div>
  );
};

export default PriceCard;
