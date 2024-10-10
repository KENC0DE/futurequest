import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOfferDetails } from "../api";
import { Link } from "react-router-dom";
import { useOffers } from "../OffersContext";

const OfferDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [OfferDetails, setOfferDetails] = useState();
  const navigate = useNavigate();
  const { setSelectedOfferId } = useOffers();

  const handleApplyClick = () => {
    setSelectedOfferId(id);
    navigate("/apply");
  };

  useEffect(() => {
    getOfferDetails(id)
      .then((response) => {
        setOfferDetails(response.data);
        console.log(response.data);
        console.log(id);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setError("Failed to fetch Offers. Please try again later.");
      });
  }, [id]);

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 h-screen">
      {OfferDetails ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 relative">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Title: {OfferDetails.title}
            </h4>
          </div>
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-700 mb-1">
              Description
            </h5>
            <p className="text-gray-600">{OfferDetails.description}</p>
          </div>
          <div className="reqs">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {OfferDetails.requirements ? (
                OfferDetails.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))
              ) : (
                <li>No specific requirements listed.</li>
              )}
            </ul>
          </div>
          <button
            className="absolute right-4 bottom-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleApplyClick}
          >
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OfferDetails;
