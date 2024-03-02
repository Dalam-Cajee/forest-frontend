import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const ResearchTraining = () => {
  return (
    <Container>
      <h1 className='text-center'>Research Training</h1>
      <Outlet />
    </Container>
  )
}

export default ResearchTraining
