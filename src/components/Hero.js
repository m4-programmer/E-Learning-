import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Hero extends Component {
  render() {
    return (
     <div>
  <section id="home" className="hero-area style1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero-content wow fadeInLeft" data-wow-delay=".3s">
            <h1>Become a  Developer today</h1>
            <p>We groom novice with 0% knowledge of programming to become 
              experts in programming in the shortest possible time.</p>
            <div className="button mt-3">
              <Link to="register" type="submit" className="btn">Register Now</Link>
            </div>
                  <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                    className="glightbox video-button" target='blank'><i className="lni lni-play" /><span className="text">Watch our
                intro video.</span></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
            <img src="assets/images/hero/hero-image.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}
