import React, { Component } from 'react'
import { sidebar } from '../../constants/index'
import './sidebar.css'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
  render() {
    return (
      <div className="p-2 mt-2 sidebar">
        {sidebar.map((sidebar, i) => (
          <ul>
            <li className="list__sidebar" key={i}>
              <Link to={`/${sidebar.link}`} className="text-crimson">
                <p className="border_1 text-crimson">
                  <i className={`fas fa-${sidebar.icon}`}></i> {sidebar.name}
                </p>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Sidebar
