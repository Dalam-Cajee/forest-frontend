import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const BoardsAuthorities = () => {
  return (
    <Container>
      <h2 className='text-center'>Boards Authorities</h2>
      <Outlet />
    </Container>
  )
}

export default BoardsAuthorities
