import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Bannar from './Bannar'
import Footer from './Footer'
import Search from './Search'


const Root = () => {
  return (
    <>
        <Navbar />
        <Search />
        <Bannar/>
        <Outlet />
        <Footer/>
    </>
  )
}
export default Root
