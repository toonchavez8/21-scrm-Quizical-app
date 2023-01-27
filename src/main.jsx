import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './components/App';
import Error from './components/Error';
import Questions from './components/Questions';


const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    
  ]);

root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);
