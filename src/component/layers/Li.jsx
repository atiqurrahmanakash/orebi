import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({liText,to}) => {
  return (
    <>
        <li>
            <NavLink  className='font-normal text-sm text-[#767676] font-dm' to={to}>{liText}</NavLink>
        </li>
    </>
  )
}

export default Li