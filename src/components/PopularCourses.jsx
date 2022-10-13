import React from 'react'
import { Link,  } from 'react-router-dom'
import { PopularCoursesData } from '../Data'
const PopularCourses = () => {
    return (
      <>
             {/* Start of PopularCourses Area */}
<section className="portfolio-section section">
  <div id="container" className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h3 className="wow zoomIn" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn'}}>
             Popular Courses </h3>
          <h2 className="wow fadeInUp hide-sm" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
            Our Popular courses</h2>
          <p className="wow fadeInUp text-justify-sm" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
            Do you want to become a developer, register to get started immediately.</p>
        </div>
      </div>
    </div>
                    {/* Popular COurse Section */}
                    <div className="row grid">
          {PopularCoursesData.map((items) => {
              return <PopularCoursesCard {...items} />
          })}
                    </div>
                    <Link to={'/courses'}><button className="btn btn-outline-primary">See More</button></Link>
                    
  </div>
</section>
{/* End of PopularCourses Area */}
        
      </>
      
  )
}

const PopularCoursesCard = ({id,category,course,img }) => {
    return(
        <div className={"col-lg-4 col-md-6 grid-item " + category}>
        <Link to={"/course_details/"}>
        <div className="portfolio-item-wrapper">
          <div className="portfolio-img">
            <img src={img} alt="#" />
          </div>
          <div className="portfolio-overlay">
            <div className="pf-content">
              <span className="category">{ category}</span>
              <h4>{course}</h4>
            </div>
          </div>
                </div>
        </Link>
      </div>
    )
}

export default PopularCourses