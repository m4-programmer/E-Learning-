import React from 'react'

function Contact() {
  return (
      <div>
{/* Begining of Contact Section */}
<section id="contact-us" className="contact-us section">
  <div className="container">
    <div className="contact-head">
      <div className="row">
        <div className="col-lg-5 col-12">
          <div className="single-head">
            <div className="contant-inner-title">
              <h2>Our Contacts &amp; Location</h2>
              <p>Business consulting excepteur sint occaecat cupidatat consulting non proident.</p>
            </div>
            <div className="single-info">
              <h3>Opening hours</h3>
              <ul>
                <li>Daily: 9.30 AM–6.00 PM</li>
                <li>Sunday &amp; Holidays: Closed</li>
              </ul>
            </div>
            <div className="single-info">
              <h3>Contact info</h3>
              <ul>
                <li>77408 Satterfield Motorway Suite</li>
                <li>469 New Antonetta, BC K3L6P6</li>
                <li><a href="mailto:info@yourwebsite.com">example@info.com</a></li>
                <li><a href="tel:(617) 495-9400-326">(617) 495-9400-326</a></li>
              </ul>
            </div>
            <div className="single-info contact-social">
              <h3>Social contact</h3>
              <ul>
                <li><a href="javascript:void(0)"><i className="lni lni-facebook-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a></li>
                <li><a href="javascript:void(0)"><i className="lni lni-pinterest" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <div className="form-main">
            <div className="form-title">
              <h2>Get in Touch</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form.</p>
            </div>
            <form className="form" method="post" action="assets/mail/mail.php">
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