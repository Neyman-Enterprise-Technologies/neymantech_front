import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./LatestWorkCardInHome.scss";
import { BiCategory } from "react-icons/Bi";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LatestWorkCardInHome = ({ latestWorkCardInHome, isProjectPage }) => {
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

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
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

  const handleClick = (title) => {
    setSearch(title);
    setIsModalOpen(false);
  };

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
            <div>
              <BiCategory className="category-icon"  />
            </div>
            <p>Kateqoriya seçin</p>
          </div>
          {/* <div className="input-search">
              <input
                type="text"
                placeholder="search"
                onChange={handleSearch}
                ref={inputRef}
              />
              <div>
                <CiSearch
                  className="category-search-icon"
                  // onClick={() => handleClick(card.services_property.services.title)}
                />
              </div>
            </div> */}

          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="modal-wrapper"
            >
              <div className="modal">
                <ul>
                  <li
                    onMouseEnter={() => handleMouseEnter("")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick("")}
                  >
                    All
                    <FaAngleRight className="modal-angle-icon" />
                  </li>
                  {latestWorkCardInHome.map((card) => (
                    <li
                      key={card.id}
                      onMouseEnter={() => handleMouseEnter(card.title)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(card.title)}
                    >
                      {card.title}

                      {/* <FaAngleRight className="modal-angle-icon" /> */}
                      {hoveredItem === card.title && (
                        <ul className="modal-2">
                          {card.service_details.map((i) => (
                            <li
                              key={i.id}
                              className="modal-2-li"
                              onClick={() => handleClick(i.title)}
                            >
                              {i.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
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
        {latestWorkCardInHome &&
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
