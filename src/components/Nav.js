import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {NavTracksData} from '../Data.js'

const Nav= () => {
  const [toggle, setToggle] = React.useState(false)
  const Toggler = () => {
    setToggle(!toggle)
  } 
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
              <button className="navbar-toggler mobile-menu-btn"  onClick={Toggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div className={toggle ? ' navbar-collapse sub-menu-bar ' : 'collapse navbar-collapse sub-menu-bar'} id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <Link to="./"   onClick={Toggler} className="active" aria-label="Toggle navigation">Home</Link>
                  </li>
                  <li className="nav-item">
                    <a className=" dd-menu collapsed"  href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Tracks</a>
                          <ul className="sub-menu collapse" id="submenu-1-1">
                            {NavTracksData.map(({id,route,name}) => {
                              return (
                                 <li className="nav-item" key={id}><Link to={route}  onClick={Toggler} aria-label="Toggle navigation">{name}</Link></li>
                              )
                            })}
                     
                      
                    </ul>
                  </li>
                        <li className="nav-item">
                          <Link to="./courses" onClick={Toggler}  aria-label="Toggle navigation">Courses</Link>
                    {/* <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Courses</a>
                    <ul className="sub-menu collapse" id="submenu-1-2">
                      <li className="nav-item"><Link to="./courses" onClick={Toggler}  aria-label="Toggle navigation">Courses</Link>
                      </li>
                      <li className="nav-item"><Link to="./course_details" onClick={Toggler}  aria-label="Toggle navigation">Course Details</Link>
                      </li>
                    </ul> */}
                  </li>
                 
                    
                  
                  <li className="nav-item">
                    <a className=" dd-menu collapsed" href="#blog" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                    <ul className="sub-menu collapse" id="submenu-1-4">
                      <li className="nav-item"><Link to="./blog" onClick={Toggler} >Blog Grid</Link>
                      </li>
                      <li className="nav-item"><Link to="./blog_details" onClick={Toggler}>Blog Single</Link></li>
                    </ul>
                  </li>
                        <li className="nav-item">
                          <Link to="./contact" onClick={Toggler}>Contact</Link>
                    
                        </li>
                    <li className="nav-item"><Link to="./about" onClick={Toggler}>About Us</Link></li>
                        
                    <li className="nav-item"><Link to="./faq" onClick={Toggler}>FAQ</Link></li>
                </ul>
              </div> {/* navbar collapse */}
                    <div className="button add-list-button">
                      <Link to="./login" className="btn" onClick={Toggler}  aria-label="Toggle navigation">Login</Link>
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

export default  Nav 
