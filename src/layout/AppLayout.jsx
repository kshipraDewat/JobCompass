import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background '></div>
      <main className=' min-h-screen container mx-auto flex flex-col justify-between '>
      <Header/>
      <Outlet/>
      <Footer/>
      </main>
    </div>
  )
}

export default AppLayout
