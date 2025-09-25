import React from 'react'
import './App.css'

function Services() {
  return (
    <div>
      <section id="services">
        <div id="service-intro">
          <h2>We Provide Best 💼<br />Customer Experience</h2>
          <p>|| we ensure that our customer have the best shopping experience</p>
        </div>
        <div className="service-msg-container">
          <div className="service-msg">
            <img src="./images/services-images/Heart-image.png" alt="" />
            <h4>Satisfaction Guarantee</h4>
            <p>We offer 100% Satisfaction Guarantee – if you’re not happy with your purchase, we’ll make it right. Shop with confidence, your happiness is our priority.</p>
          </div>
          <div className="service-msg">
            <img src="./images/services-images/Heart-image.png" alt="" />
            <h4>New Arrival Everyday</h4>
            <p>Discover New Arrivals Every Day – fresh styles and latest trends just for you! Stay trendy with our New Arrivals – updated daily to keep your style fresh!</p>
          </div>
          <div className="service-msg">
            <img src="./images/services-images/Heart-image.png" alt="" />
            <h4>Fast & Free Shipping</h4>
            <p>Get your favorites delivered quickly with our Fast & Free Shipping.
              Shop hassle-free and enjoy seamless doorstep delivery. Enhance your shipping facilities.</p>
          </div>
        </div>
      </section>
      <hr /><br />
    </div>
  )
}

export default Services