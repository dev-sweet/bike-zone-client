import React from 'react';
import './BikeEquipment.css';
import banner1 from '../../../images/banner-bike1.jpg';
import banner2 from '../../../images/bike-banner-2.jpg';
import banner3 from '../../../images/bike-banner-3.jpg';
import { NavLink } from 'react-bootstrap';
const BikeEquipment = () => {
  return (
    <div id="bike-equipment">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 col-12">
            <div className="narrowest">
              <div className="narrowest-img">
                <img src={banner1} alt="" />
              </div>
              <div className="narrowest-bike">
                <h3>The narrowest bike</h3>
                <h4>Sale of 50%</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="composent-and-equipment">
              <div className="composent">
                <div className="composent-img">
                  <img src={banner2} alt="" />
                </div>
                <div className="composent-content">
                  <h3>Composents</h3>
                  <h4>Sale of 50%</h4>
                </div>
              </div>
              <div className="equipment">
                <div className="equipment-img">
                  <img src={banner3} alt="" />
                </div>
                <div className="equipment-content">
                  <h3>
                    Bike Equipment <br /> & Accessories
                  </h3>
                  <NavLink path="/">Shop Now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeEquipment;
