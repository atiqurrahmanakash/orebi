import { Link } from 'react-router-dom'
import Container from './Container'
import React from 'react'
import logo from '/SoulSpace.png'
import Li from './Li'
import { MdFacebook } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";



const Footer = () => {
  return (
    <>
        <section id='footer' className='py-[64px'>
            <Container>
                <div className="py-[64px] px-[64px] flex justify-between bg-[#F8F8F8] rounded-[32px]">
                    <Link><img src={logo} alt="aa" /></Link>
                    <ul className='flex gap-x-8'>
                        <Li liText='Home' to='/home'/>
                        <Li liText='Services' to='/services'/>
                        <Li liText='Faq' to='/faq'/>
                        <Li liText='About Us' to='/about'/>
                        <Li liText='Contact Us' to='/contact'/>
                    </ul>
                </div>
                <div className="mt-[10px] py-[20px] px-[64px] flex justify-between  bg-[#F8F8F8] rounded-[16px]">
                    <div className="flex justify-center items-center gap-x-4">
                        <div className="border-[1px] border-[#9ca3af] border-solid rounded-[58px] p-2">
                            <MdFacebook  className='text-[#9CA3AF] text-[21px]'/>
                        </div>
                        <div className="border-[1px] border-[#9ca3af] border-solid rounded-[58px] p-2">
                            <SiInstagram  className='text-[#9CA3AF] text-[21px]'/>
                        </div>
                        <div className="border-[1px] border-[#9ca3af] border-solid rounded-[58px] p-2">
                            <IoLogoYoutube  className='text-[#9CA3AF] text-[21px]'/>
                        </div>
                    </div>
                    <p className='font-normal text-base leading-[150%] text-right text-[#6b7280]'>© 2024 Pigment Agency. All rights reserved.</p>
                    <Link className='py-2 px-8 font-normal text-base leading-[150%] uppercase  border-[1px] border-solid border-[#15355E] text-[#15355E] rounded-[60px]' to='/'>Back to top</Link>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Footer