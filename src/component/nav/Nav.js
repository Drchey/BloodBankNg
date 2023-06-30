import React from 'react'
import { profile } from '../../asset'

const Nav = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="">
        <input type="search" className="form-control" name="" id="" />
      </div>

      <div className="d-flex align-items-center">
        <img src={profile} className="profile_img" alt="profile img" />
        <div className="ml-3">
          <p className="text-bold">Welcome, Richey</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
