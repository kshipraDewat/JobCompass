import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background '></div>
      <main className=' min-h-screen container flex flex-col justify-between'>
      <div>
      <Header/>
      <Outlet/>

      </div>
      <Footer/>
      </main>
    </div>
  )
}

export default AppLayout
