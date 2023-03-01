import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';
// import {PRODUCTS_MOCK} from "./mock/products.mock";

const router = createBrowserRouter([
  // element: <Home data={PRODUCTS_MOCK} />,
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "/products/:productId",
    element: <Products  />,
  },
  {
    path: "/pay/:payId",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
