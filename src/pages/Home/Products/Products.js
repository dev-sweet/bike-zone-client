import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product/Product';
import { getProducts as listProducts } from '../../../redux/actions/productAction';
import Spinner from '../../../components/Spinner/Spinner';
const Products = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading } = getProducts;

  // const
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return loading ? (
    <Spinner />
  ) : (
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
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
