import React, { Component } from 'react'

export default class NewsLetter extends Component {
  render() {
    return (
      <div>
  <section className="section newsletter">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="image">
            <img src="assets/images/newsletter/newsletter-img.png" alt="#" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="content">
            <h5>Join our community</h5>
            <h3>Get latest app updates<br /> Right at your inbox</h3>
            <form action="#" method="get" target="_blank" className="newsletter-form">
              <input name="email" type="email" placeholder="Your email address" />
              <div className="button">
                <button type="submit" className="btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}
