import './authwrapper.css'

const AuthWrapper = ({ title, img }) => {
  return (
    <div className="wrapper fw-bolder">
      <img src={img} className="img-fluid" alt="img" />
    </div>
  )
}

export default AuthWrapper
