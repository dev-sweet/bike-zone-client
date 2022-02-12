import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper';
const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="banner1">
            <div className="container">
              <div className="banner-content">
                <h6>BIKE COLLECTIONS</h6>
                <h1>
                  New Bike <br />
                  From Bike Zone
                </h1>
                <button className="banner-btn mt-4">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner2">
            <div className="container">
              <div className="banner-content text-end">
                <h6>BIKE ZONE</h6>
                <h1>
                  We Are <br />
                  The Bike Shop
                </h1>
                <button className="banner-btn mt-4">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner3">
            <div className="container">
              <div className="banner-content">
                <h6>BIKE COLLECTIONS</h6>
                <h1>
                  Looking for
                  <br />
                  The Best Price
                </h1>
                <button className="banner-btn mt-4">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
