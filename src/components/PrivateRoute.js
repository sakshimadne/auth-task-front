import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

// PrivateRoute component
function PrivateRoute() {
  // Get the navigate function from the react-router-dom
  const navigate = useNavigate()

  // Use the useEffect hook to run a check when the component is mounted.
  useEffect(() => {
    // Check if user information is saved in local storage
    const userInfo = localStorage.getItem('userInfo')

    // If the user is not logged in (i.e., there's no user info in local storage),
    // navigate to the login page.
    if (!userInfo) {
      navigate('/login')
    }
    // The dependency array includes 'navigate' to ensure that if navigate changes,
    // the effect will run again.
  }, [navigate])

  // Render any child routes that are nested under this route
  return <Outlet />
}

export default PrivateRoute
