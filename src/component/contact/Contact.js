import React from 'react'
import Welcomenav from '../nav/Welcomenav'
import { Banner } from '../banner/Banner'
import './contact.css'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <div className="home">
      <Welcomenav />

      <Banner
        title={`Contact Us`}
        desc={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis. Ducimus fugiat ex cumque eligendi mollitia blanditiis modi recusandae officia, laboriosam beatae necessitatibus tenetur similique explicabo deleniti consectetur.`}
        further_desc={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis. Ducimus fugiat ex cumque eligendi mollitia blanditiis modi recusandae officia, laboriosam beatae necessitatibus tenetur similique explicabo deleniti consectetur.`}
      />

      <div className="card mt-5 align-content-center align-items-center w-full justify-content-center w-100">
        <div className="card-header w-full">For Enquiries:</div>
        <div className="card-body w-full">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full p-2"
                placeholder="Business Name"
              />
            </div>

            <div className="form-group mt-5">
              <label htmlFor="">Nature of Question</label>
              <select name="" className="form-select enquiry " id="">
                <option value="">Choose ...</option>
                <option value="">Enquires</option>
                <option value="">Complaints</option>
                <option value="">Bad Delivery</option>
                <option value="">Transaction</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name=""
                id=""
                cols="120"
                rows="10"
                placeholder="Enter Complaint ...."
                className="form-control"
              ></textarea>
            </div>

            <button className="btn btn-secondary w-full btn-lg mt-3">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
