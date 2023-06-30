import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  CreateProduct,
  Dashboard,
  Login,
  Products,
  Register,
  Shop,
} from './screens'
import Carts from './screens/carts/Carts'
import Home from './screens/home/Home'
import About from './screens/about/About'
import Contact from './component/contact/Contact'
import ForgotPassword from './screens/forgot_password/ForgotPassword'
import Dashboard2 from './screens/dashboard/Dashboard2'
import Pending from './screens/jobs/Pending'
import Completed from './screens/jobs/Completed'
import Category from './screens/category/Category'
import Metrics from './screens/metrics/Metrics'
import Order from './screens/orders/Order'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/home_two" element={<Dashboard2 />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/create_product" element={<CreateProduct />} />
        <Route path="/pending_jobs" element={<Pending />} />
        <Route path="/completed_jobs" element={<Completed />} />
      </Routes>
    </Router>
  )
}

export default App
