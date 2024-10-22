import React from "react";
import "./Home.css";
import {
  FaLocationArrow,
  FaCalendarAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import visa from "../../Assets/visa.png";
import masterCardIcon from "../../Assets/master.png";
import img3 from "../../Assets/fruitJuice.jfif";
import img1 from "../../Assets/hummus.jfif";
import img2 from "../../Assets/salad.jfif";
import img4 from "../../Assets/spoon.png";
import imge1 from "../../Assets/review1.jfif";
import imge2 from "../../Assets/review2.jfif";
import imge3 from "../../Assets/review3.jfif";
import imge4 from "../../Assets/review4.jfif";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="left-content">
        <h1>
          Book <span className="highlight">O16 Labs</span> for your Dinner{" "}
          <span className="highlight">Party</span>
        </h1>
        <p className="sub-text">
          We're providing the best Chef booking platform. Choose a menu and book
          your Chef instantly.
        </p>

        <form className="booking-form">
          <div className="form-group">
            <FaLocationArrow className="icon" />
            <select>
              <option>Select region</option>
              <option>Al Shamal</option>
            </select>
          </div>
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input type="text" placeholder="15 Jan - 20 Jan 2022" />
          </div>
          <div className="form-group">
            <FaUsers className="icon" />
            <input type="text" placeholder="5" />
          </div>
          <button className="arrow-button">&gt;</button>
        </form>
        <div className="row">
          <div className="customer-section">
            <div className="customers">
              <img src={imge1} alt="Customer 1" />
              <img src={imge2} alt="Customer 2" />
              <img src={imge3} alt="Customer 3" />
              <img src={imge4} alt="Customer 4" />
            </div>
            <div className="review-text">
              <span className="star-rating">
                <FaStar className="star-icon" /> 4.7
              </span>
              <p>(8.2K Review)</p>
            </div>
          </div>

          <div className="payment-icons">
            <p>We accept</p>
            <img src={visa} alt="Visa" />
            <img src={masterCardIcon} alt="MasterCard" />
          </div>
        </div>
      </div>

      <div className="right-images">
        <img src={img1} alt="Food Item 1" className="food-image food-image1" />
        <img src={img2} alt="Food Item 2" className="food-image food-image2" />
        <img src={img3} alt="Food Item 3" className="food-image food-image3" />
        <img src={img4} alt="Food Item 3" className="food-image food-image4" />
      </div>
    </section>
  );
};

export default Home;
