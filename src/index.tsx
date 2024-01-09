
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';

import App from './App';
import MyWork from './Components/MyWork';
import AboutMe from './Components/AboutMe';
import Empty from './Components/Empty';
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';



// Setup Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MyWork />
      },
      {
        path: "about",
        element: <AboutMe />
      },
{
        path: "adventures",
        element: <Empty />
      },
      {
        path: "contact",
        element: <Empty />
      },
    ]
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
