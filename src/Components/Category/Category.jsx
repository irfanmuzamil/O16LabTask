import React from "react";
import "./Category.css";
import exploreFood from "../../Assets/explore.jfif";
import masterChef from "../../Assets/masterChef.jfif";
import desserts from "../../Assets/dessert.jfif";
import events from "../../Assets/events.jfif";
import birthdays from "../../Assets/birthdays.jfif";

const Category = () => {
  return (
    <div id="book" className="categories">
      <h2 className="section-title">
        Browse by <span>Categories</span>
      </h2>
      <div className="container">
        <div className="categories-layout">
          <div className="explore-food">
            <img src={exploreFood} alt="Explore Food" />
            <div className="explore-overlay">Explore Food</div>
          </div>

          <div className="categories-grid">
            <div className="category-item">
              <img src={masterChef} alt="Master Chefs" />
              <div className="category-overlay">Master Chefs</div>
            </div>

            <div className="category-item">
              <img src={desserts} alt="Desserts" />
              <div className="category-overlay">Desserts</div>
            </div>

            <div className="category-item">
              <img src={events} alt="Events" />
              <div className="category-overlay">Events</div>
            </div>

            <div className="category-item">
              <img src={birthdays} alt="Birthdays" />
              <div className="category-overlay">Birthdays</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
