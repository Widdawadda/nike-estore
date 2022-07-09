import React, { useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import product from '../assets/images/product.png';

const Card = (props) => {
    const [toggleHeart, setToggleHeart] = useState(null);
    const [rating, setRating] = useState(5);

    return (
        <div className='relative'>
            <div className="translate-y-[5rem] mb-8 rounded-t-lg bg-gradient-to-r from-dark-blue to-dark-red w-[15rem] h-[11rem] inline-block">
                <img src={product} alt="Shoe" className='w-[13.5rem] mx-auto translate-y-[15%] rotate-[15deg]' />
            </div>
            <div className="absolute translate-x-[12.5rem] -translate-y-[8rem] hover:cursor-pointer opacity-100 rounded-full w-9 h-9 bg-gradient-to-r from-primary-blue to-primary-red">
                    <HiOutlineHeart className='mx-[.5rem] mt-2 text-[1.2rem]' />
                </div>
            <div className='translate-y-16 translate-x-8'>
                <div className="absolute flex flex-row gap-1">
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
                <span className="inline-block translate-x-[6.25rem] -translate-y-1 text-sm">({rating}.0)</span>
                <h3 className='font-bold text-sm mt-2'>Nike Air Jordan-100</h3>
                <div className="mt-2">
                    <h2 className='inline-block text-lg font-bold'>$20.20</h2>
                    <a className='inline-block text-sm ml-[2.5rem]' href="https://www.nikeair.com">Add to Cart</a>
                </div>
            </div>
        </div>
)
}

export default Card