import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

// Login Component
function Login() {
  // Initialize user state with email and password using useState hook
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // Define API url
  const url = 'https://task-auth.onrender.com'

  // Handle input field changes
  // It updates user state based on the input fields
  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  // Function to handle login form submission
  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      // Make a post request to login with user data
      const res = await axios.post(url + '/api/users/login', {
        ...user,
      })

      // Reset the user state
      setUser({ email: '', password: '' })

      // On successful login, store user info in local storage
      localStorage.setItem('userInfo', JSON.stringify(res.data))

      // Redirect to home page
      window.location.href = '/'
    } catch (err) {
      // Display appropriate error messages
      alert(err.response.data.msg)
    }
  }

  // Render login form
  return (
    <div className='container mt-5'>
      <Form onSubmit={loginSubmit}>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={user.email}
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={user.password}
            onChange={onChangeInput}
          />
        </FormGroup>
        <Button color='primary' type='submit'>
          Login
        </Button>
      </Form>
      <p className='mt-3'>
        Don't have an account? <Link to='/register'>Register here</Link>
      </p>
    </div>
  )
}

export default Login
