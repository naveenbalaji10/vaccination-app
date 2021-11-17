import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

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
  width: 20%;
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

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username !== '' && password !== '') {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
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
            placeholder='enter username'
            type='text'
            name='username'
            value={username}
            onChange={handleUsername}
          />
          <Input
            placeholder='enter password'
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
          />
        </Form>
        <Button onClick={handleSubmit}>Login</Button>

        <InnerContainer>
          <Text>Create an account? </Text>
          <Link href='/register'> Register</Link>
        </InnerContainer>
      </LoginContainer>
    </Container>
  )
}

export default Login
