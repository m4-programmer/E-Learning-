import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tracks } from '../Data'
import Thumbnail1 from '../img/1.png'

const Services = () => {
  
    return (
      <div>
  <section className="services style3 section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">Services</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">What we offer</h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">Do you want to become a competent Developer or Programmer?<br />
                    Then take one of our tracks below to get started. <br />
                    Each track contains many courses, and you can  choose the particular courses in each track that you want</p>
          </div>
        </div>
      </div>
      <div className="single-head">
          <div className="row">
                {Tracks.map((props) => {
                  return (
              <Track_Card key={props.id} {...props} />
            )
          })}        
        
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }

const Track_Card = ({ thumbnail, title, desc }) => {
  return (
      <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service wow fadeInUp" data-wow-delay=".6s">
               {/* <span className="serial">06</span> */}
        <img src={ thumbnail} alt={title} />
              <div className="padded">
                <h3><a href="track_details.html">{title.toUpperCase()}</a></h3>
                <p>{desc }</p>
              </div>
              <div className="button text-center">
                <Link to="./track_details"   className="btn">Enroll Now</Link>
              </div>
            </div>
          </div>
    )
 }



export default  Services
