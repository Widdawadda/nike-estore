import React from 'react'
import Card from '../components/Card'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Products = () => {
    return (
        <div id='products' className="translate-y-[40rem] translate-x-28 relative">
            <h1 className='absolute font-michroma font-[900] z-20 text-[2.5rem] inline-block'>Popular</h1>
            <h1 className='absolute text-primary-red font-michroma font-[900] z-20 text-[2.5em] inline-block translate-x-[90%]'>Products</h1>
            <div className='absolute filter blur-[80px] opacity-20 right-4 bg-primary-red rounded-full w-[28rem] h-[27rem] translate-x-[5rem] -translate-y-[15rem] -z-10'></div>
            <div className='absolute filter blur-[80px] opacity-20 bg-primary-blue rounded-full w-[27rem] h-[24rem] -z-10 -translate-x-[17rem] translate-y-[14.25rem]'></div>
            <div>
                <button href="https://nike.com" className="absolute translate-y-4 w-[2rem] text-[1.25rem] rounded-md m-auto translate-x-[75rem] h-[2rem] bg-gradient-to-r from-primary-blue to-primary-red"><HiOutlineArrowNarrowRight className='absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer' /></button>
                <button href="https://nike.com" className="absolute translate-y-4 rotate-180 w-[2rem] text-[1.25rem] rounded-md m-auto translate-x-[71.5rem] h-[2rem] bg-transparent border-neutral-400 border-[2.2px] text-neutral-400 "><HiOutlineArrowNarrowRight className='absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer' /></button>
            </div>
            <div className="flex gap-[1rem]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
)
}

export default Products