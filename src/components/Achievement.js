import React, { Component } from 'react'

export default class Achievement extends Component {
  render() {
    return (
      <div>
  <section className="our-achievement section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <div className="achievement-icon">
              <i className="lni lni-thumbs-up" />
            </div>
            <h3 className="counter"><span id="secondo1" className="countup" cup-end={100}>100</span>%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <div className="achievement-icon">
              <i className="lni lni-users" />
            </div>
            <h3 className="counter"><span id="secondo2" className="countup" cup-end={120}>120</span>K</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <div className="achievement-icon">
              <i className="lni lni-investment" />
            </div>
            <h3 className="counter"><span id="secondo3" className="countup" cup-end={500}>500</span>k+</h3>
            <p>Investments</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <div className="achievement-icon">
              <i className="lni lni-cup" />
            </div>
            <h3 className="counter"><span id="secondo3" className="countup" cup-end={50}>50</span>+</h3>
            <p>Winning Award</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}
