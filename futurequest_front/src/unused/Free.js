import React from "react";
import { useNavigate } from "react-router-dom";

const WorkProducts = [
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  // ... other products
];

const EducationProducts = [
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  // ... other products
];

const offerClick = (navigate) => {
  navigate("/offer-details");
};

const Free = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-between m-auto p-4 max-w-7xl">
      {/* Education Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-center text-[#fe9920] text-2xl font-bold mb-6">
          Education
        </h3>
        <div className="flex justify-center rounded-2xl gap-8 py-4 px-2 flex-wrap bg-gray-100">
          {EducationProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 w-60 shadow-md text-center transition-transform duration-300 ease-in-out relative border border-gray-200 hover:-translate-y-2 cursor-pointer"
              onClick={() => offerClick(navigate)}
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md bg-gray-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                  {product.name}
                </h3>
                <p className="text-base text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="hidden md:flex items-center mx-4">
        <div className="w-0.5 h-80 bg-gray-400"></div>
      </div>

      {/* Work Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h3 className="text-center text-[#fe9920] text-2xl font-bold mb-6">
          Work
        </h3>
        <div className="flex justify-center rounded-2xl gap-8 py-4 px-2 flex-wrap bg-gray-100">
          {WorkProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 w-60 shadow-md text-center transition-transform duration-300 ease-in-out relative border border-gray-200 hover:-translate-y-2 cursor-pointer"
              onClick={() => offerClick(navigate)}
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md bg-gray-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                  {product.name}
                </h3>
                <p className="text-base text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Free;
