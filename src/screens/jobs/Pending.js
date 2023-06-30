import Job from '../../component/jobs/Job'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import './jobs.css'

const Pending = () => {
  return (
    <div>
      <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="central">
            <Job title={`Pending Jobs`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pending
