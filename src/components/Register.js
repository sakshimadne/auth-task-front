import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  })
const url = 'https://task-auth.onrender.com'
  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const registerSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(url + '/api/users/register', {
        ...user,
      })

      localStorage.setItem('userInfo', JSON.stringify(res.data))
      window.location.href = '/'
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg)
      } else {
        alert(err.message)
      }
    }
  }

  return (
    <div className='container mt-5'>
      <Form onSubmit={registerSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={user.name}
            onChange={onChangeInput}
          />
        </FormGroup>
        <FormGroup>
          <Label for='dob'>Date of Birth</Label>
          <Input
            type='date'
            name='dob'
            id='dob'
            placeholder='Date of Birth'
            value={user.dob}
            onChange={onChangeInput}
          />
        </FormGroup>
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
          Register
        </Button>
      </Form>
      <p className='mt-3'>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
  )
}

export default Register
