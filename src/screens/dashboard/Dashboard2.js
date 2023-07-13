import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Nav2 from '../../component/nav2/Nav2'
import Profile from '../../component/profile/Profile'
import Recent from '../../component/recents/Recent'
import './dashboard.css'

const Dashboard2 = () => {
  return (
    <div>
      <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="central">
            <Nav2 />

            <div className="profile-flex mt-4">
              <Profile />
              <Recent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2
