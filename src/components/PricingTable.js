import React, { Component } from 'react'

export default class PricingTable extends Component {
  render() {
    return (
      <div>
  <section id="pricing" className="pricing-table section" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">pricing</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">Pricing Plan</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Table */}
          <div className="single-table wow fadeInUp" data-wow-delay=".4s">
            {/* Table Head */}
            <div className="table-head">
              <h4 className="title">Freelancer</h4>
              <p>All the basics for starting a new business</p>
              <div className="price">
                <h2 className="amount">$24<span className="duration">/mo</span></h2>
              </div>
            </div>
            {/* End Table Head */}
            {/* Start Table Content */}
            <div className="table-content">
              {/* Table List */}
              <ul className="table-list">
                <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
              </ul>
              {/* End Table List */}
              <div className="button">
                <a href="javascript:void(0)" className="btn">Buy Freelancer</a>
              </div>
            </div>
            {/* End Table Content */}
          </div>
          {/* End Single Table*/}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Table */}
          <div className="single-table wow fadeInUp" data-wow-delay=".6s">
            {/* Table Head */}
            <div className="table-head">
              <h4 className="title">Startup</h4>
              <p>All the basics for starting a new business</p>
              <div className="price">
                <h2 className="amount">$32<span className="duration">/mo</span></h2>
              </div>
            </div>
            {/* End Table Head */}
            {/* Start Table Content */}
            <div className="table-content">
              {/* Table List */}
              <ul className="table-list">
                <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
              </ul>
              {/* End Table List */}
              <div className="button">
                <a href="javascript:void(0)" className="btn">Buy Startup</a>
              </div>
            </div>
            {/* End Table Content */}
          </div>
          {/* End Single Table*/}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* Single Table */}
          <div className="single-table wow fadeInUp" data-wow-delay=".8s">
            {/* Table Head */}
            <div className="table-head">
              <h4 className="title">Enterprise</h4>
              <p>All the basics for starting a new business</p>
              <div className="price">
                <h2 className="amount">$48<span className="duration">/mo</span></h2>
              </div>
            </div>
            {/* End Table Head */}
            {/* Start Table Content */}
            <div className="table-content">
              {/* Table List */}
              <ul className="table-list">
                <li><i className="lni lni-checkmark-circle" /> Cras justo odio.</li>
                <li><i className="lni lni-checkmark-circle" /> Dapibus ac facilisis in.</li>
                <li><i className="lni lni-checkmark-circle" /> Morbi leo risus.</li>
                <li><i className="lni lni-checkmark-circle" /> Potenti felis, in cras ligula.</li>
              </ul>
              {/* End Table List */}
              <div className="button">
                <a href="javascript:void(0)" className="btn">Buy Enterprise</a>
              </div>
            </div>
            {/* End Table Content */}
          </div>
          {/* End Single Table*/}
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}
