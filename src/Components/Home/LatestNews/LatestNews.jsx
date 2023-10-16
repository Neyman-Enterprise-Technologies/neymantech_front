import { Link } from "react-router-dom";
import "./LatestNews.scss"

const LatestNews = ({ latestNews }) => {
  return (
  

   
 <div className="cards-container">
      {latestNews.map((card) => (
        <div className="card" key={card.id}>
          <div className="cardImgContainer">
            <img src={card.photo} />
          </div>
          <div className="bottom-content">
            <h2>{card.company_name}</h2>
            <p>{card.services_category}</p>
          </div>
        </div>
      ))}
    </div>
    
      
  
  );
};

export default LatestNews;
