import React from 'react'
import { useNavigate } from 'react-router-dom'

// Logout Component
function Logout() {
  // Get the navigate function from the react-router-dom
  const navigate = useNavigate()

  // Function to handle the logout process
  function handleLogout() {
    // Remove the userInfo from localStorage
    // This action effectively logs the user out by erasing their session data
    localStorage.removeItem('userInfo')

    // Redirect the user to the login page
    // Since their session data has been cleared, they should now see the login page
    navigate('/login')
  }

  // Render a logout button that triggers the handleLogout function when clicked
  return (
    // <button onClick={handleLogout} className='btn btn-danger '>
    //   Logout
    // </button>
    <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
      <button onClick={handleLogout} class='btn btn-danger' type='button'>
        Logout
      </button>
    </div>
  )
}

export default Logout
