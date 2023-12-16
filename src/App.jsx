import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Info from './Components/Info'
import OrderInfo from './Components/OrderInfo'
import Orders from './Components/Orders'

function App() {
    return (
    <>
  <Navbar/>   
  <Info/>
  <OrderInfo/>
  <Orders/>
    </>
  )
}

export default App
