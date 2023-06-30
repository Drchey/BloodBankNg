import { Banner } from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Welcomenav from '../../component/nav/Welcomenav'
import './about.css'

export const Widget = ({ title, icon, desc }) => {
  return (
    <div className="widget card">
      <div className="d-flex items-center justify-content-center">
        <div>
          <i className={icon}></i>
        </div>
        <div>{title}</div>
      </div>
      <div>
        <p className="p-2 text-justify">{desc}</p>
      </div>
    </div>
  )
}
const About = () => {
  return (
    <div className="home">
      <Welcomenav />

      <Banner
        title={`About Us`}
        desc={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis. Ducimus fugiat ex cumque eligendi mollitia blanditiis modi recusandae officia, laboriosam beatae necessitatibus tenetur similique explicabo deleniti consectetur.`}
        further_desc={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis. Ducimus fugiat ex cumque eligendi mollitia blanditiis modi recusandae officia, laboriosam beatae necessitatibus tenetur similique explicabo deleniti consectetur.`}
      />

      <div className="d-flex items-center justify-content-between ">
        <Widget
          title={`Easy Transportation`}
          icon={`fas fa-star`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis`}
        />
        <Widget
          title={`Easy Transportation`}
          icon={`fas fa-star`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis`}
        />
        <Widget
          title={`Easy Transportation`}
          icon={`fas fa-star`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eius obcaecati nam beatae fugiat neque. Aut fugiat odio iusto amet nobis`}
        />
      </div>

      <Footer />
    </div>
  )
}

export default About
