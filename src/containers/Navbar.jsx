import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import nike from "../assets/images/nike.png";

const Navbar = () => {
    return (
    <div className='relative'>
        <img src={nike} alt="Nike Logo" className="absolute w-[18rem] -translate-y-[38%]" />
        <ul className='flex gap-8 flex-row justify-center my-[2.5rem]'>
            <li><a href="#" className='text-neutral-300 text-[1.15rem] cursor-pointer hover:opacity-70 transition-all'>Home</a></li>
            <li><a href="#about" className='text-neutral-300 text-[1.15rem] cursor-pointer hover:opacity-70 transition-all'>About</a></li>
            <li><a href="#products" className='text-neutral-300 text-[1.15rem] cursor-pointer hover:opacity-70 transition-all'>Product</a></li>
            <li><a href="#testimonial" className='text-neutral-300 text-[1.15rem] cursor-pointer hover:opacity-70 transition-all'>Testimonial</a></li>
            <li><a href="#shop" className='text-neutral-300 text-[1.15rem] cursor-pointer hover:opacity-70 transition-all'>Shop</a></li>
        </ul>

        <div className='absolute filter blur-3xl opacity-20 top-0 bg-primary-red rounded-full left-0 w-[32rem] h-[27rem] -z-10 -translate-x-[30%] -translate-y-16'></div>
        <div className='absolute filter blur-3xl opacity-20 top-0 bg-primary-blue rounded-full right-0 w-[30rem] h-[24rem] -z-10 translate-x-[30%] -translate-y-16'></div>

        <IconContext.Provider value={{ color: "white" }}>
            <div>
                <FiSearch className='absolute right-[17em] top-0 translate-y-1 text-[1.25rem] hover:cursor-pointer hover:opacity-70 transition-all' />
                <AiOutlineShoppingCart className='absolute right-[15em] top-0 translate-y-1 text-[1.25rem] hover:cursor-pointer hover:opacity-70 transition-all' />
            </div>
        </IconContext.Provider>

        <a href="#contact" className='absolute font-bold right-32 -top-8 translate-y-6 bg-gradient-to-r from-primary-blue to-primary-red pt-[.7rem] text-[.9rem] rounded-lg w-[7.25rem] h-[2.75rem] text-center'>Contact Us</a>
    </div>
)
}

export default Navbar