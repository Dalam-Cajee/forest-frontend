import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Wildlife = () => {
  return (
    <Container>
      <h1 className='text-center'>Wildlife</h1>
      <Outlet />
    </Container>
  )
}

export default Wildlife
