import Welcomenav from '../../component/nav/Welcomenav'
import './forgotpassword.css'

const ForgotPassword = () => {
  return (
    <div className="home">
      <Welcomenav />

      <div className="forgot_password">
        <div className="card w-50 d-flex align-items-center justify-content-center">
          <form action="">
            <div className="form-group p-2">
              <label htmlFor="">Email Address:</label>
              <input type="text" name="" className="form-control" id="" />
            </div>
            <button className="btn btn-lg w-full my-4 fw-bold btn-primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
