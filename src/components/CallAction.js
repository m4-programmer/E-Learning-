import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const CallAction = () =>  {
  
    return (
     <div>
  <section className="call-action">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="text">
            <h2>Ready to dive in?<span>Start your Development Career today.</span>
            </h2>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="button">
            <Link to="/register" className="btn">Sign Up
            </Link>
            <Link to="/faq" className="btn btn-alt">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }


export default  CallAction