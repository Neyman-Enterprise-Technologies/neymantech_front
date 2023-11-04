import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import PriceCard from "../../../Components/PriceCard/PriceCard";
import UseFetch from "../../../UseFetch";
import { motion } from "framer-motion"
import "./Price.scss";

export default function Price() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data: priceCards } = UseFetch(`${apiUrl}service_api/package/`);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div  initial={{ opacity: 0 }}
        transition={{duration:0.5}}
        whileInView={{ opacity: 1 }}>
          {/*       headerLink start */}
          <div className="priceHeader">
            <div className="container">
              <div className="priceTitle">
                <h2>
                  Pri<span>c</span>ing
                </h2>
              </div>
            </div>
            <div className="priceLinks">
              <Link to="/home" className="priceLink">
                Home
              </Link>
              <FaAngleRight className="angleIcon" />
              <Link to="about">Pricing</Link>
            </div>
          </div>
          {/*      headerLink end */}

          {/*    header start */}
          <div className="header">
            <h2>Choose your best plan</h2>
            <p>
              Real innovations and a positive customer experience are the heart
              of successful communication. No fake products and services.
            </p>
          </div>
          {/*    header end*/}

          <div className="cardsContainer">
            {priceCards &&
              priceCards.map((card) => (
                <PriceCard
                  title={card.package_name}
                  price={card.price}
                  period={card.price_period}
                  serviceItems={card.property_name}
                  color={card.color}
                  property={card.package_properties}
                  symbol={card.symbol}
                  key={card.id}
                />
              ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
