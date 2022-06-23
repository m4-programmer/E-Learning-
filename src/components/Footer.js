import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
     <div>
  <footer className="footer">
    {/* Start Footer Top */}
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            {/* Single Widget */}
            <div className="single-footer f-about">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo/white-logo.svg" alt="#" />
                </a>
              </div>
              <p>Making the world a better place through the creation and making of developers who can solve real life problems with their skills.</p>
              <ul className="social">
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-instagram" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-youtube" /></a></li>
              </ul>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Solutions</h3>
                  <ul>
                    <li><a href="javascript:void(0)">Marketing</a></li>
                    <li><a href="javascript:void(0)">Analytics</a></li>
                    <li><a href="javascript:void(0)">Commerce</a></li>
                    <li><a href="javascript:void(0)">Insights</a></li>
                    <li><a href="javascript:void(0)">Promotion</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li><a href="javascript:void(0)">Pricing</a></li>
                    <li><a href="javascript:void(0)">Documentation</a></li>
                    <li><a href="javascript:void(0)">Guides</a></li>
                    <li><a href="javascript:void(0)">API Status</a></li>
                    <li><a href="javascript:void(0)">Live Support</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Company</h3>
                  <ul>
                    <li><a href="javascript:void(0)">About Us</a></li>
                    <li><a href="javascript:void(0)">Our Blog</a></li>
                    <li><a href="javascript:void(0)">Jobs</a></li>
                    <li><a href="javascript:void(0)">Press</a></li>
                    <li><a href="javascript:void(0)">Contact Us</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Legal</h3>
                  <ul>
                    <li><a href="javascript:void(0)">Terms &amp; Conditions</a></li>
                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)">Catering Services</a></li>
                    <li><a href="javascript:void(0)">Customer Relations</a></li>
                    <li><a href="javascript:void(0)">Innovation</a></li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End Footer Top */}
  </footer>
</div>

    )
  }
}
