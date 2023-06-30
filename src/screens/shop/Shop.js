import Listing from '../../component/listings/Listing'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'
import './shop.css'

export const Shop = () => {
  return (
    <div>
      <Topbar
        links="create_product"
        title="Products"
        navigate_to="New Products"
      />

      <div className="main-content">
        <Sidebar />
        <div className="content p-4">
          <div className="header-bar">
            <div className=" text-muted-blue">
              <h4 className="headerTitle">Results</h4>
              <p>
                Check Price and Other Details are can be viewed by clicking the
                icon at the top of each item.
              </p>
            </div>

            <div className="flex flex-row">
              <b>
                Sort: <i className="fw-light">Categories</i>
              </b>
              <select
                name=""
                className="form-select "
                style={{ backgroundColor: '#eee' }}
                id=""
              >
                <option value="all">All</option>
                <option value="blood">Blood</option>
                <option value="blood">Blood Related Products</option>
              </select>
            </div>
          </div>

          <Listing />
        </div>
      </div>
    </div>
  )
}

// export default Shop
