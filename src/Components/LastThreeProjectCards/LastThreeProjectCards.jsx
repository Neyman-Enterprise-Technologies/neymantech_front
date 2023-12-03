import { useState } from "react";
import { BiCategory } from "react-icons/Bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LastThreeProjectCards = ({last3Projects,latestWork}) => {
// console.log(lastThree)
// console.log(lastThreeProjectCards)

const [isModalOpen, setIsModalOpen] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    
  };
  const handleClick = (title) => {
    setIsModalOpen(false);
    setSearch(title)
  };



  
  return ( 




    
    <div className="container">

{(
        <div className="modal-section">
          {/* <div className="kateqoriya" onClick={openModal}>
            <BiCategory className="category-icon" />
            <p>Kateqoriya seçin</p>
          </div> */}

          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="modal-wrapper"
            >
              <div className="modal">
                <ul className="modal-1">
                  <li
                  className="modal-all-prices"
                    onMouseEnter={() => handleMouseEnter("")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("")}
                  >
                    Bütun işlər
                    {/* <FaAngleRight className="modal-angle-icon" /> */}
                  </li>
                 {latestWork&&
                    latestWork.map((cards) =>(
                      <li
                      className="modal-1-li"
                      key={cards.id}
                      onMouseEnter={() => handleMouseEnter(cards.title)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(cards.title)}
                      // onClick={() => console.log(cards.title)}
                    >
                      {cards.title}

                      <FaAngleRight className="modal-angle-icon" />
                      {hoveredItem === cards.title && (
                        <ul className="modal-2">
                          {cards.service_details.map((card) => (
                            <li
                              key={card.id}
                              className="modal-2-li"
                              onClick={() => handleClick(card.title)}
                              // onClick={() => console.log(card.title)}
                              >
                              {card.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    )
                   
                       
                     
                    )}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      )}

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