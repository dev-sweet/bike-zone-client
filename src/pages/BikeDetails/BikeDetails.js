import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
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
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { getProduct } from '../../redux/actions/productAction';

const BikeDetails = () => {
  // set product quantity
  const [quantity, setQuantity] = useState(1);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  // load product details
  const productDetails = useSelector((state) => state.getProduct);
  const { product, loading } = productDetails;

  // destructure all product details properties
  const {
    _id,
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
  } = product;

  // handle product quantity
  const handleQuantity = (e) => {
    const value = parseInt(e.target.value);
    if (value > 1 && value <= 5) {
      setQuantity(value);
    }
  };

  // handle product quantity increment
  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  // handle product quantity increment
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // add to cart
  const addToCartHandler = () => {
    dispatch(addToCart(_id, quantity));
  };

  // load all product
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return loading ? (
    <Spinner />
  ) : (
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
                      <SwiperSlide key={`${img}-1`}>
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
                    freeMode={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    // modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {images?.map((img) => (
                      <SwiperSlide key={img}>
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
                        <button onClick={handleDecrement}>
                          <AiOutlineMinus />
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          onChange={handleQuantity}
                        />
                        <button onClick={handleIncrement}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button
                        className="cart-button"
                        onClick={addToCartHandler}
                      >
                        ADD TO CART
                      </button>
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
