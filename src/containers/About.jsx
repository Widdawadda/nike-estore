import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import orange_shoe from '../assets/images/orange_shoe.png';

const About = () => {
    return (
        <div id='about' className='relative translate-y-[55rem] translate-x-28'>
            <div className='relative grid left-[7rem]'>
                <div className='absolute row-span-1 col-span-1 w-[20rem] h-[21rem] bg-gradient-to-r from-primary-blue to-primary-red rounded-[1.35rem]'></div>
                {/* <div className="relative z-10 py-[.75rem] pl-[1.15rem] bg-neutral-400 bg-opacity-[.30] filter backdrop-filter backdrop-blur-lg rounded-lg text-left w-[13.25rem]">
                    <div className="absolute right-0 bottom-0 rotate-[135deg] w-6 h-6 rounded-sm bg-gradient-to-l from-primary-blue to-primary-red"></div>
                    <div className="absolute left-0 top-0 w-6 h-6 rotate-[220deg] rounded-sm bg-gradient-to-l from-primary-blue to-primary-red"></div>
                    <div className="bg-white"></div>
                    <h1 className="font-bold text-white text-[1.25rem]">Get up to <br/> 30% off</h1>
                    <p className="opacity-80 text-[.725em] word-spacing">You can get upto 30 <br/> percent discount <br/> from here</p>
                </div> */}
                <div className="-translate-y-[12rem] -translate-x-[8.5rem] row-span-1 col-span-1">
                    <img src={orange_shoe} alt="Orange Nike Sneakers" className='absolute rotate-[12.5deg] w-[40rem] h-[40rem]' />
                </div>
            </div>
            <div className="absolute right-[20rem] flex flex-col gap-[1rem]">
                <h3 className='text-primary-red'>About Us</h3>
                <h1 className="text-[2.5rem] font-michroma">We Provide <span className='text-primary-red'>High</span> <br/> Quality Shoes.</h1>
                <p className="text-neutral-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit vero, <br/>dolore repudiandae sit voluptates ipsum similique <br/>nihil magni doloremque veniam harum?<br /><br />Consectetur repudiandae cum sed accusamus fugit voluptas. Cumque!</p>
                <a href="https://www.nike.com" className='relative font-bold bg-gradient-to-r from-primary-blue to-primary-red inline-block py-4 px-6 rounded-md w-max' target="_blank" rel="noreferrer">Explore More <BsFillArrowRightCircleFill className='inline-block ml-1 -mt-1' /></a>
            </div>
            <div className='absolute filter blur-[80px] opacity-20 right-4 bg-primary-blue rounded-full w-[34rem] h-[30rem] translate-x-[5rem] translate-y-[10rem] -z-10'></div>
        </div>
)
}

export default About