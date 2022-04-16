import React, { useState } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

function Layout() {
  const [bar, setBar] = useState('-ml-60');
  const [mbar, setmBar] = useState(false);
  return (
    <div className=' w-screen h-screen flex bg-slate-200 overflow-auto '>
        <Sidebar bar={bar} mbar={mbar} />
        <Nav setBar={setBar} bar={bar} setmBar={setmBar} mbar={mbar} />
    </div>
  )
}

export default Layout