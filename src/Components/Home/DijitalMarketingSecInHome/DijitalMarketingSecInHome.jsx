import { BsFillPatchCheckFill } from "react-icons/Bs";
import { Link } from "react-router-dom";


const DijitalMarketingSecInHome = ({ digitalMarketingSecInHome }) => {
  return (


    <div className="digital-marketing-container">
      <div className="left">
        <div className="top-container">
          <h2>{digitalMarketingSecInHome[0].title}</h2>
          <p>{digitalMarketingSecInHome[0].content}</p>
          </div>
          <div className="marketing-cards-container">
            <div className="left-cards-container">
              {digitalMarketingSecInHome.map((card) => (
                <div className="card" key={card.id}>
   
                  <BsFillPatchCheckFill className="card-icon" />
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          
          </div>
          {/* <Link className="readMore-btn">
            <span>READ MORE</span>
          </Link> */}
     
      </div>
      <div className="right">
        <img src={digitalMarketingSecInHome[0].photo} />
      </div>
    </div>
  );
};

export default DijitalMarketingSecInHome;
