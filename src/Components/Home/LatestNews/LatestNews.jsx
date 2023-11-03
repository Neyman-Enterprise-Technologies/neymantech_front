
import { Link } from "react-router-dom";
import "./LatestNews.scss"

const LatestNews = ({ latestNews }) => {


  const currentDate = new Date();
  

  const filteredNews = latestNews.filter((card) => {
    const cardDate = new Date(card.date);
  
    return cardDate < currentDate && card.is_active;;
  });

  
  return (
  

   
 <div className="cards-container">
      {filteredNews.map((card) => (
        <Link to={`/blogs/${card.slug}`} key={card.id}>
        <div className="card" key={card.id}>
          <div className="cardImgContainer">
            <img src={card.photo} />
          </div>
          <div className="bottom-content">
            <h2>{card.title}</h2>
            <p>{card.short_descriptions}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
    
      
  
  );
};

export default LatestNews;
