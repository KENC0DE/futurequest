import React from 'react';
import ProductGrid from './Products';

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <ProductGrid />
      <a href="#" className="browse-all">Browse all products</a>
    </section>
  );
}

export default FeaturedProducts;
