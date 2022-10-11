import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function CourseDetails() {
  return (
    <div>
      <BreadCrumb  title='Course Details' />
        {/* Course Details Start */}
<div classname="portfolio-details section">
  <div classname="container">
    <div classname="row">
      <div classname="col-12">
        <div classname="content">
          <div classname="thumb">
            <img src="assets/images/courses/project-details.jpg" alt="#" />
            {/* Video Element will be here */}
          </div>
          <div classname="row">
            <div classname="col-lg-8 col-12">
              <div classname="details-content">
                <h3>HTML COURSE <small>(Video element will replace the picture above)</small></h3>
                <h4><span>01.</span>Сhallenge</h4>
                <p>Marketing consumer products felt like a genteel game of lawn tennis: Established
                  competitors
                  invested in creative with long lead times, using proven models of TV and big-box
                  retail,
                  alongside trusted agency partners. Today, it’s more like a sprawling contest of
                  mixed
                  martial arts, with new competitors playing by different rules; an unprecedented
                  complexity
                  of channels, content and partners.</p>
                <ul classname="list">
                  <li><i classname="lni lni-checkmark" /> The organization is just beginning to
                    operate
                    in the
                    market, implementing some projects. Our team of global experts help you
                    achieve
                    sustainable.</li>
                  <li><i classname="lni lni-checkmark" /> Customer-focused businesses build a
                    virtuous
                    cycle we
                    call the "customer wheel." We help you at every stage of growth, developing
                    custom
                    solutions and collaborating with all levels of your organization.</li>
                  <li><i classname="lni lni-checkmark" /> We help you at every stage of growth.</li>
                </ul>
                <h4><span>02.</span>Solutions</h4>
                <p>What’s the right path forward? Reinventing the brand growth model requires more
                  than
                  a
                  reallocation of marketing budget to digital. CMOs need a reassessment of growth
                  platforms
                  and future brand portfolios, a new understanding of the consumer journey, a
                  supporting
                  strategy on data and technology. Fueling the blur of combat is a radical shift
                  in
                  brand
                  growth models. Within the span of most executives’ careers, advances in
                  technology
                  have
                  reshaped how consumers engage with brands. In the US and UK, more than 60% of
                  consumers now
                  discover products online, and 85% of millennials trust reviews from a faceless
                  stranger more
                  than traditional advertising. The same technology advances have dramatically
                  altered
                  the
                  competitive landscape.</p>
                <div classname="share">
                  <span>Share This</span>
                  <ul>
                    <li><a href="javascript:void(0)"><i classname="lni lni-facebook-original" /></a>
                    </li>
                    <li><a href="javascript:void(0)"><i classname="lni lni-twitter-original" /></a>
                    </li>
                    <li><a href="javascript:void(0)"><i classname="lni lni-google" /></a></li>
                    <li><a href="javascript:void(0)"><i classname="lni lni-pinterest" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div classname="col-lg-4 col-md-12 col-12">
              <div classname="pf-details-sidebar">
                <h4>Course Info</h4>
                <ul>
                  <li><span>Category: </span><a href="javascript:void(0)">Frontend Development</a></li>
                  <li><span>Date : </span>June, 15, 2022</li>
                  <li><span>Tag : </span>
                    <a href="javascript:void(0)">HTML</a>,
                    <a href="javascript:void(0)">Frontend</a>
                  </li>
                  <li><span>Website : </span>
                    <a href="javascript:void(0)">www.m4academy.com</a>
                  </li>
                  <li><span>Location : </span>
                    WWW, Internet
                  </li>
                </ul>
              </div>
              <div classname="banner">
                <a href="#">
                  <img src="assets/images/courses/banner.jpg" alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Course Details Ends */}

    </div>
  )
}

export default CourseDetails