import React, { useEffect, useRef, useState }from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// import OutsideClick from '../hooks/OutsideClick';
import SideBarToggler from './SideBarToggler';

function Sidebar() {

    const [active, setActive] = useState(-1);
    const [show, setShow] = useState('-ml-80');
    const outClick = useRef(null);
    // const outSideClick = OutsideClick(outClick);

    // useEffect(()=>{
    //     if(outSideClick){
    //         setShow('-ml-80')
    //     }
    // },[outSideClick]);


    const data = [
        {
            title:'User Management',
            icon: <i className="fa fas fa-users pr-2"></i>,
            links:[
                {name:'Users',link:'/'},
                {name:'Roles',link:'/d'},
                {name:'Sales Commission Agents',link:'/'}
            ]
        },
        {
            title:'Contacts',
            icon: <i className="fa fas fa-address-book"></i>,
            links:[
                {name:'Suppliers',link:'/'},
                {name:'Customers',link:'/'},
                {name:'Customer Groups',link:'/'},
                {name:'Import Contacts',link:'/'}
            ]
        },
        {
            title:'Products',
            icon: <i className="fa fas fa-cubes pr-2"></i>,
            links:[
                {name:'List Products',link:'/'},
                {name:'Add Product',link:'/'},
                {name:'Print Labels',link:'/'},
                {name:'Variations',link:'/'},
                {name:'Import Products',link:'/'},
                {name:'Import Opening Stock',link:'/'},
                {name:'Selling Price Group',link:'/'},
                {name:'Units',link:'/'},
                {name:'Categories',link:'/'},
                {name:'Brands',link:'/'},
                {name:'Warranties',link:'/'},
            ]
        },
        {
            title:'Purchases',
            icon: <i className="fa fas fa-arrow-circle-down pr-2"></i>,
            links:[
                {name:'List Purchases',link:'/'},
                {name:'Add Purchase',link:'/'},
                {name:'List Purchase Return',link:'/'}
            ]
        },
        {
            title:'Sell',
            icon: <i className="fa fas fa-arrow-circle-up pr-2"></i>,
            links:[
                {name:'All sales',link:'/'},
                {name:'Add Sale',link:'/'},
                {name:'List POS',link:'/'},
                {name:'POS',link:'/'},
                {name:'Add Draft',link:'/'},
                {name:'List Drafts',link:'/'},
                {name:'Add Quotation',link:'/'},
                {name:'List quotations',link:'/'},
                {name:'List Sell Return',link:'/'},
                {name:'Shipments',link:'/'},
                {name:'Discounts',link:'/'},
                {name:'Import Sales',link:'/'}
            ]
        },
        {
            title:'Stock Transfers',
            icon: <i className="fa fas fa-truck "></i>,
            links:[
                {name:'List Stock Transfers',link:'/'},
                {name:'Add Stock Transfer',link:'/'}
            ]
        },
        {
            title:'Stock Adjustment',
            icon: <i className="fa fas fa-database"></i>,
            links:[
                {name:'List Stock Adjustments',link:'/'},
                {name:'Add Stock Adjustment',link:'/'}
            ]
        },
        {
            title:'Expenses',
            icon: <i className="fa fas fa-minus-circle pr-2"></i>,
            links:[
                {name:'List Expenses',link:'/'},
                {name:'Add Expense',link:'/'},
                {name:'Expense Categories',link:'/'}
            ]
        },
        {
            title:'Reports',
            icon: <i className="fa-solid fa-chart-line"></i>,
            links:[
                {name:'Profit / Loss Report',link:'/'},
                {name:'Product Purchase Report',link:'/'},
                {name:'Sales Representative Report',link:'/'},
                {name:'Register Report',link:'/'},
                {name:'Expense Report',link:'/'},
                {name:'Sell Payment Report',link:'/'},
                {name:'Items Report',link:'/'},
                {name:'Purchase & Sale',link:'/'},
                {name:'Trending Products',link:'/'},
                {name:'Stock Adjustment Report',link:'/'},
                {name:'Stock Report',link:'/'},
                {name:'Customer Groups Report',link:'/'},
                {name:'Supplier & Customer Report',link:'/'},
                {name:'Tax Report',link:'/'},
                {name:'Activity Log',link:'/'}
            ]
        },
        {
            title:'Settings',
            icon: <i className="fa fas fa-cog pr-2"></i>,
            links:[
                {name:'Business Settings',link:'/'},
                {name:'Business Locations',link:'/'},
                {name:'Invoice Settings',link:'/'},
                {name:'Barcode Settings',link:'/'},
                {name:'Barcode Settings',link:'/'},
                {name:'Receipt Printers',link:'/'},
                {name:'Tax Rates',link:'/'}
            ]
        },
    ]
  return (
    <div className=' w-60 h-screen shrink-0 flex flex-col'>
        <Link to='/'><div className=' w-full py-4 bg-blue-500 text-center text-2xl text-white'>SKY MART</div></Link>
        <div className=' w-60 h-full bg-slate-50'>
        <NavLink to='/dashboard'  onClick={()=> setShow('-ml-80')} className={({isActive})=>isActive? 'pt-4 no-underline hover:text-blue-300 block pl-6 text-blue-300 ':'pt-4 no-underline hover:text-blue-300 block pl-6 text-black '}  ><i className="fa-solid fa-chart-column pr-2"></i> Dashboard </NavLink>
            {
                data.map((data,index)=>{
                    return(
                        <SideBarToggler key={index} index={index} activeIndex={active} setShow={setShow} setActive={setActive} data={data} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar