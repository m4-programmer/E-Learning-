import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
      <div>
      <BreadCrumb  title='Contact Us' />
{/* Begining of Contact Section */}
<section id="contact-us" className="contact-us section">
  <div className="container">
    <div className="contact-head">
      <div className="row">
        <div className="col-lg-5 col-12">
          <div className="single-head">
            <div className="contant-inner-title">
              <h2>Our Contacts &amp; Location</h2>
                    <p className='text-justify'>M4 Academy is based physically at Unn Nsukka, Enugu State Nigeria and we also deliver quality transforming
                    teaching online via our Website</p>
                    
            </div>
            <div className="single-info">
              <h3>Opening hours</h3>
              <ul>
                <li>Daily: 9.30 AM – 4.00 PM</li>
                <li>Sundays &amp; Holidays: Closed</li>
              </ul>
            </div>
            <div className="single-info">
              <h3>Contact info</h3>
              <ul>
                <li>Unn Nsukka, Enugu State Nigeria</li>
                
                <li><Link to="mailto:info@m4academy.com">m4academy@info.com</Link></li>
                <li><Link to="tel:(+234) 802-6889-782">(+234) 802-6889-782</Link></li>
              </ul>
            </div>
            <div className="single-info contact-social">
              <h3>Social contact</h3>
              <ul>
                <li><Link to={"#"}><i className="lni lni-facebook-original" /></Link></li>
                <li><Link to={"#"}><i className="lni lni-twitter-original" /></Link></li>
                <li><Link to={"#"}><i className="lni lni-linkedin-original" /></Link></li>
                <li><Link to={"#"}><i className="lni lni-pinterest" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <div className="form-main">
            <div className="form-title">
              <h2>Get in Touch</h2>
              <p>Leave us a Message.</p>
            </div>
            <form className="form" method="post" action="">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input name="name" type="text" placeholder="Your Name" required="required" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input name="subject" type="text" placeholder="Your Subject" required="required" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input name="email" type="email" placeholder="Your Email" required="required" />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="form-group">
                    <input name="phone" type="text" placeholder="Your Phone" required="required" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group message">
                    <textarea name="message" placeholder="Your Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group button">
                    <button type="submit" className="btn ">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* End of Contact Section */}

    </div>
  )
}

export default Contact