import { recent_orders } from '../../constants'
import './recent.css'

const Recent = () => {
  return (
    <div className="recent card p-2">
      <div>
        <h4 className="fw-bolder text-muted-blue">Recent Orders</h4>
      </div>
      <table className="table table-responsive mt-4">
        <thead className="bg-crimson text-white">
          <tr>
            <th>Name</th>
            <th>QTY</th>
            <th>Total Price</th>
            <th>Track Status</th>
          </tr>
        </thead>
        <tbody>
          {recent_orders.map((recent, i) => (
            <tr key={recent.id}>
              <td className="d-flex align-content-center">
                <img src={recent.img} className="img-fluid recent-img" alt="" />
                <div className="d-flex align-content-top justify-content-between flex-column p-2 ">
                  <h5>{recent.name}</h5>
                  <span>
                    <i>{recent.desc}</i>
                  </span>
                </div>
              </td>
              <td>{recent.quantity}</td>
              <td>{recent.price}</td>
              <td>
                {recent.status}{' '}
                <button className="btn btn-muted-blue">
                  <i className="fas fa-arrow-trend-up"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recent
