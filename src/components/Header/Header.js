import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
import { BiLogInCircle } from 'react-icons/bi';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { loadFromLocalStorage } from '../../redux/actions/cartAction';
import { Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Header.css';
import { loadFavoritesFromLocalStorage } from '../../redux/actions/favoriteAction';

const Header = () => {
  const [show, setShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);
  const handleRegisterClose = () => setRegisterShow(false);

  // sum total cart items
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  let totalCartItems = 0;
  cartItems?.map((item) => (totalCartItems += item.qty));

  // total favorite items
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;
  const totalFavoriteItems = favoriteItems?.length || 0;

  // handle register toggler
  const handleRegister = () => {
    setLoginShow(false);
    setRegisterShow(true);
  };

  // handle login toggler
  const handleLogin = () => {
    setLoginShow(true);
    setRegisterShow(false);
  };

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadFavoritesFromLocalStorage());
  }, [dispatch]);

  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button onClick={handleShow} className="menu-bar d-block d-lg-none">
            <HiMenuAlt1 />
          </button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img style={{ width: '100px' }} src={logo} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <ul className="navbar-nav navbar-small">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bikes">
                    Bikes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/buy">
                    Buy
                  </NavLink>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bikes">
                  Bikes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/buy">
                  Buy
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="navbar-icons">
            {/* <li className="navbar-icon user">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">Favorites</Tooltip>}
              >
                <span title="Accounts" className="user">
                  <AiOutlineUser />
                </span>
              </OverlayTrigger>
            </li> */}
            <li className="navbar-icon favorites">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">Favorites</Tooltip>}
              >
                <NavLink to="/favorites">
                  <BsSuitHeart />
                  <span>{totalFavoriteItems}</span>
                </NavLink>
              </OverlayTrigger>
            </li>
            <li className="navbar-icon cart">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">Cart</Tooltip>}
              >
                <NavLink to="/cart">
                  <AiOutlineShoppingCart />
                  <span>{totalCartItems}</span>
                </NavLink>
              </OverlayTrigger>
            </li>
            <li className="navbar-icon" onClick={handleLoginShow}>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id="tooltip-top">Login</Tooltip>}
              >
                <span>
                  <BiLogInCircle />
                </span>
              </OverlayTrigger>
            </li>
          </ul>
          {/* offcanvas for login */}
          <div className="login-and-register">
            <Offcanvas
              placement="end"
              show={loginShow}
              onHide={handleLoginClose}
            >
              <Offcanvas.Header closeButton>
                <h2>LOGIN</h2>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="login-and-register-form">
                  <form>
                    <div className="login-inputs">
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>
                      <br />
                      <input type="email" name="email" />
                    </div>
                    <div className="login-inputs">
                      <label htmlFor="password">
                        Password <span>*</span>
                      </label>
                      <br />
                      <input type="password" name="password" />
                    </div>
                    <div className="login-inputs">
                      <button className="login-or-register-btn" type="submit">
                        SIGN IN
                      </button>
                    </div>
                  </form>
                  <p className="divider-or">Or</p>
                  <button className="login-or-register-btn direct-login">
                    <span className="login-icon">
                      <FcGoogle />
                    </span>{' '}
                    Continue with google
                  </button>

                  <p className="mt-3">
                    New customer ?{' '}
                    <span className="toggle-link" onClick={handleRegister}>
                      Create your account
                    </span>
                  </p>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            {/* offcanvas for register */}
            <Offcanvas
              placement="end"
              show={registerShow}
              onHide={handleRegisterClose}
            >
              <Offcanvas.Header closeButton>
                <h2>REGISTER</h2>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="login-and-register-form">
                  <form>
                    <div className="login-inputs">
                      <label htmlFor="fistName">
                        First Name <span>*</span>
                      </label>
                      <br />
                      <input type="text" name="fistName" />
                    </div>
                    <div className="login-inputs">
                      <label htmlFor="lastName">
                        Last Name <span>*</span>
                      </label>
                      <br />
                      <input type="text" name="lastName" />
                    </div>
                    <div className="login-inputs">
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>
                      <br />
                      <input type="email" name="email" />
                    </div>
                    <div className="login-inputs">
                      <label htmlFor="password">
                        Password <span>*</span>
                      </label>
                      <br />
                      <input type="password" name="password" />
                    </div>
                    <div className="login-inputs">
                      <button className="login-or-register-btn" type="submit">
                        REGISTER
                      </button>
                    </div>
                  </form>

                  <p className="mt-3">
                    Already have an account ?{' '}
                    <span className="toggle-link" onClick={handleLogin}>
                      Login here
                    </span>
                  </p>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
