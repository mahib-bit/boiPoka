import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishList } from '../../utility/adToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [ReadList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id =>
            parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);

        const storedWishData = getStoredWishList();
        const convertedWishBooks = storedWishData.map(id => parseInt(id));
        const myWishList = data.filter(book => convertedWishBooks.includes(book.bookId));
        setWishList(myWishList);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">

            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            
            <Tabs>
                <TabList className="flex text-sm sm:text-base border-b border-gray-700">
                    <Tab>Read Book List ({ReadList.length})</Tab>
                    <Tab>Wishlists ({wishList.length})</Tab>
                </TabList>

                <TabPanel className="py-4">
                    <h2 className="font-bold text-xl sm:text-2xl my-4 text-gray-100">
                        Numbers of Book Read : {ReadList.length}
                    </h2>

                    {ReadList.length === 0 ? (
                        <p className="text-gray-400 py-10 text-center">No books added to your read list yet.</p>)
                        : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {ReadList.map(b => (
                                    <Book key={b.bookId} singleBook={b} />
                                ))}
                            </div>
                        )}
                </TabPanel>

                <TabPanel className="py-4">
                    <h2 className="font-bold text-xl sm:text-2xl my-4 text-gray-100">
                        Wishlist Books : {wishList.length}
                    </h2>

                    {wishList.length === 0 ? (
                        <p className="text-gray-400 py-10 text-center">No books added to your wishlist yet.</p>)
                        : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {wishList.map(b => (
                                    <Book key={b.bookId} singleBook={b} />
                                ))}
                            </div>
                        )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;