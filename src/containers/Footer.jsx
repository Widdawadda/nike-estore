import React from 'react';
import nike from '../assets/images/nike.png';
import { FaInstagram, FaTwitter, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    const col_1 = ["Sneakers", "Basketball Shoes", "Cleats", "Tennis Shoes", "Running Shoes"];
    const col_2 = ["About Us", "Contact Us", "Return Policy", "Privacy Policy", "Payment Policy"];
    const col_3 = ["News","Service","Our Policy","Customer Care","Faq's"];


    return (
        <div className="sticky translate-y-[135rem] h-[24rem]">
            <div className='flex gap-[2.5rem] items-center justify-center mb-[3rem]'>
                <h1 className='text-[2.5rem] font-michroma'>Sign Up for <span className='text-primary-red'>Updates</span><br /> & Newsletters</h1>
                <input type="text" placeholder='Type Your Email' className='focus:outline-none p-4 px-6 bg-gradient-to-r from-primary-blue to-primary-red opacity-50 h-[3.5rem] w-[27rem] rounded-md placeholder:text-white placeholder:font-semibold' />
                <button className="bg-gradient-to-r from-primary-blue to-primary-red rounded-r-md -ml-[6rem] z-10 py-4 px-7 text-center">Subscribe Now</button>
            </div>
            <div className="sticky w-full h-[24rem] border-t-neutral-400 border-t-[1px] flex flex-row gap-[15rem] items-center justify-center">
                <div className='flex flex-col gap-7 -ml-[5rem]'>
                    <img src={nike} alt="Nike logo" className='w-[16rem] -ml-8 -mb-12' />
                    <p>Just Do It.</p>
                    <ul className='relative flex gap-5'>
                        <li className="relative list-none"><a href="https://github.com/" className='no-underline'><FaFacebookSquare className='text-[1.75rem] text-neutral-200'/></a></li>
                        <li className="relative list-none"><a href="https://github.com/" className='no-underline'><FaInstagram className='text-[1.75rem] text-neutral-200'/></a></li>
                        <li className="relative list-none"><a href="https://github.com/" className='no-underline'><FaTwitter className='text-[1.75rem] text-neutral-200'/></a></li>
                    </ul>
                </div>

                <div className='flex flex-row gap-[10rem]'>
                    <div className="flex flex-col gap-[1rem]">
                        <h1 className="text-lg">Find Product</h1>
                        {col_1.map((span, id) => (
                            <span key={id} className="text-sm font-semibold hover:opacity-70 hover:underline transition-all cursor-pointer">{span}</span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                        <h1 className="text-lg">Get Help</h1>
                        {col_2.map((span) => (
                            <span className="text-sm font-semibold hover:opacity-70 hover:underline transition-all cursor-pointer">{span}</span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                        <h1 className="text-lg">About Us</h1>
                        {col_3.map((span) => (
                            <span className="text-sm font-semibold hover:opacity-70 hover:underline transition-all cursor-pointer">{span}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p className='text-sm text-neutral-300 text-center mb-3'>© {new Date().getFullYear()} Me, Inc. All Rights Reserved</p>
            </div>
        </div>
)
}

export default Footer