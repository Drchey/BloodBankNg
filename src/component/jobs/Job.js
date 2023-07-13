import './job_data.css'
import { requests } from '../../constants/data'
import Filter from '../filters/Filter'

const Job = ({ title }) => {
  return (
    <div className="p-2 jobs">
      <div className="fw-bold d-flex align-content-center justify-content-between mt-5 mb-5">
        <h5 className="text-muted-blue fw-bolder">{title}</h5>
        <button className="btn btn-muted-blue">Actions</button>
      </div>
      <Filter />
      <div className="table-responsive">
        <table className="table table-hover text-nowrap">
          <thead className="bg-crimson text-white">
            <tr>
              <th>#</th>
              <th>Request Name</th>
              <th>Hospital</th>
              <th>Designated Location</th>
              <th>Delivery Date</th>
              <th>Current Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, i) => (
              <tr>
                <td>
                  <img src={request.img} className="request_img" alt="" />
                </td>
                <td className="fw-bold">
                  <div className="d-flex align-items-center flex-column justify-content-between">
                    <span>{request.name}</span> <span>({request.id})</span>
                  </div>
                </td>
                <td>{request.hospital}</td>
                <td>{request.location}</td>
                <td>{request.due}</td>
                <td>{request.status} </td>
                <td>
                  <div className="d-flex align-content-center justify-content-between">
                    {' '}
                    <i
                      className="fa fa-eye text-muted-blue"
                      style={{ cursor: 'pointer', fontSize: '23px' }}
                    ></i>
                    <i
                      className="fa fa-tasks text-muted-blue"
                      style={{ cursor: 'pointer', fontSize: '23px' }}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Job
