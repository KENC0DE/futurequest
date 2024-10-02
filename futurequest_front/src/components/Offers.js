import React from "react";
import api from "../api";
import { getOffers } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const offerClick = (navigate) => {
  navigate("/offer-details");
};

const Offers = () => {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOffers()
      .then((response) => {
        setOffers(response.data);
        console.log(offers);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setError("Failed to fetch Offers. Please try again later.");
      });
  }, []);

  return (
    <div className="work-education">
      <div className="product-grid-container">
        <h3 className="education-header">Education</h3>
        <div className="product-grid">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="product-card"
              onClick={() => offerClick(navigate)}
            >
              {/* <div className="product-image">
                <img src={offers.image} alt={offers.name} />
              </div> */}
              <div className="product-details">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="products-separator">
        <div className="products-line"></div>
      </div>
      <div className="product-grid-container">
        <h3 className="work-header">Work</h3>
        <div className="product-grid">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="product-card"
              onClick={() => offerClick(navigate)}
            >
              {/* <div className="product-image">
                <img src={offer.image} alt={offer.name} />
              </div> */}
              <div className="product-details">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
