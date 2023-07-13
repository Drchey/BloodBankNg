import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import './category.css'

const Category = () => {
  return (
    <div>
      <Topbar title={'Welcome'} navigate_to="Metrics" link={'metrics'} />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="central">
            <div className="category">
              <div className="card card_crud">
                <div className="card-header bg-crimson text-white fw-bold">
                  Category
                </div>
                <div className="card-body">
                  <div>
                    <div className="form-group">
                      <label>Category Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        className="form-control"
                        id=""
                        cols="30"
                        rows="5"
                      ></textarea>

                      <button className="w-full btn btn-muted-blue mt-4">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card  card_listings">
                <div className="card-header bg-crimson text-white fw-bold">
                  Category Listings
                </div>
                <div className="card-body">
                  <table className="table table-responsive table-hover">
                    <thead className="bg-crimson text-white p-2">
                      <th>Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Blood Products</td>
                        <td>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos.
                        </td>
                        <td>
                          <div className="d-flex align-content-between justify-content-between">
                            <button className="btn btn-muted-blue">
                              <i className="fas fa-edit"></i>
                            </button>

                            <button className="btn btn-danger">
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>Blood Products</td>
                        <td>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dignissimos.
                        </td>
                        <td>
                          <div className="d-flex align-content-between justify-content-between">
                            <button className="btn btn-muted-blue">
                              <i className="fas fa-edit"></i>
                            </button>

                            <button className="btn btn-danger">
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
