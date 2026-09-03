import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
          index: true, 
          path: '/',
          loader: () => fetch('booksData.json'),
          Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path : '/details/:id',
        loader: ({params}) => fetch('booksData.json')
                .then(res => res.json())
                .then(books =>
                  books.find(book => book.bookId == params.id)
                ),
        Component : BookDetails,
      }
    ]
  }
]);