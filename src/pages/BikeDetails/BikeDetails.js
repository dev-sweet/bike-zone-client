import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BsChevronRight } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineStar,
  AiFillStar,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './BikeDetaills.css';
import Rating from 'react-rating';
import trust from '../../images/trust_image.png';

const BikeDetails = () => {
  const [bikeDetails, setBikeDetails] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();
  const id = params.id;
  const {
    name,
    price,
    images,
    sku,
    vendor,
    availability,
    categories,
    tags,
    desctiption,
    features,
    details,
    reviews,
  } = bikeDetails;
  console.log(bikeDetails);
  useEffect(() => {
    fetch(`http://localhost:5000/bikes/${id}`)
      .then((res) => res.json())
      .then((data) => setBikeDetails(data));
  }, []);
  return (
    <>
      <Header />
      <div className="bike-detals">
        <div className="sub-header">
          <Link to="/">
            Home <BsChevronRight />
          </Link>
          <Link to="/bikes">
            Bikes <BsChevronRight />
          </Link>
          <span>{name}</span>
        </div>
        <div className="details py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="gallery-images">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {images?.map((img) => (
                      <SwiperSlide>
                        <img src={img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {images?.map((img) => (
                      <SwiperSlide>
                        <img src={img} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="bike-info pt-4 pt-lg-0">
                  <h3 className="bike-name">{name}</h3>
                  <h4 className="price">${price}</h4>
                  <div className="rating my-2">
                    <Rating
                      readonly
                      emptySymbol={<AiOutlineStar />}
                      fullSymbol={<AiFillStar />}
                      initialRating={reviews?.point}
                    />
                    <span className="reviews-count">
                      ({reviews?.person} reviews)
                    </span>
                  </div>
                  <p>{desctiption}</p>
                  <div className="cart-and-buy">
                    <div className="add-to-cart">
                      <div className="cart-quantity">
                        <button>
                          <AiOutlineMinus />
                        </button>
                        <input type="text" value="1" />
                        <button>
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button className="cart-button">ADD TO CART</button>
                    </div>
                    <button className="buy-button mt-3">BUY IT NOW</button>
                  </div>
                  <div className="trust-img py-3">
                    <img src={trust} alt="" />
                  </div>
                  <div className="info">
                    <p>
                      <strong>SKU:</strong> <span>{sku}</span>
                    </p>
                    <p>
                      <strong>Vendor:</strong> <span>{vendor}</span>
                    </p>
                    <p>
                      <strong>Availability:</strong> <span>{availability}</span>
                    </p>
                    <p className="categories">
                      <strong>Categories:</strong> <span>{categories}</span>
                    </p>
                    <p className="tags">
                      <strong>Tags:</strong> <span>{tags}</span>
                    </p>
                  </div>
                  <div className="icons">
                    <span>
                      <Link className="facebook" to="/">
                        <ImFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link className="twitter" to="/">
                        <AiOutlineTwitter />
                      </Link>
                    </span>
                    <span>
                      <Link className="insta" to="/">
                        <FiInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link className="linkedin" to="/">
                        <FaLinkedinIn />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description pb-5">
          <div className="container">
            <h2 className="text-center mb-4">Description</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="features">
                  <h3>Features</h3>
                  <p>{features}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="details">
                  <h3>Details</h3>
                  <ul>
                    {details && details.map((detail) => <li>{detail}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="images pb-5">
          <div className="container">
            <div className="row g-5">
              {images &&
                images.map((img) => (
                  <div className="col-md-4">
                    <img className="w-100" src={img} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BikeDetails;
