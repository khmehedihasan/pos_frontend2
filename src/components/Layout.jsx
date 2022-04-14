import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className=' w-screen h-screen flex bg-slate-200 '>
        <Sidebar />
        <Nav />
    </div>
  )
}

export default Layout