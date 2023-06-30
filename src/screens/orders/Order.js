import Job from '../../component/jobs/Job'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import './order.css'

const Order = () => {
  return (
    <div>
      <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="central">
            <Job title={'Pending Orders'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
