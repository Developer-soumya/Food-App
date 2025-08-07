import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../components/HomePage'
import AllFood from '../components/AllFood'
import FoodDetails from '../components/FoodDetails'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/allfoods' element={<AllFood/>}></Route>
        <Route path='/fooddetail/:id' element={<FoodDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
