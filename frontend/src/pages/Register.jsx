import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url('https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-5863389.jpg&fm=jpg')
    center no-repeat;
  background-size: cover;
`

const LoginContainer = styled.div`
  background-color: #476072;
  width: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  opacity: 0.95;
  border-radius: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  padding: 10px;
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 0px 0px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #39a2db;

  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  width: 60%;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 7px;
  background-color: #39a2db;
  color: #fff;
`
const Link = styled.a`
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
  color: #e1e5ea;
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.span`
  color: #fff;
`

const Register = () => {
  const [username, setUsername] = useState('')
  const [mobilenumber, setMobilenumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')

  const history = useHistory()

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleNumber = (e) => {
    setMobilenumber(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleCpassword = (e) => {
    setConfirmpassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === confirmpassword) {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        mobilenumber,
        password,
      })
      console.log(res.data)
      history.push('/home')
    }
  }

  return (
    <Container>
      <LoginContainer>
        <Form>
          <Input
            placeholder='Username'
            type='text'
            value={username}
            onChange={handleUsername}
          />
          <Input
            placeholder='Mobile number'
            type='text'
            value={mobilenumber}
            onChange={handleNumber}
          />
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={handlePassword}
          />
          <Input
            placeholder='Confirm Password'
            type='password'
            value={confirmpassword}
            onChange={handleCpassword}
          />
        </Form>
        <Button onClick={handleSubmit}>Register</Button>

        <InnerContainer>
          <Text>Already have an account? </Text>
          <Link href='/login'> Login</Link>
        </InnerContainer>
      </LoginContainer>
    </Container>
  )
}

export default Register
