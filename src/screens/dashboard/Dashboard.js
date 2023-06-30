import React, { Component } from 'react'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Nav from '../../component/nav/Nav'
import Widget from '../../component/widget/Widget'
import Activity from '../../component/activity/Activity'
import Invoice from '../../component/invoice/Invoice'
import { requests } from '../../constants/data'
import './dashboard.css'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <div className="central">
              <Nav />

              <div className="d-flex align-items-center justify-content-between">
                <Widget title={'Total Revenue'} icon="fas fa-shopping-cart" />
                <Widget title={'Pending Orders'} />
                <Widget title={'Users'} />
                <Widget title={'Products'} />
              </div>

              <div
                className="d-flex mt-4 align-items-center justify-content-between
              "
              >
                <Activity />
                <Invoice />
              </div>

              <div className="card">
                <div className="p-3 fw-bold d-flex align-content-center justify-content-between mt-5">
                  <h5 className="text-muted-blue">Recent Requests</h5>
                  <button className="btn btn-muted-blue">Actions</button>
                </div>
                <table className="table table-responsive">
                  <thead className="bg-crimson text-white">
                    <tr>
                      <th>#</th>
                      <th>Request Name</th>
                      <th>Designated Location</th>
                      <th>Delivery Date</th>
                      <th>Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request, i) => (
                      <tr>
                        <th>
                          <img
                            src={request.img}
                            className="request_img"
                            alt=""
                          />
                        </th>
                        <th className="fw-bold">
                          <div className="d-flex align-items-center flex-column justify-content-between">
                            <span>{request.name}</span>{' '}
                            <span>({request.id})</span>
                          </div>
                        </th>
                        <th>{request.location}</th>
                        <th>{request.due}</th>
                        <th>{request.status}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
