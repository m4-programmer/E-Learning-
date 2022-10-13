import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { PopularCoursesData } from '../Data'

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
      {/* Popular COurse Section */}
                    <div className="row grid">
          {PopularCoursesData.map((items) => {
              return <PopularCoursesCard {...items} />
          })}
          </div>
          
        
        </div>
        
</section>
{/* End of Courses Area */}

    </div>
  )
}

const PopularCoursesCard = ({id,category,course,img }) => {
    return(
         <div className={"col-lg-4 col-md-6 grid-item " + category}>
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <a href="course_details"><img src={img} alt="#" /></a>
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">{ category}</span>
              <h4><a href="course_details">{course}</a></h4>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Course