import { profile } from '../../asset'
import { activity } from '../../constants'
import './activity.css'

const Activity = () => {
  return (
    <div className="card activity p-2">
      <h4>Pending Orders</h4>

      <div className="">
        {activity.map((activity, i) => (
          <div className="mt-4">
            <div className="d-flex">
              <img src={profile} className="profile_img" alt="" />
              <div className="">
                <div className="text-success d-flex">
                  {activity.request}
                  <i className="fas fa-arrow-up"></i>
                </div>
                <div className="">
                  <b> {activity.name}</b> has requested for{' '}
                  <b>{activity.invoice}</b>
                </div>

                <div className="font-weight-light text-sm-left mt-2">
                  17th Jan 2023
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity
