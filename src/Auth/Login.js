import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
      <div>
  {/* start login section */}
  <section className="login section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
          <div className="form-head">
            <h4 className="title">Login</h4>
            <form action="#!" method="post">
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
                    <a href="javascript:void(0)" className="lost-pass">Lost your password?</a>
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
                  <li><a href="javascript:void(0)" className="facebook"><i className="lni lni-facebook-original" />Login With
                      Facebook</a></li>
                  <li><a href="javascript:void(0)" className="google"><i className="lni lni-google" />Login
                      With Google
                      Plus</a>
                  </li>
                </ul>
              </div>
              <p className="outer-link">Don't have an account? <Link to="../register">Register here</Link>
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