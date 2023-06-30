import React, { Component } from 'react'
import './product.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'

export const Form = () => {
  return (
    <form action="">
      <div className="form-group">
        <label>Product Name </label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group mt-3">
        <label>Product Category</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group mt-4">
        <label>Product Description</label>
        <textarea
          name=""
          id=""
          className="form-control"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <button className="btn btn-muted-blue mt-4" type="submit">
        Create New Product
      </button>
    </form>
  )
}

export class CreateProduct extends Component {
  render() {
    return (
      <div className="">
        <Topbar
          links="product"
          title="Create Products"
          navigate_to="Products"
        />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <div className="central">
              <div className="row align_tables">
                <div className="col-9">
                  <div className="card" style={{ width: '100%' }}>
                    <div className="card-header bg-crimson text-white font-semibold">
                      Create New Product
                    </div>
                    <div className="card-body">
                      <Form />
                    </div>
                  </div>
                </div>
                <div className="col-3 side_right">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, quo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateProduct
