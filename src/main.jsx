import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './components/App';
import Error from './components/Error';
import Questions from './components/Questions';
import Start from './components/Start';


const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);

const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
      errorElement: <Error />,
    },
    {
        path: "/questions",
        element: <App />,
    }
    
  ]);

root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);
