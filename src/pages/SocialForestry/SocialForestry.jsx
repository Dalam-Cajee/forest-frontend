import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const SocialForestry = () => {
  return (
    <Container>
      <h1 className='text-center'>Social Forestry</h1>
      <Outlet />
    </Container>
  )
}

export default SocialForestry
