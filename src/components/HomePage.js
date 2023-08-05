import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'
import Table from './Table'

// HomePage Component
function HomePage() {
  // Get the navigate function from the react-router-dom
  const navigate = useNavigate()

  // Use the useEffect hook to check user login status when the component is mounted
  useEffect(() => {
    // Get user information from local storage
    const userInfo = localStorage.getItem('userInfo')

    // If the user is not logged in (i.e., there's no user info in local storage),
    // navigate to the login page
    if (!userInfo) {
      navigate('/login')
    }
    // You can add other initialization logic here, if needed
  }, [navigate]) // Run the effect again if navigate changes

  // Render the home page content
  return (
    <div className='container w-75 m-auto'>
      <h1 className='text-center'>Welcome to the Home Page</h1>
      <Table /> {/* Table component */}
      <Logout /> {/* Logout button */}
    </div>
  )
}

export default HomePage
