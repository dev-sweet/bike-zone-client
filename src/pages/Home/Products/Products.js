import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/bikes')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-5" id="total-products">
      <div className="container">
        <h2
          className="text-center"
          style={{ fontWeight: '600', color: '#4b4b4b' }}
        >
          Our Products
        </h2>
        <div className="products pt-4">
          <div className="row g-4 g-md-3">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
