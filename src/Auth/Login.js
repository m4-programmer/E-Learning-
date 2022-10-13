import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'

const Login = () => {
  const LoginHandler = (e) => {
    e.preventDefault();
    // Login For Login in User's
    const details = {
      email: 'miraboy13@gmail.com',
      password : '12345'
    }
    
    alert("submitted");
  }
  return (
    <div>
      <BreadCrumb  title='Login' displayMd={true} />
      {/* start login section */}
      
  <section className="login section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <div className="form-head">
            <h4 className="title">Login</h4>
            <form onSubmit={LoginHandler}>
              <div className="form-group">
                <label>Username or email</label>
                <input name="email" type="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" />
              </div>
              <div className="check-and-pass">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                      <label className="form-check-label">Remember me</label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <Link to='#' className="lost-pass">Lost your password?</Link>
                  </div>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="btn">Login Now</button>
              </div>
              <div className="alt-option">
                <span>Or</span>
              </div>
              <div className="socila-login">
                <ul>
                  <li><Link to='#' className="facebook"><i className="lni lni-facebook-original" />Login With
                      Facebook</Link></li>
                  <li><Link to='#' className="google"><i className="lni lni-google" />Login
                      With Google
                      Plus</Link>
                  </li>
                </ul>
              </div>
                  <p className="outer-link">Don't have an account?
                    <Link to="../register"> Register here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end login section */}
</div>

  )
}

export default Login