import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Classification from '../../components/Classification/Classification'
import Tagline from '../../components/Tagline/Tagline'
import Login from '../../components/Login/Login'
import Popular from '../../components/Popular/Popular'
import Footer from '../../components/footer/footer'
import './Home.css';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Classification/>
      <Tagline/>
      <Login/>
      <Popular/>
      <Footer/>
    </div>
  )
}

export default Home
