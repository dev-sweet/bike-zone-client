import React from 'react';
import Banner from '../Banner/Banner';
import BikeEquipment from '../BikeEquipment/BikeEquipment';
import Header from '../../../components/Header/Header';
import Products from '../Products/Products';
import TitaniumBikes from '../TitaniumBikes/TitaniumBikes';
import Blog from '../Blog/Blog';
import Footer from '../../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BikeEquipment />
      <Products />
      <TitaniumBikes />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
