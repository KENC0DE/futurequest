import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOfferDetails } from "../api";
import { Link } from "react-router-dom";
import { useOffers } from "../OffersContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const OfferDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [OfferDetails, setOfferDetails] = useState();
  const navigate = useNavigate();
  const { setSelectedOfferId } = useOffers();

  const handleApplyClick = () => {
    const state = { OfferDetails };
    localStorage.setItem("intendedDestination", `/apply?offerId=${id}`);
    localStorage.setItem("intendedDestinationState", JSON.stringify(state));
    navigate(`/apply?offerId=${id}`, { state });
  };

  useEffect(() => {
    getOfferDetails(id)
      .then((response) => {
        setOfferDetails(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch Offers. Please try again later.");
      });
  }, [id]);

  return (
    <div className="bg-gray-100 dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      {OfferDetails ? (
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6 relative">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Title: {OfferDetails.title}
            </h4>
          </div>
          <div className="mb-6">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white mb-1">
              Description
            </h5>
            <div className="text-gray-600 dark:text-white">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {OfferDetails.description}
              </ReactMarkdown>
            </div>
          </div>
          <div className="reqs">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
              Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-2 dark:text-white">
              {OfferDetails.require_personal_info && (
                <li>Personal Information</li>
              )}
              {OfferDetails.require_contact_info && (
                <li>Contact Information</li>
              )}
              {OfferDetails.require_educational_background && (
                <li>Educational Background</li>
              )}
              {OfferDetails.require_recommenders && <li>Recommenders</li>}
              {OfferDetails.require_personal_statements && (
                <li>Personal Statements</li>
              )}
              {OfferDetails.require_documents && <li>Documents</li>}
            </ul>
          </div>
          <button
            className="absolute right-4 bottom-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700"
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
