import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEducation, getOffers } from "../api";
import { useOffers } from "../OffersContext";

const offerClick = (navigate, id) => {
  navigate(`/offer-details/${id}/`);
};

const Education = () => {
  const navigate = useNavigate();
  const { params } = useOffers();
  const [error, setError] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers(params)
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setError("Failed to fetch Offers. Please try again later.");
      });
  }, [params]);

  return (
    <div className="w-full m-auto md:mt-2 bg-gray-100 box-content h-screen">
      <h3 className="text-center text-[#fe9920] text-2xl font-bold mb-4">
        Education
      </h3>
      <div className="flex justify-center md:w-3/4 m-auto rounded-[20px] gap-10 py-2.5 px-2 flex-wrap bg-gray-800">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-red-800 rounded p-4 max-w-[250px] shadow-md text-center transition-transform duration-300 ease-in-out relative hover:-translate-y-1.5 cursor-pointer"
              onClick={() => offerClick(navigate, offer.id)}
            >
              {/* Uncomment the below lines if image is available */}
              {/* <div className="mb-4">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-40 object-cover rounded-md bg-gray-100"
                  />
                </div> */}
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-2 uppercase">
                  {offer.title}
                </h3>
                <p className="text-base">{offer.description}</p>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-white">No Education Offer In This Category</h3>
        )}
      </div>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
};

export default Education;
