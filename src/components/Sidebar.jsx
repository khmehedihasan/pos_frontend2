import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import SideBarToggler from './SideBarToggler';
import MinSideBarToggler from './MinSideBarToggler';

function Sidebar({bar, mbar}) {

    const [active, setActive] = useState(-1);
    console.log('sidebar')

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
            icon: <i className="fa fas fa-address-book  pr-2"></i>,
            links:[
                {name:'Suppliers',link:'/'},
                {name:'Customers',link:'/'},
                // {name:'Customer Groups',link:'/'},
                // {name:'Import Contacts',link:'/'}
            ]
        },
        {
            title:'Products',
            icon: <i className="fa fas fa-cubes pr-2"></i>,
            links:[
                {name:'List Products',link:'/allProduct'},
                {name:'Add Product',link:'/addProduct'},
                // {name:'Print Labels',link:'/'},
                // {name:'Variations',link:'/'},
                // {name:'Import Products',link:'/'},
                // {name:'Import Opening Stock',link:'/'},
                // {name:'Selling Price Group',link:'/'},
                {name:'Add Unit',link:'/addUnit'},
                {name:'All Units',link:'/AllUnit'},
                {name:'Add Category',link:'/addCategory'},
                {name:'All Categories',link:'/allCategory'},
                {name:'Add Brand',link:'/addBrand'},
                {name:'All Brands',link:'/allBrand'},
                // {name:'Warranties',link:'/'},
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
            icon: <i className="fa fas fa-truck  pr-2"></i>,
            links:[
                {name:'List Stock Transfers',link:'/'},
                {name:'Add Stock Transfer',link:'/'}
            ]
        },
        {
            title:'Stock Adjustment',
            icon: <i className="fa fas fa-database  pr-2"></i>,
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
            icon: <i className="fa-solid fa-chart-line  pr-2"></i>,
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
      <>
        {
          (mbar === false)?
          <div className={`${bar} hidden  md:w-1/4 lg:w-1/5 xl:w-2/12 float-left  transition-all duration-700 md:ml-0 h-screen  md:flex flex-col `}>
            <Link to='/dashboard'><div className=' py-4 h-screen-2 bg-blue-500 text-center text-2xl text-white overflow-hidden'>SKY MART</div></Link>
            <div className=' h-full bg-slate-50'>
                <NavLink to='/dashboard' className={({isActive})=>isActive? 'pt-4 no-underline hover:text-blue-300 block pl-6 text-blue-300 ':'pt-4 no-underline hover:text-blue-300 block pl-6 text-black '}  ><i className="fa-solid fa-chart-column pr-2"></i> Dashboard </NavLink>
                {
                    data.map((data,index)=>{
                        return(
                            <SideBarToggler key={index} index={index} activeIndex={active} setActive={setActive} data={data} />
                        )
                    })
                }
            </div>
        </div>
       :
       <div className=' w-[calc(0%+56px)] float-left relative transition-all duration-700 h-screen flex flex-col '>
            <Link to='/dashboard'><div className=' w-[calc(0%+56px)] h-screen-2 py-4 bg-blue-500 text-center text-2xl text-white'>SM</div></Link>
            <div className='  w-[calc(0%+56px)] h-full bg-slate-50'>
                <NavLink to='/dashboard' className={({isActive})=>isActive? 'pt-4 no-underline hover:text-blue-300 block pl-4 text-blue-300 ':'pt-4 no-underline hover:text-blue-300 block pl-4 text-black '}  ><i className="fa-solid fa-chart-column pr-2"></i> </NavLink>
                {
                    data.map((data,index)=>{
                        return(
                            <MinSideBarToggler key={index} index={index} activeIndex={active} setActive={setActive} data={data} />
                        )
                    })
                }
            </div>
        </div>
   } 

        <div className=' w-[calc(0%+56px)] md:hidden float-left relative transition-all duration-700 h-screen flex flex-col '>
            <Link to='/dashboard'><div className=' w-[calc(0%+56px)] h-screen-2 py-4 bg-blue-500 text-center text-2xl text-white'>SM</div></Link>
            <div className='  w-[calc(0%+56px)] h-full bg-slate-50'>
                <NavLink to='/dashboard' className={({isActive})=>isActive? 'pt-4 no-underline hover:text-blue-300 block pl-4 text-blue-300 ':'pt-4 no-underline hover:text-blue-300 block pl-4 text-black '}  ><i className="fa-solid fa-chart-column pr-2"></i> </NavLink>
                {
                    data.map((data,index)=>{
                        return(
                            <MinSideBarToggler key={index} index={index} activeIndex={active} setActive={setActive} data={data} />
                        )
                    })
                }
            </div>
        </div>
      </>



  )
}

export default Sidebar