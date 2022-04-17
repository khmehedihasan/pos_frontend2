import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'

function Layout({chindren}) {
  const [bar, setBar] = useState('-ml-60');
  const [mbar, setmBar] = useState(false);
  console.log('layout')
  return (
    <>
      <div className=' w-screen h-screen flex bg-slate-200 overflow-hidden float-left'>
        <Sidebar bar={bar} mbar={mbar} />
        <div className=' w-full h-full '>
          <Nav setBar={setBar} bar={bar} setmBar={setmBar} mbar={mbar} />
          <div className=' w-full h-screen overflow-auto '>
            <Outlet />
          </div>
        </div>
      </div>

    </>

  )
}

export default Layout