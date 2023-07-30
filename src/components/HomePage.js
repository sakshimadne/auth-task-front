import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'
import Table from './Table'
function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      navigate('/login')
    }
    // Add other initialization logic here
  }, [navigate])

  return (
    <div className='container w-75 m-auto'>
      <h1 className='text-center'>Welcome to the Home Page</h1>
      <Logout />
      <Table />
    </div>
  )
}

export default HomePage
