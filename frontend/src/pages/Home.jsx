import React from 'react'
import { Redirect } from 'react-router'

const Home = () => {
  const user = false

  return user ? <div>Home</div> : <Redirect to='/login' />
}

export default Home
