import React from 'react';
import ProductGrid from './Products';
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <ProductGrid />
      <Link to='/offers' className="browse-all">Browse all products</Link>
    </section>
  );
}

export default FeaturedProducts;
