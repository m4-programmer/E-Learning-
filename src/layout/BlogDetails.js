import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function BlogDetails() {
  return (
    <div>
      <BreadCrumb  title='Blog Details' />
  {/* Begining of blog-single Section */}
  <section className="section blog-single">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12">
          <div className="single-inner">
            <div className="post-details">
              <div className="main-content-head">
                <div className="meta-information">
                  <h2 className="post-title">
                    <a href="blog-single.html">Web design refers to the design of websites that are
                      displayed on the internet.</a>
                  </h2>
                  {/* End Meta Info */}
                  <ul className="meta-info">
                    <li>
                      <a href="javascript:void(0)"><img src="assets/images/blog/comment1.jpg" alt="#" /> Roel Aufderhar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-calendar" /> 10 Feb 2023
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-tag" /> Marketing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-timer" /> 5 min read</a>
                    </li>
                  </ul>
                  {/* End Meta Info */}
                </div>
                <div className="post-thumbnils">
                  <img src="assets/images/blog/blog-single.jpg" alt="#" />
                </div>
                <div className="detail-inner">
                  <p>We denounce with righteous indige nation and dislike men who are so beguiled and
                    demo
                    realized by the charms of pleasure of the moment, so blinded by desire, that
                    they
                    cannot
                    foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                    those
                    who fail in their duty through weakness of will, which is the same as saying
                    through
                    shrinking from toil and pain. These cases are perfectly simple and easy to
                    distinguish.
                    In a free hour, when our power of choice is untrammelled and when nothing
                    prevents
                    our
                    being able to do what we like best, every pleasure is to be welcomed and every
                    pain
                    avoided.</p>
                  {/* post image */}
                  <ul className="list">
                    <li><i className="lni lni-checkmark-circle" /> For those of you who are serious
                      about having
                      more.</li>
                    <li><i className="lni lni-checkmark-circle" /> There are a million distractions in
                      every
                      facet of our lives.</li>
                    <li><i className="lni lni-checkmark-circle" /> The sad thing is the majority of
                      people have
                      no clue about what they truly want.</li>
                    <li><i className="lni lni-checkmark-circle" /> Once you have a clear understanding
                      of what you
                      want</li>
                    <li><i className="lni lni-checkmark-circle" /> Focus is having the unwavering
                      attention to
                      complete what you set out to do.</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
                  {/* post quote */}
                  <blockquote>
                    <div className="icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <h4>"Don't demand that things happen as you wish, but wish that they happen as
                      they
                      do
                      happen, and you will go on well."</h4>
                    <span>- Epictetus, The Enchiridion</span>
                  </blockquote>
                  <h3>Setting the mood with incense</h3>
                  <p>Remove aversion, then, from all things that are not in our control, and transfer
                    it
                    to
                    things contrary to the nature of what is in our control. But, for the present,
                    totally
                    suppress desire: for, if you desire any of the things which are not in your own
                    control,
                    you must necessarily be disappointed; and of those which are, and which it would
                    be
                    laudable to desire, nothing is yet in your possession. Use only the appropriate
                    actions
                    of pursuit and avoidance; and even these lightly, and with gentleness and
                    reservation.
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                    dolor in reprehenderit. </p>
                  {/*post tags */}
                  {/* Post Social Share */}
                  <div className="post-social-media">
                    <h5 className="share-title">Social Share</h5>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                          <span>facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                          <span>twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-google" />
                          <span>google+</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                          <span>linkedin</span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-pinterest" />
                          <span>pinterest</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Post Social Share */}
                </div>
              </div>
              {/* Comments */}
              <div className="post-comments">
                <h3 className="comment-title"><span>Post comments</span></h3>
                <ul className="comments-list">
                  <li>
                    <div className="comment-img">
                      <img src="assets/images/blog/comment1.jpg" alt="img" />
                    </div>
                    <div className="comment-desc">
                      <div className="desc-top">
                        <h6>Arista Williamson</h6>
                        <span className="date">19th May 2023</span>
                        <a href="javascript:void(0)" className="reply-link"><i className="lni lni-reply" />Reply</a>
                      </div>
                      <p>
                        Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc
                        ipsum, blandit eu enim sed, facilisis convallis orci. Etiam commodo
                        lectus
                        quis vulputate tincidunt. Mauris tristique velit eu magna maximus
                        condimentum.
                      </p>
                    </div>
                  </li>
                  <li className="children">
                    <div className="comment-img">
                      <img src="assets/images/blog/comment2.jpg" alt="img" />
                    </div>
                    <div className="comment-desc">
                      <div className="desc-top">
                        <h6>Rosalina Kelian</h6>
                        <span className="date">15th May 2023</span>
                        <a href="javascript:void(0)" className="reply-link"><i className="lni lni-reply" />Reply</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="comment-img">
                      <img src="assets/images/blog/comment3.jpg" alt="img" />
                    </div>
                    <div className="comment-desc">
                      <div className="desc-top">
                        <h6>Alex Jemmi</h6>
                        <span className="date">12th May 2023</span>
                        <a href="javascript:void(0)" className="reply-link"><i className="lni lni-reply" />Reply</a>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="comment-form">
                <h3 className="comment-reply-title">Leave a comment</h3>
                <form action="#" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-box form-group">
                        <input type="text" name="name" className="form-control form-control-custom" placeholder="Website URL" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-box form-group">
                        <input type="text" name="email" className="form-control form-control-custom" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-box form-group">
                        <input type="email" name="email" className="form-control form-control-custom" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-box form-group">
                        <input type="text" name="name" className="form-control form-control-custom" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-box form-group">
                        <textarea name="#" className="form-control form-control-custom" placeholder="Your Comments" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="button">
                        <button type="submit" className="btn">Post Comment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-lg-4 col-md-12 col-12">
          <div className="sidebar blog-grid-page">
            {/* Start Single Widget */}
            <div className="widget search-widget">
              <h5 className="widget-title">Search This Site</h5>
              <form action="#">
                <input type="text" placeholder="Search Here..." />
                <button type="submit"><i className="lni lni-search-alt" /></button>
              </form>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget popular-feeds">
              <h5 className="widget-title">Popular Feeds</h5>
              <div className="popular-feed-loop">
                <div className="single-popular-feed">
                  <div className="feed-desc">
                    <a className="feed-img" href="blog-single-sidebar.html">
                      <img src="assets/images/blog/blog-sidebar-1.jpg" alt="#" />
                    </a>
                    <a href="javascript:void(0)" className="cetagory">Creative</a>
                    <h6 className="post-title"><a href="blog-single-sidebar.html">Bringing Great Design
                        Ideas To Completion</a></h6>
                    <span className="time"><i className="lni lni-calendar" /> 05th Nov 2023</span>
                  </div>
                </div>
                <div className="single-popular-feed">
                  <div className="feed-desc">
                    <a className="feed-img" href="blog-single-sidebar.html">
                      <img src="assets/images/blog/blog-sidebar-2.jpg" alt="#" />
                    </a>
                    <a href="javascript:void(0)" className="cetagory">Jobs</a>
                    <h6 className="post-title"><a href="blog-single-sidebar.html">Live Life Smart And
                        Focus On The Positive</a></h6>
                    <span className="time"><i className="lni lni-calendar" /> 24th March 2023</span>
                  </div>
                </div>
                <div className="single-popular-feed">
                  <div className="feed-desc">
                    <a className="feed-img" href="blog-single-sidebar.html">
                      <img src="assets/images/blog/blog-sidebar-3.jpg" alt="#" />
                    </a>
                    <a href="javascript:void(0)" className="cetagory">Marketing</a>
                    <h6 className="post-title"><a href="blog-single-sidebar.html">We’re currently
                        acceping new projects.</a></h6>
                    <span className="time"><i className="lni lni-calendar" /> 30th Jan 2023</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget categories-widget">
              <h5 className="widget-title">Categories</h5>
              <ul className="custom">
                <li>
                  <a href="javascript:void(0)">Web Design</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Branding</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Graphic Design</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Marketing</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Wireframing</a>
                </li>
              </ul>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget popular-tag-widget">
              <h5 className="widget-title">Popular Tags</h5>
              <div className="tags">
                <a href="javascript:void(0)">Popular</a>
                <a href="javascript:void(0)">Design</a>
                <a href="javascript:void(0)">UX</a>
                <a href="javascript:void(0)">Usability</a>
                <a href="javascript:void(0)">Interview</a>
                <a href="javascript:void(0)">Jobs</a>
                <a href="javascript:void(0)">Develop</a>
                <a href="javascript:void(0)">Business</a>
                <a href="javascript:void(0)">Tech</a>
                <a href="javascript:void(0)">Consult</a>
                <a href="javascript:void(0)">Employee</a>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="widget help-call">
              <h5 className="widget-title">Need Help?</h5>
              <div className="inner">
                <h3>
                  Online Help!
                  <span>+(123) 456-78-90</span>
                </h3>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </aside>
      </div>
    </div>
  </section>
  {/* End of blog-single Section */}
      </div>

  )
}

export default BlogDetails