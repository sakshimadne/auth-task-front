import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css'

// Main application component
function App() {
  return (
    // Use React Router for navigation
    <BrowserRouter>
      <Routes>
        // Route for login page
        <Route path='/login' element={<Login />} />
        // Route for register page
        <Route path='/register' element={<Register />} />
        // Wrap HomePage route with PrivateRoute component to protect it from
        unauthenticated access
        <Route path='/' element={<PrivateRoute />}>
          // Route for home page, wrapped inside a PrivateRoute to ensure only
          authenticated users can access
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
