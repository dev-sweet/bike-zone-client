import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const TitaniumBikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch('./titaniumBikes.json')
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <div className="pt-3 pt-4">
      <div className="container">
        <h2 className="text-center pb-2">Titanium Bikes</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          //   pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {bikes.map((bike) => (
            <SwiperSlide key={bike.id}>
              <div className="text-center">
                <img className="w-75 w-md-50" src={bike.img} alt={bike.name} />
                <h2 className="mt-3">{bike.name}</h2>
                <h5>${bike.price}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TitaniumBikes;
