import { TiTick } from "react-icons/ti";


const PriceCard = ({ title, price, serviceItems, color }) => {


  return (
    <div className="cardsContainer__card">
      <h2 style={{backgroundColor: color}} className="cardsContainer__cardHeader">{title}</h2>
      <p className="cardsContainer__price">{price}</p>
      <div className="cardsContainer__devider"></div>
      <div className="cardsContainer__cardContentContainer">
        {serviceItems.map((item, index) => (
          <div className="cardsContainer__itemsContainer" key={index}>
            <p className="cardsContainer__items">{item}</p>
            <TiTick className="cardsContainer__tick-icon" />
          </div>
        ))}
      </div>
      <div className="cardsContainer__devider"></div>
      <a className="cardsContainer__link">Get Started</a>
    </div>
  );
};

export default PriceCard;
