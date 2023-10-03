import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../Pages/Todo'
import Authentication from '../Pages/Authentication'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Todo/>} />
       <Route path='authentication' element={<Authentication/>}/>
    </Routes>
  )
}

export default AllRoutes