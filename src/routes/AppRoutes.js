import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import FormLogIn from '../pages/FormLogIn'
import PrivateRoutes from './PrivateRoutes'
import TableUsers from '../components/Table/TableUsers'
import NotFound from './NotFound'

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<FormLogIn />} />
        <Route
          path='/users'
          element={
            <PrivateRoutes >
              <TableUsers />
            </PrivateRoutes>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
