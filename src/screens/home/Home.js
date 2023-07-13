import { welcome_img } from '../../asset'
import Welcomenav from '../../component/nav/Welcomenav'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <Welcomenav />

      <div className="mt-5 center_flex">
        <div className="flex-1">
          <span className="tag">
            <i className="fas fa-percent mx-1"></i>
            Medical Center
          </span>
          <div className="home-header">
            Get Your Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Autem, fugit.
          </div>

          <div className="home-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima
            corporis esse perferendis ad excepturi, quae quis consequuntur
            placeat aut vel voluptatum quod earum nihil eveniet eum quas enim a.
          </div>

          <button className="welcome-btn">Request An Appointment!</button>
        </div>

        <div className="flex-1">
          <img src={welcome_img} className="img-fluid home-img" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
