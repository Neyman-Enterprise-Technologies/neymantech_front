import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

import Header from '../Header/Header'


export default function SiteRoot() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    
    </>
  )
}
