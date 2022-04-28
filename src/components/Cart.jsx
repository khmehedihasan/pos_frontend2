import React from 'react'

function CartGreen({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-green-300/80  relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-green-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-green-500 '>{icon}</div>
        <div className=" text-3xl text-center text-green-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartCyan({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-cyan-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-cyan-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-cyan-500 '>{icon}</div>
        <div className=" text-3xl text-center text-cyan-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartLime({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-lime-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-lime-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-lime-500 '>{icon}</div>
        <div className=" text-3xl text-center text-lime-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartTeal({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-teal-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-teal-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-teal-500 '>{icon}</div>
        <div className=" text-3xl text-center text-teal-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartYellow({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-yellow-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-yellow-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-yellow-500 '>{icon}</div>
        <div className=" text-3xl text-center text-yellow-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartOrange({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-orange-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-orange-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-orange-500 '>{icon}</div>
        <div className=" text-3xl text-center text-orange-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartPink({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-pink-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-pink-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-pink-500 '>{icon}</div>
        <div className=" text-3xl text-center text-pink-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartFuchsia({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-fuchsia-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-fuchsia-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-fuchsia-500 '>{icon}</div>
        <div className="text-3xl text-center text-fuchsia-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartPurple({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-purple-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-purple-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-purple-500 '>{icon}</div>
        <div className=" text-3xl text-center text-purple-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartViolet({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-violet-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-violet-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-violet-500 '>{icon}</div>
        <div className=" text-3xl text-center text-violet-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}

function CartIndigo({ title, value, icon}) {
  return (
    <div className="w-64 lg:w-80 h-52 bg-indigo-300/80 relative flex flex-col items-center justify-center rounded-md grow">
        <div className=" absolute top-0 left-0 w-full h-10 rounded-tl-md rounded-tr-md  text-lg text-center font-bold bg-indigo-400 ">{title}</div>
        <div className=' text-3xl scale-150 text-indigo-500 '>{icon}</div>
        <div className=" text-3xl text-center text-indigo-500 font-bold pt-4" >{value} ৳</div>
     </div>
  )
}



export {CartGreen, CartCyan, CartLime, CartTeal, CartYellow, CartOrange, CartPink, CartFuchsia, CartPurple, CartViolet, CartIndigo};