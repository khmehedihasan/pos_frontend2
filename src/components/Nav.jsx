import React, { useState } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import { Tooltip } from './Button';

function Nav({bar, setBar, mbar, setmBar}) {

  const [ show, setShow] = useState('hidden');
  const date = new Date();
  const d = date.toLocaleDateString();

  console.log('nav')
  
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
      <div className=' w-28 md:w-60 flex gap-0 md:gap-4 shrink-0 justify-end items-center'>
          <div className=' mt-1 hidden md:block'>{d}</div>
          <Link className=' hover:bg-slate-700/25 hover:rounded-sm py-1 px-2 ' to='/'><i className="fa-solid fa-bell"></i></Link>
          <div onMouseLeave={()=> setShow('hidden')} className=' py-1 px-2 relative '>
            <div onMouseEnter={()=> setShow('block')} className=" w-14 h-14 bg-gray-500 rounded-full bg-[url('../images/user.jpg')] bg-center bg-cover bg-no-repeat"></div>
            <div className={ `${show} z-10 w-52 h-6  absolute top-20 -mt-1 right-1`}>            
            <div className=" absolute -top-5 w-full h-5"></div>
                  <div className=" w-full h-24 p-4 bg-blue-500 before:w-4 before:h-4 before:absolute before:-top-2 before:right-5 before:bg-blue-500 before:rotate-45">
                      <h4 className="text-sm text-white">Admin</h4>
                      <h3 className=" text-md sm:text-lg text-white font-bold">MD. Mehedi Hasan</h3>
                  </div >
                  <div className=" bg-slate-500 ">
                      <NavLink  className=" w-full py-2 pl-3 cursor-pointer hover:bg-yellow-400 hover:text-white block" to="/" ><i className="fa-solid fa-user"></i> My Profile</NavLink>
                      <NavLink  className=" w-full py-2 pl-3 cursor-pointer hover:bg-blue-400 hover:text-white block" to="/" ><i className="fa-solid fa-gear"></i> Settings</NavLink>
                      <button  className=" w-full py-2 pl-3 hover:bg-red-600 hover:text-white text-left"><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                  </div>
              </div>
          </div>
      </div>
    </nav>
  )
}

export default Nav