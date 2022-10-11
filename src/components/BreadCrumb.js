import React from 'react'
import { Link } from 'react-router-dom'
const  BreadCrumb  = (props) => {
  return (
      <div>
         {/* Begining of BreadCrumb Section */}
<div className="breadcrumbs">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
        <div className="breadcrumbs-content">
          <h1 className="page-title">{props.title}</h1>
        </div>
        <ul className="breadcrumb-nav">
          <li><Link to="/">{props.title.toUpperCase()}</Link></li>
          <li>index</li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/* End of BreadCrumb Section */}

    </div>
  )
}

export default BreadCrumb