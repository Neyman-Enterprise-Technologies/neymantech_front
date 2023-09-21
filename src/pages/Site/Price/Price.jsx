import React, { useState } from "react";
import { useEffect } from "react";
import "./Price.scss";
import Loading from "../../../Components/Loading/Loading";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {TiTick} from "react-icons/ti"

export default function Price() {
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
        <div className="container">
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
         
              <div className="cardsContainer__card">
                <h2 className="cardsContainer__cardHeader">Basic</h2>
                <p className="cardsContainer__price">39.99</p>
                <div className="cardsContainer__devider"></div>
               <div className="cardsContainer__cardContentContainer">
               <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">1 Projects</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Email Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Phone Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Article Promotion</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Editorial Services</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Profile Management</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
               </div>
               <div className="cardsContainer__devider"></div>
               <button>get Started</button>
              </div>
              <div className="cardsContainer__card">
                <h2 className="cardsContainer__cardHeader secondHeader">Starter</h2>
                <p className="cardsContainer__price">39.99</p>
                <div className="cardsContainer__devider"></div>
               <div className="cardsContainer__cardContentContainer">
               <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">1 Projects</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Email Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Phone Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Article Promotion</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Editorial Services</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Profile Management</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
               </div>
                
              
            
              </div>
              <div className="cardsContainer__card">
                <h2 className="cardsContainer__cardHeader thirdHeader">Extended</h2>
                <p className="cardsContainer__price">39.99</p>
                <div className="cardsContainer__devider"></div>
               <div className="cardsContainer__cardContentContainer">
               <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">1 Projects</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Email Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Phone Support</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Article Promotion</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Editorial Services</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
                <div className="cardsContainer__itemsContainer">
                  <p className="cardsContainer__items">Profile Management</p>
                  <TiTick className="cardsContainer__tick-icon"/>
                </div>
               </div>
              
               
              </div>
        
          </div>
        
          {/*  cards container end */}
        </div>
      )}
    </>
  );
}
