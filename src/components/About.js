import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
  <section id="about" className="about section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="image wow fadeInLeft" data-wow-delay=".3s">
            <img className="main-image" src="assets/images/about/about-image.png" alt="#" />
            <div className="img2" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="content wow fadeInRight" data-wow-delay=".5s">
            <div className="heading">
              <h2>People choose us because of our service</h2>
              <p>M4 Academy started out as an offline instituion that impact knowledge to absolute beginners and make them programmers in at least two month, depending on the track they are taking. From our research, we found out that  90% of our student enjoys our pattern of teaching because we utilize the best method that fit each individual, hence we also wish to extend this opportunity globaaly to any one that will tke that bold step to taking a course with us.</p>
            </div>
            <div className="list">
              {/* Start Single List */}
              <div className="single-list">
                <i className="lni lni-bolt" />
                <h4>Infinite Features</h4>
                <p>We work on diverse projects for top brands as well as for cool startups.</p>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <i className="lni lni-grid-alt" />
                <h4>Stunning Design</h4>
                <p>We work on diverse projects for top brands as well as for cool startups.</p>
              </div>
              {/* End Single List */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}
