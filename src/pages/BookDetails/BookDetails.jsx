import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import BookDetail from '../BookDetail/BookDetail';

const BookDetails = () => {

    const detail = useLoaderData();
    // console.log(details);

    return (
        <div>
            <BookDetail detail={detail}></BookDetail>
        </div>
    );
};

export default BookDetails;