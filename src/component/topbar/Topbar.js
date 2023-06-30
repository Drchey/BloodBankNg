import React, { Component } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

export class Topbar extends Component {
  render() {
    const { title, links, navigate_to } = this.props
    return (
      <div className="top__bar">
        <div className="topbar__title d-flex items-center">
          <i className="fas fa-droplet text-crimson"></i>
          <h4 className="text-muted-blue">BloodBank - {title}</h4>
        </div>
        <div className="topbar__content">
          <div className="m-2">
            <Link to="/carts">
              <i
                className="fas fa-cart-plus text-muted-blue"
                style={{ fontSize: '23px' }}
              >
                {' '}
              </i>
            </Link>
          </div>

          <div className="m-2">
            <i
              className="fas fa-bell text-muted-blue"
              style={{ fontSize: '23px' }}
            >
              {' '}
            </i>
          </div>

          <div className="m-2">
            <a href={`/${links}`} className="btn btn-muted-blue">
              {navigate_to}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
