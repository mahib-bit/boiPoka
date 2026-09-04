import React from 'react';
import bookImg from '../../assets/sixofcrows.png'

const Banner = () => {
    return (
        <div className='sm:flex items-center justify-evenly m-6 p-18 bg-mist-500 rounded-xl'>
            <div className='text-black '>
                <h1 className='font-bold text-white text-3xl md:text-4xl lg:text-5xl max-w-lg'>
                    Books to freshen up your bookshelf
                </h1>
                <button className='btn md:btn-md lg:btn-lg border-none mt-8 bg-green-600'>
                    View The List
                </button>
            </div>

            <img className='mt-6 w-60 md:w-70 lg:w-80' src={bookImg} alt="Dating book" />
        </div>
    );
};

export default Banner;