const OfferDetails = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Title</h4>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-gray-700 mb-1">
            Description
          </h5>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            fugiat.
          </p>
        </div>
        <div className="reqs">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Requirements
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
