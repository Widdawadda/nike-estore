import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import old_man from '../assets/images/old-man.png';
import young_man from '../assets/images/young-man.png'

const Testimonials = () => {
    const [rating, setRating] = useState(5);
    const [ratingTwo, setRatingTwo] = useState(5);

    return (
        <div className="relative mb-[3rem]">
            <h1 className='translate-y-[115rem] translate-x-[20rem] text-[2.5rem] font-michroma'>What Our <br /> <span className='text-primary-red'>Customers Say</span></h1>
            <div className="absolute right-10">
                <a href="https://nike.com" target="_blank" rel='noreferrer' className="absolute translate-y-[110rem] -translate-x-[7rem] w-[2rem] text-[1.25rem] rounded-md m-auto h-[2rem] bg-gradient-to-r from-primary-blue to-primary-red"><HiOutlineArrowNarrowRight className='absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer' /></a>
                <a href="https://nike.com" target="_blank" rel='noreferrer' className="absolute translate-y-[110rem] -translate-x-[10.5rem] rotate-180 w-[2rem] text-[1.25rem] rounded-md m-auto] h-[2rem] bg-transparent border-neutral-400 border-[2.2px] text-neutral-400 "><HiOutlineArrowNarrowRight className='absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer' /></a>
            </div>

            <div className="flex flex-row gap-[4rem] text-center mt-12 translate-x-1/4">
                <div className="flex items-center flex-col gap-[1.5rem] translate-y-[115rem] translate-x-24">
                    <img src={old_man} alt="remington" className='order-1 rounded-full w-[5rem] h-[5rem] aspect-square' />
                    <p className="order-2 text-[.75rem] text-neutral-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Magni aliquid repellendus dicta reprehenderit a provident <br/>earum nihil autem modi, voluptas necessitatibus deleniti <br/>eosnumquam ipsa? Sed sequi repellat molestias quos, <br/>temporibus aperiam beatae.</p>
                    <div className="order-3 inline-block">
                            {[...Array(5)].map((star, i) => { 
                                const ratingValue = i + 1;

                                return (
                                    <label key={i} className="inline-block ml-1">
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
                    <h1 className="font-bold order-4 -mt-2">Remington</h1>
                </div>

                <div className="flex items-center flex-col gap-[1.5rem] translate-y-[115rem] translate-x-24">
                    <img src={young_man} alt="thomson" className='order-1 rounded-full w-[5rem] h-[5rem] aspect-square' />
                    <p className="order-2 text-[.75rem] text-neutral-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Magni aliquid repellendus dicta reprehenderit a provident <br/>earum nihil autem modi, voluptas necessitatibus deleniti <br/>eosnumquam ipsa? Sed sequi repellat molestias quos, <br/>temporibus aperiam beatae.</p>
                    <div className="order-3 inline-block">
                            {[...Array(5)].map((star, i) => { 
                                const ratingValue = i + 1;

                                return (
                                    <label key={i} className="inline-block ml-1">
                                        <input 
                                            type="radio" 
                                            name="rating transition-all" 
                                            className='hidden' 
                                            value={ratingValue} 
                                            onClick={() => setRatingTwo(ratingValue)} />
                                        <FaStar color={ratingValue <= ratingTwo ? "#ffc107" : "#e4e5e9"} className='cursor-pointer w-[.9rem] transition-all' />
                                    </label>
                                )
                            } )}
                    </div>
                    <h1 className="font-bold order-4 -mt-2">Thomson Zarki</h1>
                </div>
                <div className='absolute filter blur-[80px] opacity-20 right-4 bg-primary-red rounded-full w-[34rem] h-[29rem] translate-y-[110rem] -translate-x-[9rem] -z-10'></div>
            </div>
        </div>
)
}

export default Testimonials