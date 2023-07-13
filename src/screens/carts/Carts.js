import { useState } from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import { listings } from '../../constants/data'
import './carts.css'

const Carts = () => {
  const [count, useCount] = useState(0)
  return (
    <div>
      <Topbar
        links="create_product"
        title="Products"
        navigate_to="New Products"
      />

      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="carts d-flex cart-flex p-3">
            <div className="shop-items cart-listing h-auto p-3">
              <div className="d-flex align-content-center justify-content-between">
                <h3 className="fw-bold text-muted-blue">Shopping Cart</h3>
                {/* <span className="fw-light">Price</span> */}
              </div>

              <h5 className="mt-3 fw-medium text-crimson">10 item(s) Added</h5>
              <hr />

              <div className="">
                {listings.map((listing, i) => (
                  <div className="w-full my-3 card p-2" key={i}>
                    <div className="d-flex">
                      <img src={listing.img} className="item-img ml-5" alt="" />
                      <div className={`item-content m-1`}>
                        <div className="item-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Esse, quasi.
                        </div>

                        <p className="item-stock fw-light">In Stock</p>
                        <div className="d-flex flex-column items-center  justify-content-between">
                          <div>
                            <button className="btn btn-white">-</button>
                            <span>{count}</span>
                            <button className="btn btn-white">+</button>
                          </div>
                          <div className="fw-light">
                            Number of Items Available: 100 {listing.unit}(s)
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="fw-light text-danger">
                          {listing.price}
                        </h1>
                      </div>
                      <hr />
                    </div>
                    <div className="alert-primary p-2 d-flex items-center justify-content-between">
                      <div>
                        <i className="fas fa-trash cursor-pointer "></i>
                      </div>
                      <div>
                        <i className="fas fa-info-circle cursor-pointer "></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="receipts p-3 ">
              <div className="">
                <h4 className="card_header fw-bold text-muted-blue">
                  Price Details
                </h4>
              </div>

              <div className="card_body">
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-content-center justify-content-between mb-2">
                    <b>Total</b> <span>N 100, 000</span>
                  </li>
                  <li className="d-flex align-content-center justify-content-between mb-2">
                    <b>Delivery Charge</b> <span> + 450.00</span>
                  </li>
                  <li className="d-flex align-content-center justify-content-between">
                    <b>Delivery</b> <span>Vehicle Transport</span>
                  </li>

                  <hr />

                  <button className="mt-5 btn btn-lg w-full btn-outlined-muted-blue">
                    Proceed To Order
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts
