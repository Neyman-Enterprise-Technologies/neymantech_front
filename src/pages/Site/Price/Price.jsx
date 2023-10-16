import React, { useState } from "react";
import { useEffect } from "react";
import "./Price.scss";
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import UseFetch from "../../../UseFetch";
import PriceCard from "../../../Components/PriceCard/PriceCard";

export default function Price({ title }) {

 


  const apiUrl = import.meta.env.VITE_API_URL;
  // const { data: priceCards } = UseFetch(`${apiUrl}priceCards`);
  const { data: priceCards } = UseFetch(`${apiUrl}service_api/package/`);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <>
    {loading ? (
      <Loading />
      ) : (
        <>
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

          {/*  cards container start */}

          <div className="cardsContainer">
            {priceCards &&
              priceCards.map((card) => (
                <PriceCard
                  title={card.package_name}
                  price={card.price}
                  period={card.price_period}
                  serviceItems={card.serviceItems}
                  color="orange"
                  // color={card.color}
                   
              
                  key={card.id}
                />
              ))}
          </div>

          {/*  cards container end */}
        
      </>
      )}
    </>
  );
}
