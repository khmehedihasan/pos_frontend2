import React from 'react'
import { Link } from 'react-router-dom'

const Tooltip = ({to, name, icon}) => {
  return (
    <Link className=' bg-green-400 hover:bg-green-500 py-1 px-2' to={to}>{icon} {name}</Link> 
  )
}

export {Tooltip};