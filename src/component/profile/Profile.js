import { just_me } from '../../asset'
import './profile.css'

const Profile = () => {
  return (
    <div className="card profile p-2 m-2 d-flex flex-column align-items-center position-relative">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <img src={just_me} className="img-fluid profile__img" alt="" />
        <h3 className="text-muted-blue mt-3">John Doe</h3>
        <div className="alert-primary w-full p-2">LARAMEDICS - SALES</div>
      </div>

      <div className="mt-5 w-full">
        <ul className="list-unstyled mt-4">
          <li className="d-flex align-content-center justify-content-between mb-2">
            <b>Orders</b> <i>1,300</i>
          </li>
          <li className="d-flex align-content-center justify-content-between mb-2">
            <b>Pending Orders</b> <i> + 450.00</i>
          </li>
          <li className="d-flex align-content-center justify-content-between">
            <b>MemberShip</b> <i>Premium</i>
          </li>
        </ul>
      </div>
      <div className="settings">
        <i className="fas fa-gear bg-muted-blue p-2 rounded-9 text-white"></i>
      </div>
    </div>
  )
}

export default Profile
