// import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './ui/Home'
import Menu from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react'
import AppLayout from './ui/AppLayout'
// import User from './features/user/User'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:orderId',
        element: <Order />
      }
      // {
      //   path: '/user',
      //   element: <User />
      // }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
