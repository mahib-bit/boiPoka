import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json)
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[] )

    // const bookPromise = fetch('./booksData.json')
    // .then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between p-6 gap-6'>
                    {
                        data.map((singleBook) =>
                            <Book key={singleBook.bookId} singleBook={singleBook}>

                            </Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;