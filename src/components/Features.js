import React from 'react'
import {FeaturesData} from '../Data'
 const  Features = () => {
  
    return (
      <div>
  <section id="features" className="features section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn'}}>Features</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>Our Features</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
              Our Learning Management System (LMS) is designed with lot of features to make learning easy and fun.</p>
          </div>
        </div>
      </div>
      <div className="row">
              {FeaturesData.map((props) => {
                return (
                  <FeaturesCard key={props.id} {...props} />
                )
        })}
        
      
      </div>
    </div>
  </section>
</div>

    )
}


// Features Card Component
const FeaturesCard = ({icon, title, desc }) => {
  
  return (
    <>
         <div className="col-lg-4 col-md-6 col-6">
          {/* Start Single Feature */}
          <div className="single-feature wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            <i className={icon} />
            <h3>{title.toUpperCase()} </h3>
            <p>{desc}</p>
          </div>
          {/* End Single Feature */}
        </div>
    </>
  )
}

export default Features;