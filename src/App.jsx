import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'

import {
  BrowserRouter as Router,
  
  Routes,
  Route ,
  Link
} from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PrivateRoute from './components/privateRoute';



function App() {
  

  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<ProductList/>}/>
          <Route path="/product/:brand" element={<ProductList/>}/>
          <Route path="/product/:filterType/:filterValue" element={<ProductList />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<PrivateRoute element={<Cart />} />}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
