import React, { Component } from 'react'
import './product.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import { logs } from '../../constants/data'

export class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    console.log(' ----------------------------------------')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
          isLoading: false,
        })
      })
  }
  render() {
    const { data, isLoading } = this.state

    return (
      <div className="">
        <Topbar
          links="create_product"
          title="Products"
          navigate_to="New Products"
        />

        <div className="main-content">
          <Sidebar />
          <div className="content">
            <div className="central">
              {isLoading && (
                <h4 className="text-semibold text-info">Loading ...</h4>
              )}
              {data ? (
                <div className="row align_tables">
                  <div className="col-9">
                    <table className="table table-responsive border rounded-2">
                      <thead className="bg-crimson text-white">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Body</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                              <span className="d-flex justify-content-around ">
                                <a href="#!" className="btn btn-primary m-2">
                                  <i className="fas fa-edit"></i>
                                </a>
                                <a href="#!" className="btn btn-danger m-2">
                                  <i className="fas fa-trash"></i>
                                </a>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-3">
                    <h5 className="text-right text-muted-blue fw-bolder mb-3">
                      Latest Logs
                    </h5>
                    {logs.map((item) => (
                      <div>
                        {item.info}
                        <p className="mt-4 fw-bold align-right text-sm-right text-crimson">
                          {item.date}
                        </p>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
