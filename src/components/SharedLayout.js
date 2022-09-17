import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default Home
