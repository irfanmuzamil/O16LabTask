import React from "react";
import "./AppDownload.css";
import mobileMockup from "../../Assets/mobMockup1.jfif";
import googlePlayIcon from "../../Assets/googleplay.png";
import appStoreIcon from "../../Assets/appstore.png";
import pizzaImage from "../../Assets/pizza.jfif";
import iceCreamImage from "../../Assets/icecream.jfif";

const AppDownload = () => {
  return (
    <section id="how-it-works" className="app-download-section">
      <div className="app-download-container">
        <div className="app-download-content">
          <img src={mobileMockup} alt="Mobile App" className="mobile-image" />
          <div className="app-download-info">
            <h2>Download our Mobile App</h2>
            <div className="app-download-buttons">
              <img
                src={googlePlayIcon}
                alt="Google Play"
                className="app-store-button"
              />
              <img
                src={appStoreIcon}
                alt="App Store"
                className="app-store-button"
              />
            </div>
          </div>
        </div>
        <img src={pizzaImage} alt="Pizza" className="food-item pizza-image" />
        <img
          src={iceCreamImage}
          alt="Ice Cream"
          className="food-item ice-cream-image"
        />
      </div>
    </section>
  );
};

export default AppDownload;
