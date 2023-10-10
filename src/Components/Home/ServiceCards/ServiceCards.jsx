import { Link } from "react-router-dom";
import { BiCart, BiListCheck, BiSolidBadgeCheck,BiSolidMegaphone } from "react-icons/Bi";
import {BsLaptop} from "react-icons/Bs"

import { TbMessages } from "react-icons/Tb";
import UseFetch from "../../../UseFetch";
import { AiOutlineMobile } from "react-icons/Ai";

const iconComponents = {

  BsLaptop:<BsLaptop className="icon1"/>,
  BiListCheck:<BiListCheck className="icon1"/>,
  TbMessages: <TbMessages className="icon1" />,
  BiSolidMegaphone:<BiSolidMegaphone className="icon1"/>,
  AiOutlineMobile:<AiOutlineMobile className="icon1"/>,
  BiCart:<BiCart className="icon1"/>

};

const ServiceCards = ({ servicecards }) => {
  return (
    <>
      <div className="home__service__cards">
        {servicecards.map((card) => (
          <Link to={"/service"} key={card.id}>
            <div className="home__service__cards__card">
              <div className="home__service__cards__card__icon">
                {iconComponents[card.icon]}
                <BiSolidBadgeCheck className="badge" />
              </div>
              {/* <h3>{card.property_name}</h3> */}
              <h3>{card.title}</h3>
              {/* <p>{card.package}</p> */}
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServiceCards;
