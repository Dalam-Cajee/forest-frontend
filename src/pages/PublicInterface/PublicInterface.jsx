import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const PublicInterface = () => {
  return (
    <Container>
      <h1 className='text-center'>Public Interface</h1>
      <Outlet />
    </Container>
  )
}

export default PublicInterface
