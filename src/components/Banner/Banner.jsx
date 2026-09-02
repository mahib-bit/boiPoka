import React from 'react';
import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex items-center justify-evenly my-6 p-18 bg-gray-200 rounded-xl'>
            <div className='text-black'>
                <h1 className='font-bold text-5xl max-w-lg'>
                    Books to freshen up your bookshelf
                </h1>
                <button className='btn btn-lg border-none mt-8 bg-green-600'>
                    View The List
                </button>
            </div>

            <img className='w-80' src={bookImg} alt="Dating book" />
        </div>
    );
};

export default Banner;