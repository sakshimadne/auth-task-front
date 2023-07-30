import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()

  function handleLogout() {
    // Remove the userInfo from localStorage
    localStorage.removeItem('userInfo')

    // Redirect to login page
    navigate('/login')
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default Logout
