import React from 'react'
import Container from '../layers/Container'
// import logo from '../../../public/SoulSpace.png'
import logo from '/logo.png'
import { NavLink } from 'react-router-dom'
import Li from './Li'


const navbar = () => {
  return (
    <>
      <nav className='py-8'>
        <Container className='flex justify-between items-center'>
          <div className="flex items-center w-full">
              <NavLink to='/'>
                <img src={logo} alt="aa" />
              </NavLink>
              <ul className='flex gap-x-[40px] mynav w-full justify-center'>
                <Li liText='Home' to='/home'/>
                <Li liText='Shop' to='/services'/>
                <Li liText='About' to='/faq'/>
                <Li liText='Contacts' to='/about'/>
                <Li liText='Journal' to='/contact'/>
              </ul>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default navbar