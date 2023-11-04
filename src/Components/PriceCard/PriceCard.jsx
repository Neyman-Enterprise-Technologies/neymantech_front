import { TiTick } from "react-icons/ti";
import UseFetch from "../../UseFetch";
import { AiOutlineClose } from "react-icons/ai";

const PriceCard = ({ title, price, color, period, property, symbol }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const activeProperties = property.filter((item) => item.is_active);
  const inactiveProperties = property.filter((item) => !item.is_active);

  const properties = [...activeProperties, ...inactiveProperties];

  return (
    <div className="cardsContainer__card">
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
        {properties.map((item, index) => (
          <div className="cardsContainer__itemsContainer" key={index}>
            <p className="cardsContainer__items">{item.property_name}</p>
            {item.is_active ? (
              <TiTick className="cardsContainer__tick-icon" />
            ) : (
              <AiOutlineClose className="cardsContainer__notAveilble-icon" />
            )}
          </div>
        ))}
      </div>
      <div className="cardsContainer__devider"></div>
      <a className="cardsContainer__link">Get Started</a>
    </div>
  );
};

export default PriceCard;
