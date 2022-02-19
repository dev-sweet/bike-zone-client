import React from 'react';
import Banner from '../Banner/Banner';
import BikeEquipment from '../BikeEquipment/BikeEquipment';
import Header from '../../../components/Header/Header';
import Products from '../Products/Products';
import TitaniumBikes from '../TitaniumBikes/TitaniumBikes';
import Blog from '../Blog/Blog';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BikeEquipment />
      <Products />
      <TitaniumBikes />
      <Blog />
    </>
  );
};

export default Home;
