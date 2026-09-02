import React from 'react';

const Navbar = () => {

    const links = <>
        <li className='m-2'>Home</li>
        <li className='m-2'>List of Books</li>
        <li className='m-2'>Pages to Read</li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="font-bold text-2xl">Book Worm</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn m-1 bg-green-600">Sign In</a>
                <a className="btn m-1 bg-cyan-600">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;