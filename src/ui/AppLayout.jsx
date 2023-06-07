/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        {/* <h2>Content</h2> */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default AppLayout
