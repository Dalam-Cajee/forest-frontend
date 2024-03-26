import React from "react"
import { Container } from "react-bootstrap"
import LoginForm from "../components/forms/LoginForm.jsx"

const LoginPage = () => {
  return (
    <Container className="my-3 w-50">
      <LoginForm />
    </Container>
  )
}

export default LoginPage
