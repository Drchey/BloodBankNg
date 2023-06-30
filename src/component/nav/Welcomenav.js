import { Link } from 'react-router-dom'
import './welcome_nav.css'

const Welcomenav = () => {
  return (
    <div className="d-flex items-center justify-content-between ">
      <div className="d-flex items-center justify-content-between">
        <h3 className="header_title text-secondary">
          <i className="fas fa-droplet text-danger"></i>
          <span className="ml-4 text-capitalize fw-bold">BloodBankNg</span>
        </h3>
      </div>

      <div>
        <ul className="d-flex list-unstyled welcome-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Services</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <button className="login_btn">
          <Link to="/login">Login</Link>
        </button>

        <button className="sign_up_btn mx-2">
          <Link to="/register" className="text-white">
            SignUp
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Welcomenav
