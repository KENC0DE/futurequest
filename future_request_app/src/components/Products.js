import React from "react";

const WorkProducts = [
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  {
    id: 2,
    name: "30 FPS T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=30+FPS+T-Shirt",
  },
  {
    id: 3,
    name: "HISTOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Histogram+T-Shirt",
  },
  {
    id: 4,
    name: "KEYBOARD T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Keyboard+T-Shirt",
  },
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  {
    id: 2,
    name: "30 FPS T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=30+FPS+T-Shirt",
  },
  {
    id: 3,
    name: "HISTOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Histogram+T-Shirt",
  },
  {
    id: 4,
    name: "KEYBOARD T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Keyboard+T-Shirt",
  },
];

const EducationProducts = [
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  {
    id: 2,
    name: "30 FPS T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=30+FPS+T-Shirt",
  },
  {
    id: 3,
    name: "HISTOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Histogram+T-Shirt",
  },
  {
    id: 4,
    name: "KEYBOARD T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Keyboard+T-Shirt",
  },
  {
    id: 1,
    name: "PARALLELOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt",
  },
  {
    id: 2,
    name: "30 FPS T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=30+FPS+T-Shirt",
  },
  {
    id: 3,
    name: "HISTOGRAM T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Histogram+T-Shirt",
  },
  {
    id: 4,
    name: "KEYBOARD T-SHIRT",
    price: "$29.00",
    image: "https://via.placeholder.com/400x400?text=Keyboard+T-Shirt",
  },
];

const ProductGrid = () => {
  return (
    <div className="work-education">
      <div className="product-grid-container">
        <h3 className="education-header">Education</h3>
        <div className="product-grid">
          {EducationProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
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
          {WorkProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
