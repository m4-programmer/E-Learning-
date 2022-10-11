import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function About() {
  return (
    <div>
      <BreadCrumb  title='About Us' />
  {/* Start Team */}
  <section id="team" className="team section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn'}}>Team</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>Meat our team</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Single Team */}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="single-team wow fadeInUp" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
            {/* Image */}
            <div className="image">
              <img src="assets/images/team/team1.jpg" alt="#" />
              {/* Social */}
              <ul className="social">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-behance-original" /></a></li>
              </ul>
              {/* End Social */}
            </div>
            {/* End Image */}
            <div className="info-head">
              {/* Info Box */}
              <div className="info-box">
                <h4 className="name"><a href="javascript:void(0)">Dahlia Moore</a></h4>
                <span className="designation">Senior Manager</span>
              </div>
              {/* End Info Box */}
            </div>
          </div>
        </div>
        {/* End Single Team */}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="single-team wow fadeInUp" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
            {/* Image */}
            <div className="image">
              <img src="assets/images/team/team2.jpg" alt="#" />
              {/* Social */}
              <ul className="social">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-behance-original" /></a></li>
              </ul>
              {/* End Social */}
            </div>
            {/* End Image */}
            <div className="info-head">
              {/* Info Box */}
              <div className="info-box">
                <h4 className="name"><a href="javascript:void(0)">Jhone digo</a></h4>
                <span className="designation">Markeitng</span>
              </div>
              {/* End Info Box */}
            </div>
          </div>
        </div>
        {/* End Single Team */}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="single-team wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
            {/* Image */}
            <div className="image">
              <img src="assets/images/team/team3.jpg" alt="#" />
              {/* Social */}
              <ul className="social">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-behance-original" /></a></li>
              </ul>
              {/* End Social */}
            </div>
            {/* End Image */}
            <div className="info-head">
              {/* Info Box */}
              <div className="info-box">
                <h4 className="name"><a href="javascript:void(0)">Zara tingo</a></h4>
                <span className="designation">Web Developer</span>
              </div>
              {/* End Info Box */}
            </div>
          </div>
        </div>
        {/* End Single Team */}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="single-team wow fadeInUp" data-wow-delay=".8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp'}}>
            {/* Image */}
            <div className="image">
              <img src="assets/images/team/team4.jpg" alt="#" />
              {/* Social */}
              <ul className="social">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-behance-original" /></a></li>
              </ul>
              {/* End Social */}
            </div>
            {/* End Image */}
            <div className="info-head">
              {/* Info Box */}
              <div className="info-box">
                <h4 className="name"><a href="javascript:void(0)">David Zone</a></h4>
                <span className="designation">SEO Expert</span>
              </div>
              {/* End Info Box */}
            </div>
          </div>
        </div>
        {/* End Single Team */}
      </div>
    </div>
  </section>
  {/* End Team */}
</div>

  )
}

export default About