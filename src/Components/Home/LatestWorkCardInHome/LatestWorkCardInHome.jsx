import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./LatestWorkCardInHome.scss";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LatestWorkCardInHome = ({
  latestWorkCardInHome,
  latestWork,
  isProjectPage,


}) => {



  const [search, setSearch] = useState("");

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

  // const filteredLastWorks = lastWork
  //   ? lastWork.filter(
  //       (work) => work.company_name.toLowerCase().includes(search.toLowerCase())) :[]
  // ||
  //   work.service_details.title.toLowerCase().includes(search.toLowerCase())): [];

  // const filteredWorks = latestWorkCardInHome ? latestWorkCardInHome.filter(
  //   (work) => work.title.toLowerCase().includes(search.toLowerCase()) ||
  //           work.service_details.map((card) => (card.title.toLowerCase().includes(search.toLocaleLowerCase())
  //           ))):[]
  //           console.log(filteredWorks)

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
  <div className="container">
      {isProjectPage && isModalOpen && (
        <div className="overlay" onClick={openModal} />
      )}
      {isProjectPage && (
        <div className="modal-section">
          <div className="kateqoriya" onClick={openModal}>
            <BiCategory className="category-icon" />
            <p>Kateqoriya seçin</p>
          </div>

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

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="home__works__cards"
      >
        {LatestWorkCardInHome &&
          latestWorkCardInHome.map((card) => (
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
      </motion.div>
    </div>
  );
};

export default LatestWorkCardInHome;