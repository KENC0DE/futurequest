import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOffers } from "../api";
import { useOffers } from "../OffersContext";
import { FaGraduationCap, FaGlobe } from "react-icons/fa";
import Footer from "./Footer";

const offerClick = (navigate, id) => {
  navigate(`/offer-details/${id}/`);
};

const Education = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setParams } = useOffers();
  const [error, setError] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type") || "EDUCATION";
    const isPaid = queryParams.get("is_paid");

    setParams({ type, is_paid: isPaid });

    getOffers({ type, is_paid: isPaid })
      .then((response) => {
        setOffers(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch Offers. Please try again later.");
      });
  }, [location.search, setParams]);

  return (
    <div className="h-full relative">
      <div className="w-full m-auto md:mt-2 bg-gray-100 dark:bg-gray-900 box-content min-h-screen">
        <h3 className="text-center text-[#fe9920] dark:text-[#fe9920] text-2xl font-bold mb-4">
          Education
        </h3>
        <div className="flex justify-center md:w-3/4 m-auto rounded-[20px] gap-10 py-2.5 px-2 flex-wrap bg-gray-100 dark:bg-gray-900">
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-orange-600 dark:bg-orange-700 rounded p-4 max-w-[250px] shadow-md text-center transition-transform duration-300 ease-in-out relative hover:-translate-y-1.5 cursor-pointer"
                onClick={() => offerClick(navigate, offer.id)}
              >
                <div className="mb-4 p-2">
                  {offer.image ? (
                    <img
                      src={offer.image}
                      alt="Offer"
                      className="w-full min-w-36 h-40 object-cover rounded-md bg-white dark:bg-gray-700"
                    />
                  ) : (
                    <FaGraduationCap className="w-full min-w-36 h-40 object-cover rounded-md bg-white dark:bg-gray-700 text-green-600 p-3" />
                  )}
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2 uppercase">
                    {offer.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {offer.ed_level && (
                      <div className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full py-1 px-2 shadow-md">
                        <FaGraduationCap className="mr-2 text-blue-500" />
                        <span className="font-semibold">{offer.ed_level}</span>
                      </div>
                    )}
                    {offer.country && (
                      <div className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full px-3 py-1 shadow-md">
                        <FaGlobe className="mr-2 text-green-500" />
                        <span className="font-semibold">{offer.country}</span>
                      </div>
                    )}
                    <div className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full px-3 py-1 shadow-md">
                      <FaGlobe className="mr-2 text-green-500" />
                      <span className="font-semibold">
                        {offer.is_paid ? "PAID" : "FREE"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-red-600 dark:text-red-400">
              No Education Offer In This Category
            </h3>
          )}
        </div>
        {error && (
          <p className="text-red-500 dark:text-red-400 text-center mt-4">
            {error}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Education;
