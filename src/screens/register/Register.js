import React, { Component } from 'react'
import './register.css'
import AuthWrapper from '../../component/authwrapper/AuthWrapper'
import { Link } from 'react-router-dom'
import { medicine } from '../../asset'

export class Register extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="auth-register">
          <div className="auth-container">
            <h4 className="fw-bold">Registration</h4>
            <span>Create Your Account with Us.</span>

            <form action="">
              <div className="form p-3 mt-1">
                <div className="form-group">
                  <input
                    type="email"
                    className="mt-1 form-control"
                    placeholder="Please provide your Hospital Name "
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="mt-1 form-control"
                    placeholder="please provide ID for confirmation"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="mt-1 form-control"
                    placeholder="Beneficiary Name i.e Name of Doctor, Medical Admin etc"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="mt-1 form-control"
                    placeholder="Email Address i.e Address of Beneficiary or Hospital"
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="Hospital Contact Address"
                  ></textarea>
                </div>

                <button className="bg-page-color button btn-large text-white w-full mt-5">
                  <span>Register</span>
                </button>

                <div className="mt-5">
                  <span className="account_navigate">
                    Already Have An Account?{' '}
                    <Link to="/login" className="pl-3 auth_btn">
                      Log In
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <AuthWrapper img={medicine} />
      </div>
    )
  }
}

export default Register
