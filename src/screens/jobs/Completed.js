import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Job from '../../component/jobs/Job'

const Completed = () => {
  return (
    <div>
      <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="central">
            <Job title={`Completed Jobs`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Completed
