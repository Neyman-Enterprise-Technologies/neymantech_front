import { Link } from "react-router-dom";

const LastThreeProjectCards = ({last3Projects}) => {
// console.log(lastThree)
// console.log(lastThreeProjectCards)
  
  return ( 
    <div className="container">
      <div className="home__works__cards">
        {last3Projects &&
          last3Projects.map((card) => (
            <Link to={card.link_url} key={card.id}>
              <div className="home__works__cards__card" key={card.id}>
                <img src={card.photo} />
                <div className="info">
                  <p className="heading">{card.company_name}</p>
                  {/* <p className="description">{card.description}</p> */}
                </div>
              </div>
            </Link>
          ))}
    </div>
    </div>
   );
}
 
export default LastThreeProjectCards;