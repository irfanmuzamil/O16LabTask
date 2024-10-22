import React, { useState } from "react";
import "./CustomerReviews.css";
import customer from "../../Assets/customer.jfif";

const testimonials = [
  {
    name: "William Smith",
    title: "Customer",
    review:
      "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا.",
    rating: 4.7,
    img: customer,
  },
  {
    name: "William Smith",
    title: "Customer",
    review:
      "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا.",
    rating: 4.7,
    img: customer,
  },
  {
    name: "William Smith",
    title: "Customer",
    review:
      "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا أحب خدماتهم وأستمتع بها. هذه أفضل منتجاتنا.",
    rating: 4.7,
    img: customer,
  },
];

const CustomerReviews = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="customer-reviews">
      <h2 className="section-title">
        What our <span>Customers</span> says
      </h2>

      <div className="testimonial-container">
        <button className="nav-btn left-btn" onClick={handlePrev}>
          &lt;
        </button>

        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === current ? "active" : ""
              }`}
              style={{ transform: `translateX(${(index - current) * 100}%)` }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <h3>{testimonial.name}</h3>
              <p className="customer-title">{testimonial.title}</p>
              <p className="customer-review">{testimonial.review}</p>
              <div className="customer-rating">
                <span>⭐ {testimonial.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
