import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishList } from '../../utility/adToDB';
import Book from '../Book/Book';
import { ChevronDown } from 'lucide-react';

const ReadList = () => {
    // State lists
    const [ReadList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = useLoaderData();

    // Sorting filters
    const [sort, setSort] = useState("");

    const handleSort = (type) => {
        setSort(type);

        if (type === "pages") {
            const sortedReadByPage = [...ReadList].sort((a, b) => a.totalPages - b.totalPages);
            const sortedWishByPage = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadByPage);
            setWishList(sortedWishByPage);
        }

        if (type === "ratings") {
            const sortedReadByRating = [...ReadList].sort((a, b) => b.rating - a.rating);
            const sortedWishByRating = [...wishList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedReadByRating);
            setWishList(sortedWishByRating);
        }
    };

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);

        const storedWishData = getStoredWishList();
        const convertedWishBooks = storedWishData.map(id => parseInt(id));
        const myWishList = data.filter(book => convertedWishBooks.includes(book.bookId));
        setWishList(myWishList);
    }, [data]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">

            <div className="flex justify-center dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn bg-green-600 m-6 text-white flex items-center gap-2">
                    {sort ? `Sorted By: ${sort.charAt(0).toUpperCase() + sort.slice(1)}` : 'Sort By'} <ChevronDown />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Rating</a></li>
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
                        <p className="text-gray-400 py-10 text-center">No books added to your read list yet.</p>
                    ) : (
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
                        <p className="text-gray-400 py-10 text-center">No books added to your wishlist yet.</p>
                    ) : (
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