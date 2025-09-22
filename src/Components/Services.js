import React from 'react'
import './App.css'

function Services() {
  return (
    <div>
        <section id="services">
          <div id="service-intro">
            <h2>We Provide Best 💼<br/>Customer Experience</h2>
            <p>|| we ensure that our customer have the best shopping experience</p>
          </div>
          <div className="service-msg-container">
            <div className="service-msg">
              <img src="/images/Heart-image.png" alt=""/>
                <h4>Satisfaction Guarantee</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur maiores minus, itaque soluta aspernatur.</p>
            </div>
            <div className="service-msg">
              <img src="/images/Heart-image.png" alt=""/>
                <h4>New Arrival Everyday</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur maiores minus, itaque soluta aspernatur.</p>
            </div>
            <div className="service-msg">
              <img src="/images/Heart-image.png" alt=""/>
                <h4>Fast & Free Shipping</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequuntur maiores minus, itaque soluta aspernatur.</p>
            </div>
          </div>
        </section>
        <hr/><br/>
    </div>
  )
}

export default Services