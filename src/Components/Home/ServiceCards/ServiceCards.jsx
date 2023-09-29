import { Link } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/Bi";
import { TbMessages } from "react-icons/Tb";

const ServiceCards = ({servicecards}) => {

 

  return (
   <>
    <div className="home__service__cards">
      {servicecards.map((card) => (
     
        <Link to={"/service"} key={card.id}>
          <div className="home__service__cards__card">
          <div className="home__service__cards__card__icon">
          <TbMessages className="icon1" />
          <BiSolidBadgeCheck className="badge" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          </div>
        </Link>

      ))}
    </div>
   </>
  );
};

export default ServiceCards;
