import React from 'react';
import { NavLink } from 'react-router-dom';

function MinSideBarToggler({data, index, activeIndex, setActive}){


    function active(){
        if(activeIndex === index){
            setActive(-1)
        }
        if(activeIndex !== index){
            setActive(index)
        }
    }


    return(
        <div onMouseLeave={()=> setActive(-1)} className={` ease-in-out duration-700 ${(activeIndex === index)?' relative pb-3 bg-gray-300 before:absolute before:w-1 before:h-full before:bg-blue-600 before:rounded-tr-md before:rounded-br-md':''}`}>
        <div onMouseEnter={()=> active()} className=' p-2 pl-4 ' >{data.icon}</div>
        <div className={`ease-in-out duration-700 ${(activeIndex === index)? 'h-max' :'hidden' } w-60 ml-14 top-0 bg-gray-300 absolute z-10 overflow-visible `}>
            <div className=' pl-4 text-base'>{data.title}</div>
            {
                data.links.map((link,indx)=>{
                    return(
                        <NavLink to={link.link} key={indx} className={" no-underline text-zinc-500 hover:text-black block pl-7"} ><span className=' text-lg'>→</span> <span className=' text-sm'>{link.name}</span></NavLink>
                    )
                })
            }
        </div>
    </div>
    )
}

export default MinSideBarToggler;