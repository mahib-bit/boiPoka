import React from 'react';

const BookDetail = ({ detail }) => {

    const {
        bookId, review, bookName, author, image, rating, category, tags, totalPages, publisher, yearOfPublishing } = detail;

    return (

        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">

            <div className="lg:flex items-center justify-between bg-gray-800 rounded-2xl overflow-hidden">
                <div className="p-6 sm:p-10 lg:p-16 lg:w-1/2 bg-mist-500 rounded-2xl flex justify-center">
                    <img
                        className="w-full max-w-[280px] sm:max-w-[325px] md:max-w-[375px] lg:max-w-[425px] h-auto"
                        src={image}
                        alt={bookName} />
                </div>
                <div className="lg:w-1/2 p-5 sm:p-8 lg:p-10">
                    <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                        {bookName}
                    </h1>
                    <p className="font-medium text-lg sm:text-xl lg:text-2xl my-2">
                        By : {author}
                    </p>
                    <hr className="opacity-30" />
                    <p className="my-2">
                        {category}
                    </p>
                    <hr className="opacity-30" />
                    <p className="text-[16px] my-2">
                        <span className="font-bold">Review : </span>
                        {review}
                    </p>
                    <div>
                        <div className="flex flex-wrap justify-start my-3 shadow-2xl gap-2 items-center text-gray-400">
                            <p className="font-bold text-white">
                                Tag
                            </p>
                            {
                                tags.map((tag, index) => (
                                    <button
                                        className="border font-medium text-lime-400 px-3 py-1 rounded-xl"
                                        key={index}>
                                        #{tag}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <hr className="opacity-30" />
                    <p className="my-2">
                        Number of Pages: <span className="font-bold">{totalPages}</span>
                    </p>
                    <p className="my-2">
                        Publisher: <span className="font-bold">{publisher}</span>
                    </p>
                    <p className="my-2">
                        Year of Publishing: <span className="font-bold">{yearOfPublishing}</span>
                    </p>
                    <p className="my-2">
                        Rating: <span className="font-bold">{rating}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-5">
                        <button className="btn text-black bg-gray-300 w-full sm:w-auto">
                            Read
                        </button>
                        <button className="btn bg-cyan-600 w-full sm:w-auto">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;