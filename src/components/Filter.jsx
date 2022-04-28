import React from 'react'

function Filter({children}) {

  return (
    <div className=' bg-dark-blue-1 m-2 mt-20 -mb-14 p-4 pb-8 rounded-md text-white'>
        <div className=' px-4 py-4 text-2xl'><i className="fa-solid fa-filter"></i> Filter</div>
        <div className=' flex flex-wrap gap-4 '>{children}</div>
    </div>
  )
}

export default Filter;