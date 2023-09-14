import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Shop from './components/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop/> },
      // { path: '/cart', element: <Cart /> },
      // { path: '/about', element: <About /> },
    ],
    
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

 <>
 <RouterProvider router={router} />
 </>
 
)
