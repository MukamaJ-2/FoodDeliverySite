import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>
      }
      <div className='app'>
        <NavBar setShowLogin={setShowLogin}/>
        <hr className='liner'/>
        <Routes>
          <Route path="/"  exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/order"  element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App