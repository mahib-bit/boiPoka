import { Star } from 'lucide-react';
import React, { use } from 'react';

const Book = ({ singleBook }) => {

    // const data=use(bookPromise);
    // console.log(data)

    const { bookName, author, image, review, rating, category, tags } = singleBook;

    return (
                               
        <div className=" card bg-base-100 w-full h-full shadow-sm border border-mist-500 p-6">
            <figure className='w-full h-96 bg-mist-500 rounded-xl'>
                <img className='w-60 h-85 object-contain'
                    src={image} />
            </figure>
            <div className="card-body">
                <div className='flex justify-center shadow-2xl gap-2 items-end text-gray-400'>
                    {
                        singleBook.tags.map((tag, index) => (
                            <button className='border font-medium text-lime-400 px-3 mr-2 rounded-xl ' key={index}>{tag}</button>
                        ))
                    }
                </div>
                {/* <div className="badge text-lime-400 border-lime-200">{tags}</div> */}
                <h2 className="card-title text-2xl font-bold">
                    {bookName}
                </h2>
                <p className='text-[16px] font-medium'>By : {author}</p>
                <hr className='border-dashed'/>
                <div className=" text-[16px] card-actions items-center justify-between">
                    <div className="">{category}</div>
                    <div className="flex items-center justify-center gap-1">{rating}<Star></Star></div>
                </div>
            </div>
        </div>
    );
};

export default Book;