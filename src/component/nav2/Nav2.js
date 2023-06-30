import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div className="d-flex justify-content-between align-content-between">
      <div>
        <span className="fw-light">LARAMEDICS HOSPITAL PLC.</span>
      </div>

      <Link to="/shop">
        <button className="btn btn-muted-blue fw-bold">GO TO SHOP</button>
      </Link>
    </div>
  )
}

export default Nav2
