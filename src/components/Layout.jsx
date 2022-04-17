import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'

function Layout({chindren}) {
  const [bar, setBar] = useState({bar:'w-0',nav:'w-full'});
  const [mbar, setmBar] = useState(false);
  console.log('layout')
  return (
    <>
          <Sidebar bar={bar} mbar={mbar} />
          <Nav setBar={setBar} bar={bar} setmBar={setmBar} mbar={mbar} />
          <div className={`${mbar?'w-[calc(100%-56px)]':'md:w-3/4 lg:w-4/5 xl:w-10/12'} w-[calc(100%-56px)] transition-all duration-700 float-left overflow-auto h-screen-1 `}>
            <Outlet />
          </div>


    </>

  )
}

export default Layout