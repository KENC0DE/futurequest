import React from 'react';

const products = [
  {
    id: 1,
    name: 'PARALLELOGRAM T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt',
  },
  {
    id: 2,
    name: '30 FPS T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=30+FPS+T-Shirt',
  },
  {
    id: 3,
    name: 'HISTOGRAM T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Histogram+T-Shirt',
  },
  {
    id: 4,
    name: 'KEYBOARD T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Keyboard+T-Shirt',
  },
  {
    id: 1,
    name: 'PARALLELOGRAM T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Parallelogram+T-Shirt',
  },
  {
    id: 2,
    name: '30 FPS T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=30+FPS+T-Shirt',
  },
  {
    id: 3,
    name: 'HISTOGRAM T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Histogram+T-Shirt',
  },
  {
    id: 4,
    name: 'KEYBOARD T-SHIRT',
    price: '$29.00',
    image: 'https://via.placeholder.com/400x400?text=Keyboard+T-Shirt',
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
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
  );
};

export default ProductGrid;
