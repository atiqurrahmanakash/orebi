import React from 'react'
import Container from '../layers/Container'
import love from '../../../public/Icon_heart.png';
import compare from '../../../public/Icon_compare.png';
import cart from '../../../public/Icon_cart (1).png';

const Item = ({productTitle,productImg,productPrice,productTag,productColor}) => {
    return (
        <>
            <div className="item w-[370px] cursor-pointer relative group">
                <div className="tag absolute left-[20px] top-[20px] py-[9px] px-[30px] bg-[#262626]">
                    <h4 className='font-bold text-sm text-[#fff] capitalize'>{productTag? `${productTag}%`:"New"}</h4>
                </div>
                <div className="h-[370px] w-[370px] bg-red-200">
                    <img className='h-full w-full' src={productImg ? productImg : null} alt="productImg" />
                </div>
                <div className="main group-hover:bg-[#FAEBEB] relative">
                    <div className="overlay absolute opacity-0 group-hover:opacity-100 left-0 group-hover:top-[-156px] -top-[60px] transition-all duration-100 group-hover:bg-[#FFFFFF] z-10 w-full h-[156px]">
                        <ul className='text-right pr-[30px] py-[26px] h-full flex flex-col justify-between'>
                            <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Add to Wish List <img className='inline-block pl-4 my' src={love} alt="" /></a></li>
                            <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Compare <img className='inline-block pl-4 my' src={compare} alt="" /></a></li>
                            <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Add to Cart <img className='inline-block pl-4 my' src={cart} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="flex justify-between pt-[24px] pb-[15px] relative z-20">
                        <h2 className='font-dm  font-bold text-xl text-[#262626] capitalize'>{productTitle ? productTitle : null}</h2>
                        <h3>${productPrice?productPrice:null}</h3>
                    </div>
                    <h4 className='font-normal text-base leading-[187%] text-[#767676] font-dm capitalize'>{productColor?productColor:<h1 className='text-transparent'>None</h1>}</h4>
                </div>
            </div>
        </>
    )
}

export default Item