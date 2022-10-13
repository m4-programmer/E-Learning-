import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 const AppInfo = () => {
 
    return (
      <div>
  <section id="overview" className="app-info section">
    <div className="container">
      <div className="info-one">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            {/* Start Info Text */}
            <div className="info-text wow fadeInLeft" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
              <div className="main-icon">
                <i className="lni lni-inbox" />
              </div>
              <h2>
                Become  Certified
              </h2>
              <p>M4 Academy Has Already Helped Countless of People Around The World - Are You Next?
              </p>
              <div className="button">
                <Link to={'/register'} className="btn">Get Started</Link>
                
              </div>
            </div>
            {/* End Info Text */}
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="info-image wow fadeInRight" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight'}}>
              <img className="ss1" src="assets/images/certificate_homepage.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="info-one style2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
              <img className="ss1" src="assets/images/l2-content-img-1.png" alt="#" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            {/* Start Info Text */}
            <div className="info-text wow fadeInRight" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight'}}>
              <div className="main-icon">
                <i className="lni lni-layout" />
              </div>
              <h2>Don't Know Where to Start</h2>
              <p>Are you confuse on the course to take or study, take our free quiz and let us help you make the right choice.</p>
              <div className="button">
                      
                      <Link to={'#quiz'} className="btn">Take Free Quiz</Link>
              </div>
            </div>
            {/* End Info Text */}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  
}

export default AppInfo