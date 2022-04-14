import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from './Button';

function Nav() {
  const date = new Date();
  const d = date.toLocaleDateString();
  return (
    <nav className=' w-full h-16 bg-blue-500 text-white flex items-center justify-between px-4 border-l border-b border-blue-400 '>
        <div className=' flex items-center justify-start '>
            <div className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 mr-3'><i className="fa-solid fa-bars"></i></div>
            <div className=' flex gap-2'>
                <Tooltip to='/' icon={<i className="fa-solid fa-circle-plus"></i>} />
                <Tooltip to='/' icon={<i className="fa-solid fa-calculator"></i>} />
                <Tooltip to='/' name='POS' icon={<i className="fa-solid fa-table-cells-large"></i>} />
                <Tooltip to='/' icon={<i className="fa-solid fa-money-bill-1"></i>} />
            </div>
        </div>
        <div className=' flex gap-4'>
            <div className=' mt-1'>{d}</div>
            <Link className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 ' to='/'><i className="fa-solid fa-bell"></i></Link>
            <Link className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 ' to='/'>Sky Mart</Link>
        </div>

    </nav>
  )
}

export default Nav