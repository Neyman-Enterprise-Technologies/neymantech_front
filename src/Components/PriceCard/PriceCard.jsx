import { TiTick } from "react-icons/ti";
import UseFetch from "../../UseFetch";

const PriceCard = ({ title, price, serviceItems, color, period }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data: priceProperty } = UseFetch(
    `${apiUrl}service_api/package_property/`
  );

  return (
    <div className="cardsContainer__card">
      <h2
        style={{ backgroundColor: color }}
        className="cardsContainer__cardHeader"
      >
        {title}
      </h2>

      <div className="cardsContainer__pricePeriodContainer">
        <p className="cardsContainer__exchangeRate">$</p>
        <span className="cardsContainer__price">{price}</span>
        <p className="cardsContainer__period">/ {period}</p>
      </div>

      <div className="cardsContainer__devider"></div>
      <div className="cardsContainer__cardContentContainer">
        {priceProperty &&
          priceProperty.map((item, index) => (
            <div className="cardsContainer__itemsContainer" key={index}>
              <p className="cardsContainer__items">{item.property_name}</p>
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
