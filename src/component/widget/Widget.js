import './widget.css'

const Widget = ({ title, icon }) => {
  return (
    <div className="card widget">
      <div className="card-header bg-crimson text-white d-flex align-items-center justify-content-between">
        <span>{title}</span>
        <span>
          <i className={icon}></i>
        </span>
      </div>

      <div>
        <h3 className="font-weight-bolder">$100</h3>
      </div>
    </div>
  )
}

export default Widget
