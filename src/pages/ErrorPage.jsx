import React from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  // Hooks
  const navigate = useNavigate()

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <h4>Not Found</h4>
        <p>The resource requested could not be found on this server!</p>
        <Button variant="secondary" size="sm" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </Container>
  )
}

export default ErrorPage
