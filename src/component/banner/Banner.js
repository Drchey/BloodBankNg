export const Banner = ({ title, desc, further_desc }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{further_desc}</p>
      </div>
    </div>
  )
}
