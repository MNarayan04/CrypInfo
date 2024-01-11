import React,{ useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Coins from './Component/Coins'
import Exchange from './Component/Exchange'
import CoinDetail from './Component/CoinDetail'
import Footer from './Component/Footer'

function App() {
 
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coins/:id" element={<CoinDetail/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
