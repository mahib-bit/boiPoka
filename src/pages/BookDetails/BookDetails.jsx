import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookDetail from '../BookDetail/BookDetail';

const BookDetails = () => {

    const {id} =useParams();
    const singleBook = useLoaderData();

    const detail = singleBook.find(book => book.bookId == id);
    // console.log(detail)

    return (
        <div>
            <BookDetail detail={detail}></BookDetail>
        </div>
    );
};

export default BookDetails;