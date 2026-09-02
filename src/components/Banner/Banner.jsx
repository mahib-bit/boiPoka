import React from 'react';
import bookImg from '../../assets/sixofcrows.png'

const Banner = () => {
    return (
        <div className='flex items-center justify-evenly my-6 p-18 bg-mist-500 rounded-xl'>
            <div className='text-black'>
                <h1 className='font-bold text-white text-5xl max-w-lg'>
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