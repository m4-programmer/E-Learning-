import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import { CoursesData } from '../Data'

function Track_Details() {
  return (
      <div>
          <BreadCrumb title='Track Details' />
          {/* <!-- Track Details Start --> */}
    <div className="service-details section">
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="thumb">
                            <img src="assets/images/courses/service-details.jpg" alt="#" />

                        </div>
                        <h3 className="title">Frontend Programming</h3>
                        <p>Languages realizes why a new common language would be desirable: one could refuse to pay
                            expensive translators. To achieve this, it would be necessary to have uniform grammar,
                            pronunciation and more common words.</p>

                        <p>Languages realizes why a new common language would be desirable: one could refuse to pay
                            expensive translators. To achieve this, it would be necessary to have uniform grammar,
                            pronunciation and more common words. If several languages coalesce, the grammar of the
                            resulting. would be desirable.</p>
                        <h4 className="sub-title">Why Choose This Service</h4>
                        <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem
                            aperiam with a long list of products and never ending customer support.</p>
                        <ul className="list">
                            <li><i className="lni lni-checkmark"></i> The organization is just beginning to operate in the
                                market, implementing some projects. Our team of global experts help you achieve
                                sustainable.</li>
                            <li><i className="lni lni-checkmark"></i> Customer-focused businesses build a virtuous cycle we
                                call the "customer wheel." We help you at every stage of growth, developing custom
                                solutions and collaborating with all levels of your organization.</li>
                            <li><i className="lni lni-checkmark"></i> We help you at every stage of growth.</li>
                        </ul>
                        <blockquote>
                            <div className="icon">
                                <i className="lni lni-quotation"></i>
                            </div>
                            <h4>"Perspiciatis undeomnis iste natus error sit voluptatem accusantium dolore Totam rem
                                aperiam with a long list of products and never ending customer support."</h4>
                            <span>Alex Desuza, Digital Marketer.</span>
                        </blockquote>
                        <h4 className="sub-title">Our Work Benefits</h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="service-sidebar">
                            <div className="single-widget search-widget">
                                <h3>Search Here</h3>
                                <form action="#">
                                    <input type="text" placeholder="Search Here..." />

                                    <button type="submit"><i className="lni lni-search-alt"></i></button>
                                </form>
                            </div>
                            <div className="single-widget service-category">
                                      <h3>Courses Category</h3>
                                      <p style={{marginTop:'-30px'}}>List of courses under the track</p>
                                      <ul>
                                          {CoursesData.map(({id,name}) => {
                                              return (
                                                  <li key={id}>
                                        <Link to={'#'}>
                                            {name} <i className="lni lni-arrow-right"></i>
                                        </Link>
                                    </li>
                                              )
                                          })}
                                    
                                </ul>
                            </div>
                            <div className="single-widget download">
                                <h3>Bonus</h3>
                                <ul>
                                    <li><a href="javascript:void(0)">
                                            Track RoadMap <i className="lni lni-files"></i>
                                        </a></li>
                                    <li><a href="javascript:void(0)">
                                            Live Chatting <i className="lni lni-files"></i>
                                        </a></li>
                                    <li><a href="javascript:void(0)">
                                            Certification <i className="lni lni-files"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* Track Details End */}

    </div>
  )
}

export default Track_Details