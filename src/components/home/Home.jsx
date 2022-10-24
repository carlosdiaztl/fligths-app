import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Mainvuelo from '../mainVuelos/Mainvuelo'



const Home = () => {
  
  return (
    <>
    <Mainvuelo
    />
    <Outlet  />
    </>
  )
}

export default Home