import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return <div className='flex flex-col min-h-screen'>
    <div className='h-24'>
      <Header />
    </div>
    <div className='flex-1 overflow-auto'>
      <Outlet /> 
    </div>
  </div>
}

export default MainLayout
