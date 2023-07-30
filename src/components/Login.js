import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
const url = 'https://task-auth.onrender.com'
  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(url+'/api/users/login', {
        ...user,
      })
      setUser({ email: '', password: '' })
      localStorage.setItem('userInfo', JSON.stringify(res.data))

      window.location.href = '/'
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

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
