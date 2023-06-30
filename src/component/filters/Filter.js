import './filter.css'

const Filter = () => {
  return (
    <div className="mb-2 d-flex align-content-center justify-content-between">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Here .."
          name=""
          id=""
        />
      </div>
      <div className="d-flex justify-content-between">
        <span>
          <input type="date" className="form-control" name="" id="" />
        </span>

        <span>
          <input type="date" className="form-control" name="" id="" />
        </span>
        <button className="btn btn-muted-blue mx-2">Generate</button>
      </div>
    </div>
  )
}

export default Filter
