import React from 'react'
import {Link} from 'react-router-dom'
function Register() {
  return (
     <div>
  {/* start Registration section */}
  <section className="login registration section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
          <div className="form-head">
            <h4 className="title">Registration</h4>
            <form action="#!" method="post">
              <div className="socila-login">
                <ul>
                <div className="row">
                     <li className='col-6'><a href="javascript:void(0)" className="facebook"><i className="lni lni-facebook-original" />Import
                      From Facebook</a></li>
                  <li className='col-6'><a href="javascript:void(0)" className="google"><i className="lni lni-google" />Import
                      From Google
                      Plus</a>
                  </li>                          
                </div>
                 
                </ul>
              </div>
              <div className="alt-option">
                <span>Or</span>
              </div>
              <div className="row">
                <div className="form-group col-6">
                <label>Name</label>
                <input name="password" type="text" />
              </div>
              <div className="form-group col-6">
                <label>Email</label>
                <input name="email" type="email" />
              </div>                   
              </div>
              <div className="row">
                <div className="form-group col-6">
                <label>Password</label>
                <input name="password" type="password" />
              </div>
              <div className="form-group col-6">
                <label>Confirm Password</label>
                <input name="password" type="password" />
              </div>             
              </div>
              
              
              <div className="check-and-pass">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                      <label className="form-check-label">Agree to our <a href="javascript:void(0)">Terms and
                          Conditions</a></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="btn">Registration</button>
              </div>
              <p className="outer-link">Already have an account? <Link to="../login"> Login Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Registration section */}
</div>

  )
}

export default Register