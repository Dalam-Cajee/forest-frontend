import React from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const AboutUs = () => {
  return (
    <Container>
      <h1 className="text-center">About Us</h1>
      <Outlet />
    </Container>
  )
}

export default AboutUs
