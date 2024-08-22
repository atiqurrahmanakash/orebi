import React, { useState } from 'react'
import Container from '../layers/Container'
import Cata from '../../../public/cata.png'
import Searchi from '../../../public/search.png'
import Cart from '../../../public/cart.png'
import Down from '../../../public/down.png'
import Prof from '../../../public/prof.png'
import { Link } from 'react-router-dom'


const Search = () => {
  let none = "none";
  let [dnone,dsetNone] = useState(none);

  let flag = 0;
  let profile = () => {
    if(flag == 0){
      let flex = "flex";
      dsetNone(flex);
      flag = 1;
    }else{
      dsetNone(none);
      flag = 0;
    }
  }

  return (
    <div className="bg-[#f5f5f3]">
        <Container className="flex justify-between items-center py-6">
            <div className="flex gap-x-3 items-center">
                <span><img src={Cata} alt="" /></span>
                <h4 className='font-normal text-sm text-[#262626] font-dm'>Shop by Category</h4>
            </div>
            <div className="flex bg-[#fff] py-4 px-[21px] gap-x-[436px] items-center">
                <h4 className='font-normal text-sm text-[#c4c4c4] font-dm'>Search Products</h4>
                <img src={Searchi} alt="a" />
            </div>
            <div className="flex items-center gap-x-10">
                <div type='button' className="flex items-center gap-x-[10px] relative cursor-pointer" onClick={profile} >
                  <img src={Prof} alt="" />
                  <img className='down' src={Down} alt="" />
                  <div className="bg-red-400 w-[200px] flex flex-col items-center absolute right-0 top-8 z-[999999] profile" style={{display: dnone}}>
                      <div className="bg-black w-full flex justify-center">
                        <h3 className='py-4 text-[#fff] font-bold text-sm text-center font-dm'>My Account</h3>                    
                      </div>
                      <div className="bg-white w-full flex justify-center">
                        <h3 className='py-4 font-dm font-normal text-sm text-center text-[#262626]'>Log Out</h3>                    
                      </div>
                  </div>
                </div>
                <div className="">
                  <img src={Cart} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Search