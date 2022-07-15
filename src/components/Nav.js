import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
     <div>
  <header className="header navbar-area">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="nav-inner">
            {/* Start Navbar */}
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand style3" href="./">
                <img src="assets/images/logo/logo.svg" alt="Logo" />
              </a>
              <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <Link to="./" className="active" aria-label="Toggle navigation">Home</Link>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Tracks</a>
                    <ul className="sub-menu collapse" id="submenu-1-1">
                      <li className="nav-item"><Link to="./track_details"  aria-label="Toggle navigation">Frontend Development</Link></li>
                      <li className="nav-item"><Link to="./track_details"  aria-label="Toggle navigation">Backend Development</Link></li>
                      <li className="nav-item"><Link to="./track_details"  aria-label="Toggle navigation">Software Development</Link></li>
                      <li className="nav-item"><Link to="./track_details" >Data Analyst</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Courses</a>
                    <ul className="sub-menu collapse" id="submenu-1-2">
                      <li className="nav-item"><Link to="./courses"  aria-label="Toggle navigation">Courses</Link>
                      </li>
                      <li className="nav-item"><Link to="./course_details"  aria-label="Toggle navigation">Course Details</Link>
                      </li>
                    </ul>
                  </li>
                 
                    
                  
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                    <ul className="sub-menu collapse" id="submenu-1-4">
                      <li className="nav-item"><Link to="./blog" >Blog Grid</Link>
                      </li>
                      <li className="nav-item"><Link to="./blog_details">Blog Single</Link></li>
                    </ul>
                  </li>
                        <li className="nav-item">
                          <Link to="./contact">Contact</Link>
                    
                        </li>
                    <li className="nav-item"><Link to="./about">About Us</Link></li>
                        
                    <li className="nav-item"><Link to="./faq">FAQ</Link></li>
                </ul>
              </div> {/* navbar collapse */}
                    <div className="button add-list-button">
                      <Link to="./login" className="btn" target="_blank" aria-label="Toggle navigation">Login</Link>
                {/* <a href=""  ></a> */}
              </div>
            </nav>
            {/* End Navbar */}
          </div>
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </header>
</div>

    )
  }

}
