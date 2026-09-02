import React, { use } from 'react';

const Book = ({ singleBook }) => {

    // const data=use(bookPromise);
    // console.log(data)

    const { bookName, author, image, review, rating, category, tags } = singleBook;

    return (
        
        <div className=" card bg-base-100 w-96 shadow-sm border border-mist-500 p-6">
            <figure className='bg-mist-500 rounded-xl'>
                <img
                    src={image} />
            </figure>
            <div className="card-body">
                <div className="badge text-lime-400 border-lime-200">{tags}</div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By : {author}</p>
                <hr/>
                <div className=" card-actions items-center justify-between">
                    <div className="">{category}</div>
                    <div className="">{rating} ⭐</div>
                </div>
            </div>
        </div>
    );
};

export default Book;