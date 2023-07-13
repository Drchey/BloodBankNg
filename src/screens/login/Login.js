import React, { Component } from 'react'
import './login.css'
import AuthWrapper from '../../component/authwrapper/AuthWrapper'
import { Link } from 'react-router-dom'
import { loginfestives } from '../../asset'

export class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="auth">
          <div className="auth-container">
            <span>
              <i className="fas fa-heart page-color"></i>
            </span>
            <h4>Welcome Back!</h4>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="form-control "
                  name=""
                  id=""
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control "
                  name=""
                  id=""
                />
              </div>

              <div className="form-outlay">
                <div className="remember-me">
                  <input className="mr-2" type="checkbox" name="" id="" />
                  <span className="remember-me-text">Keep Me Logged In</span>
                </div>

                <div className="fw-bold">Forgotten Password ?</div>
              </div>

              <button className="bg-page-color button btn-large text-white w-full mt-5">
                <span>Log In</span>
              </button>

              <div className="mt-5">
                <span className="account_navigate">
                  Don't Have an Account?{' '}
                  <Link to="/register" className="ml-3 auth_btn">
                    Register Here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <AuthWrapper img={loginfestives} />
      </div>
    )
  }
}

export default Login
