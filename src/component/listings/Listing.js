import { listings } from '../../constants/data'
import './listing.css'

const Listing = () => {
  return (
    <div className="listings">
      {listings.map((listing, i) => (
        <div className="listing m-3" key={listing.index}>
          <img
            src={listing.img}
            className="img-fluid my-3 object-center object-fit-contain listing-img"
            alt=""
          />
          <h2 className={``}>{listing.name}</h2>
          <p>{listing.desc}</p>
          <span className="listing-price">
            <h1 className="text-crimson">${listing.price}</h1>
            <div className="d-flex justify-content-between">
              <p>
                per <span className="fw-bold fs-5">{listing.unit}</span>
              </p>
            </div>
          </span>
          <button className="mt-5 btn w-full btn-muted-blue py-3">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Listing
