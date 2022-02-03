import Topbar from './components/topbar/topbar'
import './app.css'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './pages/userList/userList'
import User from './pages/user/user'
import NewUser from './pages/newUser/newUser'
import ProductList from './pages/productList/productList'
import NewProduct from './pages/newProduct/newProduct'
import Product from './pages/product/product'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
