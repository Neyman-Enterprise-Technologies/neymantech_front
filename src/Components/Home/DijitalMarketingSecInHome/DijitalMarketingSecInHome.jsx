import { BsFillPatchCheckFill } from "react-icons/Bs";
import { Link } from "react-router-dom";

const DijitalMarketingSecInHome = ({ digitalMarketingSecInHome }) => {
  return (
    <div className="digital-marketing-container">
      <div className="left">
        <div className="top-container">
          <h2>{digitalMarketingSecInHome.title}</h2>
          <p>{digitalMarketingSecInHome.description}</p>

          <div className="marketing-cards-container">
            <div className="left-cards-container">
              {digitalMarketingSecInHome.cardNames.leftCards.map((card) => (
                <div className="card" key={card.id}>
                  <BsFillPatchCheckFill className="card-icon" />
                  <p>{card.name}</p>
                </div>
              ))}
            </div>
            <div className="right-cards-container">
              {digitalMarketingSecInHome.cardNames.rightCards.map((card) => (
                <div className="card" key={card.id}>
                  <BsFillPatchCheckFill className="card-icon" />
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
      <div className="right"><img src={digitalMarketingSecInHome.imgSrc} /></div>
    </div>
  );
};

export default DijitalMarketingSecInHome;
