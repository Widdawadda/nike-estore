import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import shoe from '../assets/images/shoe.png';
import nike from '../assets/images/nike.png';


const Hero = () => {
    const [rating, setRating] = useState(5);

    return (
        <div className="-translate-x-16 relative whitespace-nowrap">
            <div className="translate-x-16">
                <h1 className='absolute font-michroma font-[900] z-20 translate-y-24 translate-x-28 text-[3.5rem]'>Summer</h1>
                <h1 className='absolute font-michroma font-[900] z-20 translate-y-[10.5rem] translate-x-28 text-[3.5rem]'>Collections</h1>
                <h1 className='absolute text-primary-red font-michroma font-[900] z-20 translate-y-[15rem] translate-x-28 text-[3.5rem]'>2022</h1>
                <p className='absolute z-20 translate-y-[21rem] translate-x-28 opacity-80'>The styles of shoe available to customers are <br />endless and profits also endless</p>
                <a href="https://www.nike.com" className='absolute font-bold bg-gradient-to-r from-primary-blue to-primary-red inline-block translate-y-[25.5rem] translate-x-28 py-4 px-6 rounded-md' target="_blank" rel="noreferrer">Shop Now <BsFillArrowRightCircleFill className='inline-block ml-1 -mt-1' /></a>
                <div>
                    <p className="text-primary-red font-[700] text-xl translate-y-[30.5rem] translate-x-[30rem] inline-block">4.9 <span className='text-xs font-[400] text-neutral-200 translate-x-[.4rem] -translate-y-[.35rem] inline-block'>|</span></p>
                    <div className="absolute flex flex-row gap-1 translate-y-[29rem] translate-x-[33.35rem]">
                        {[...Array(5)].map((star, i) => { 
                            const ratingValue = i + 1;

                            return (
                                <label key={i}>
                                    <input 
                                        type="radio" 
                                        name="rating transition-all" 
                                        className='hidden' 
                                        value={ratingValue} 
                                        onClick={() => setRating(ratingValue)} />
                                    <FaStar color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} className='cursor-pointer w-[.9rem] transition-all' />
                                </label>
                            )
                        } )}
                    </div>
                    <p className="opacity-80 text-sm font-[500] translate-y-[30.75rem] translate-x-[30rem]">120k Total Review</p>
                </div>
            </div>
            <div className="select-none">
                <img src={shoe} alt="Nike Shoe" className='absolute select-none w-[45rem] right-[15rem] -translate-y-[20rem] -rotate-[25deg]' />
                <img src={nike} alt="Nike logo" className="absolute select-none w-[24rem] translate-x-[24rem] -translate-y-12 opacity-20" />
                <h1 className='absolute select-none -z-10 font-[500] right-[12rem] text-[20rem] text-black -translate-y-[5rem] text-stroke'>NIKE</h1>
            </div>
            <div className="absolute z-10 py-[.75rem] pl-[1.15rem] bg-neutral-400 right-7 -translate-x-[17rem] translate-y-[22.5rem] bg-opacity-[.30] filter backdrop-filter backdrop-blur-lg rounded-lg text-left w-[13.25rem]">
                <div className="absolute rotate-[135deg] w-6 h-6 rounded-sm -translate-x-7 -translate-y-[1.4rem] bg-gradient-to-l from-primary-blue to-primary-red"></div>
                <div className="absolute w-6 h-6 rotate-[220deg] rounded-sm translate-x-44 translate-y-16 bg-gradient-to-l from-primary-blue to-primary-red"></div>
                <div className=""></div>
                <h1 className="font-bold text-white text-[1.25rem]">Get up to 30% off</h1>
                <p className="opacity-80 text-[.725em] word-spacing">You can get upto 30 percent <br /> discount from here</p>
            </div>
        </div>
    )
    
}

export default Hero