import React from 'react';
import { GiMedal, GiMoneyStack } from 'react-icons/gi';
import { TbShoppingCartPlus } from 'react-icons/tb';
import shoe_pair from '../assets/images/shoe-pair.png';

const ProductDetails = () => {
    return (
        <div className='relative flex flex-col gap-8 translate-y-[80rem] mt-[10rem] translate-x-28'>
            <div className="absolute left-[5rem]">
                <div className='absolute filter blur-[80px] opacity-20 left-4 bg-primary-red rounded-full w-[30rem] h-[28rem] -translate-x-[22rem] -translate-y-[5rem] -z-10'></div>
                <h3 className='text-primary-red'>Product Details</h3>
                <h1 className="text-[2.5rem] font-michroma">Get to Know Our <br/> Feature <span className='text-primary-red'>Product</span></h1>
                <p className="text-neutral-300 text-[.75rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis <br/> repudiandae labore sunt! Ad aliquid quaerat odit iusto rem alias eum.</p>
                <div>
                    <div className="relative inline-block text-center mr-8 bg-gradient-to-r from-primary-blue to-primary-red text-[2rem] rounded-md h-[2.75rem] w-[2.75rem]">
                        <GiMedal className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center' />
                    </div>
                    <div className="inline-block mt-4 mb-4">
                        <h3 className="font-bold mb-2">Best Quality Shoes</h3>
                        <p className="text-neutral-300 text-[0.75rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos <br/>rerum minus saepe, vitae aspernatur eius!</p>
                    </div>
                </div>
                <div>
                    <div className="relative inline-block mr-8 bg-gradient-to-r from-primary-blue to-primary-red text-[2rem] rounded-md h-[2.75rem] w-[2.75rem]">
                        <GiMoneyStack className='absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center' />
                    </div>
                    <div className="inline-block mt-4">
                        <h3 className="font-bold mb-2">Best Pricing</h3>
                        <p className="text-neutral-300 text-[0.75rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos <br/>rerum minus saepe, vitae aspernatur eius!</p>
                    </div>
                </div>
            </div>
            <div className="absolute right-[20rem] w-[23rem] h-[23.85rem]">
                <div>
                    <div className="w-[23rem] rounded-t-xl h-[18rem] bg-gradient-to-r from-dark-blue to-dark-red">
                        <img src={shoe_pair} alt="Shoe pair" className="w-[23rem] translate-y-[10%]" />
                    </div>
                    <div className="font-michroma bg-gradient-to-r w-[23rem] rounded-b-xl h-[5.85rem] from-primary-blue to-primary-red">
                        <div className="ml-[1rem] mt-[1rem] absolute flex flex-col gap-[0.5rem]">
                            <h2 className='text-[1.25rem]'>Nike Watch Series 7</h2>
                            <p><span className='text-primary-red line-through'>$50.20</span>  $30.20</p>
                        </div>
                        <div className="absolute bg-white inline-block rounded-lg p-1 bottom-3 right-3 cursor-pointer">
                            <TbShoppingCartPlus className="text-primary-blue" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default ProductDetails