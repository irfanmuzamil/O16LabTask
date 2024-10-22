import React from "react";
import "./PopularDishes.css";
import dish1 from "../../Assets/dish1.jfif";
import dish2 from "../../Assets/dish2.jfif";
import dish3 from "../../Assets/dish3.jfif";
import dish4 from "../../Assets/dish4.jfif";
import chef from "../../Assets/chef.jfif";

const PopularDishes = () => {
  const dishes = [
    {
      id: 1,
      image: dish1,
      title: "Menu Title Here",
      description: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chef: "Marriot Head Chef",
      rating: "4.5",
    },
    {
      id: 2,
      image: dish2,
      title: "Menu Title Here",
      description: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chef: "Marriot Head Chef",
      rating: "4.5",
    },
    {
      id: 3,
      image: dish3,
      title: "Menu Title Here",
      description: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chef: "Marriot Head Chef",
      rating: "4.5",
    },
    {
      id: 4,
      image: dish4,
      title: "Menu Title Here",
      description: "Pick 5 out of 10 dishes",
      price: "QAR 200",
      chef: "Marriot Head Chef",
      rating: "4.5",
    },
  ];

  return (
    <section id="our-chefs" className="popular-dishes">
      <div className="container">
        <div className="title-section">
          <h2>
            Our Most <span>Popular Dishes</span> This Month
          </h2>
          <button className="see-all-btn">See all</button>
        </div>

        <div className="dishes-scroll-wrapper">
          <div className="dishes-list">
            {dishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <img src={dish.image} alt={dish.title} className="dish-image" />
                <div className="dish-info">
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                  <h4>{dish.price}</h4>
                  <div className="chef-rating">
                    <img src={chef} alt={dish.chef} className="chef-image" />
                    <span>{dish.chef}</span>
                    <span className="rating">⭐ {dish.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
