import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarToggler({data, index, activeIndex, setActive, setShow}){


    function active(){
        if(activeIndex === index){
            setActive(-1)
        }
        if(activeIndex !== index){
            setActive(index)
        }
    }


    return(
        <div className={` ease-in-out duration-700 ${(activeIndex === index)?'relative pb-3 bg-zinc-200/50 before:absolute before:w-1 before:h-full before:bg-blue-600 before:rounded-tr-md before:rounded-br-md':''}`}>
        <div onClick={()=> active()} className={`w-full text-md pl-6 cursor-pointer hover:bg-zinc-200/50 ${(activeIndex === index)? 'text-gray-600 font-bold p-1':'p-2 text-gray-600 '}`}>{data.icon} {data.title}</div>
        <div className={`ease-in-out duration-700 ${(activeIndex === index)? 'h-max' :'hidden' } w-full `}>
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

export default SideBarToggler;