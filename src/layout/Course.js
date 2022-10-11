import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function Course() {
  return (
      <div>
        <BreadCrumb  title='Course Details' />
     {/* Start of Courses Area */}
<section className="portfolio-section section">
  <div id="container" className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h3 className="wow zoomIn" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn'}}>
            Latest Courses Series</h3>
          <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
            Our Latest courses</h2>
          <p className="wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>There are many resources on each track, which will help take you from a novice to an expert in months.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="portfolio-button-head">
          <div className="portfolio-btn-wrapper wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
            <button className="portfolio-btn active" data-filter="*">All</button>
            <button className="portfolio-btn" data-filter=".frontend">Front End</button>
            <button className="portfolio-btn" data-filter=".backend">Backend</button>
            <button className="portfolio-btn" data-filter=".software">Software</button>
            <button className="portfolio-btn" data-filter=".graphic">Graphic Design</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row grid">
      <div className="col-lg-4 col-md-6 grid-item frontend">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf1.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Front End Development</span>
              <h4><a href="course_details">HTML 5 CRASH COURSE</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 grid-item frontend">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf2.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Front End Development</span>
              <h4><a href="course_details">CSS 3 CRASH COURSE</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 grid-item backend">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf3.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Backend</span>
              <h4><a href="course_details">PHP CRASH COURSE</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 grid-item software">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf4.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Software</span>
              <h4><a href="course_details">React Native</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 grid-item backend">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf5.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Backend</span>
              <h4><a href="course_details">PYTHON CRASH COURSE(WEB) </a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 grid-item graphic">
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src="assets/images/courses/pf6.png" alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">Graphics</span>
              <h4><a href="course_details">Graphics Development</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* End of Courses Area */}

    </div>
  )
}

export default Course