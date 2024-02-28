import React from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const Forest = () => {
  return (
    <Container>
      <h1 className="text-center">Forest</h1>
      <Outlet />
    </Container>
  )
}

export default Forest
