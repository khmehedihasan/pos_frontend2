import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from './Button';

function Nav({bar, setBar, mbar, setmBar}) {
  const date = new Date();
  const d = date.toLocaleDateString();
  
  function toggleBar(){
    if(bar === '-ml-60'){
      setBar('-ml-0');
    }else{
      setBar('-ml-60');
    }
  }

  function togglemBar(){
    if(mbar === false){
      setmBar(true);
    }else{
      setmBar(false);
    }
  }

  return (
    <nav className='w-full h-16 bg-blue-500 text-white flex items-center justify-between px-4 border-l border-b border-blue-400 '>
        <div className=' w-full mr-2 md:mr-6 flex items-center justify-start md:justify-between'>
            <div onClick={toggleBar} className=' md:hidden hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 mr-3'><i className="fa-solid fa-bars"></i></div>
            <div onClick={togglemBar} className=' hidden md:block hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 mr-3'><i className="fa-solid fa-bars"></i></div>
            <div className=' w-48 flex gap-2'>
                <Tooltip to='/' icon={<i className="fa-solid fa-circle-plus"></i>} />
                <Tooltip to='/' icon={<i className="fa-solid fa-calculator"></i>} />
                <Tooltip to='/' name='POS' icon={<i className="fa-solid fa-table-cells-large"></i>} />
                <Tooltip to='/' icon={<i className="fa-solid fa-money-bill-1"></i>} />
            </div>
        </div>
        <div className=' w-28 md:w-60 flex gap-0 md:gap-4 shrink-0 justify-end'>
            <div className=' mt-1 hidden md:block'>{d}</div>
            <Link className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 ' to='/'><i className="fa-solid fa-bell"></i></Link>
            <Link className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 ' to='/'>Sky Mart</Link>
        </div>

    </nav>
  )
}

export default Nav