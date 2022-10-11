import {useState,useEffect} from 'react'
import {Link, } from 'react-router-dom'
function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '', confirm_password: '' })
  const [error, setError] = useState({ name: '', email: '', password: '', confirm_password: '', msg: '' })
  const [isRegister,setRegister] = useState(false)
  // const Register = useEffect(() => {
  //   textHandler()
  // },[])
  const textHandler = (e) => {
    
    const InputName = e.target.name
    const InputValue = e.target.value
    setUser({...user, [InputName]: InputValue})
  }
  const RegisterHandler = (e) => {
    e.preventDefault();
    
    const {name,password,email, confirm_password } = user
    // alert('registered')
    // check if all fields were filled
    if (name === '') {
      setError({...error, name: 'Plese Fill in your Name'})
    } else {
      setError({...error, name: ''})
    }
    if (password !== confirm_password) {
      setError({...error, msg: 'Plese Password must match'})
    } else {
      setError({...error, msg: ''})
    }
    if (name && email && password && confirm_password) {
      // alert('Registration Successful')
      setUser({name: '', email: '', password: '', confirm_password: '', msg: ''})
      setError({name: '', email: '', password: '', confirm_password: '', msg: ''})
    } 
    console.log('user')
    console.log(user)
    console.log('error')
    console.log(error)
  }
  return (
     <div>
  {/* start Registration section */}
  <section className="login registration section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
          <div className="form-head">
            <h4 className="title">Registration</h4>
            <form onSubmit={RegisterHandler}>
              <div className="socila-login">
                <ul>
                <div className="row">
                     <li className='col-6'><Link to='#' className="facebook"><i className="lni lni-facebook-original" />Import
                      From Facebook</Link></li>
                  <li className='col-6'><Link to='#' className="google"><i className="lni lni-google" />Import
                      From Google
                      Plus</Link>
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
                      <input name="name" type="text" onChange={textHandler} />
                      {error.name}{error.msg}
              </div>
              <div className="form-group col-6">
                <label>Email</label>
                <input name="email" type="email" onChange={textHandler}/>
              </div>                   
              </div>
              <div className="row">
                <div className="form-group col-6">
                <label>Password</label>
                <input name="password" type="password" onChange={textHandler} />
              </div>
              <div className="form-group col-6">
                <label>Confirm Password</label>
                <input name="confirm_password" type="password" onChange={textHandler} />
              </div>             
              </div>
              
              
              <div className="check-and-pass">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1" />
                      <label className="form-check-label">Agree to our <Link to='#'>Terms and
                          Conditions</Link></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="btn">Register</button>
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