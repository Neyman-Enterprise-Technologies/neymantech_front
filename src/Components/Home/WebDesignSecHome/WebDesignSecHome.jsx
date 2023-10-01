import { BsFillPatchCheckFill } from "react-icons/Bs";
import { Link } from "react-router-dom";
const WebDesignSecHome = ({ webDesignSecHome }) => {
  return (
    <div className="web-design-section">
      <div className="left">
        <img src={webDesignSecHome.imgSrc} />
      </div>
      <div className="right">
        <h2>{webDesignSecHome.title}</h2>
        <p>{webDesignSecHome.description}</p>
        <div className="cards-container">
          <div className="left-cards-container">
            {webDesignSecHome.cardNames.leftCards.map((card) => (
              <div className="card" key={card.id}>
                <BsFillPatchCheckFill className="card-icon" />
                {""}
                <p>{card.name}</p>
              </div>
            ))}
          </div>
          <div className="right-cards-container">

          {webDesignSecHome.cardNames.rightCards.map((card) => (
              <div className="card" key={card.id}>
              <BsFillPatchCheckFill className="card-icon" />
              {""}
              <p>{card.name}</p>
            </div>
          ))}
           
          </div>
        </div>
        {/* <Link className="readMore-btn">
          <span>READ MORE</span>
        </Link> */}
      </div>
    </div>
  );
};

export default WebDesignSecHome;
