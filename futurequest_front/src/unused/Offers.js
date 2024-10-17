import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOffers } from "../api";

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
    <div className="flex flex-col md:flex-row justify-between m-auto p-2.5 max-w-7xl">
      {/* Education Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-center text-[#fe9920] text-2xl font-bold mb-4">
          Education
        </h3>
        <div className="flex justify-center rounded-[20px] gap-10 py-2.5 px-2 flex-wrap bg-gray-100">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-5 max-w-[250px] shadow-md text-center transition-transform duration-300 ease-in-out relative border border-gray-200 hover:-translate-y-1.5 cursor-pointer"
              onClick={() => offerClick(navigate)}
            >
              {/* Uncomment the below lines if image is available */}
              {/* <div className="mb-4">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-40 object-cover rounded-md bg-gray-100"
                />
              </div> */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                  {offer.title}
                </h3>
                <p className="text-base text-gray-700">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="hidden md:flex items-center mx-4">
        <div className="w-0.5 h-64 bg-gray-400"></div>
      </div>

      {/* Work Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-center text-[#fe9920] text-2xl font-bold mb-4">
          Work
        </h3>
        <div className="flex justify-center rounded-[20px] gap-10 py-2.5 px-2 flex-wrap bg-gray-100">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-5 max-w-[250px] shadow-md text-center transition-transform duration-300 ease-in-out relative border border-gray-200 hover:-translate-y-1.5 cursor-pointer"
              onClick={() => offerClick(navigate)}
            >
              {/* Uncomment the below lines if image is available */}
              {/* <div className="mb-4">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-40 object-cover rounded-md bg-gray-100"
                />
              </div> */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                  {offer.title}
                </h3>
                <p className="text-base text-gray-700">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
