import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/adToDB';
import Book from '../Book/Book';

const ReadList = () => {
    //worst case
    const [ReadList, setReadList] = useState([])
    const data = useLoaderData();
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id =>
            parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Wishlists</Tab>
                </TabList>

                <TabPanel className='p-4'>
                    <h2 className='font-bold text-2xl my-2'>Book read {ReadList.length}</h2>
                    {
                        ReadList.map(b => <Book key={b.bookId} singleBook={b}>

                        </Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>WishLists</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;