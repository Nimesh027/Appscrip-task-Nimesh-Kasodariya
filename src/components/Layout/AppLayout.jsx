import React from 'react'
import Header from '../UserInterface/Header'
import Footer from '../UserInterface/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div className='main_container'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
