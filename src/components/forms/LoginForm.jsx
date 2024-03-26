import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Container,
  Stack,
} from "react-bootstrap"
import FieldInput from "../core/FieldInput"

const LoginForm = () => {
  // State

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }

  // Hooks

  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    username: "",
    password: "",
  }

  // Schema
  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .matches(
        /^[a-zA-Z0-9]*$/,
        "Username can only contain letters, numbers, underscores, and dots"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  })

  // Handlers
  const onSubmit = (values) => {
    console.log("Login: ", values)
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Container>
            <h1 className="display-6 fw-normal text-center">LOGIN</h1>
            <Form>
              <Stack gap={3}>
                {/* Username */}
                <div className="mt-3">
                  <FieldInput
                    name="username"
                    label="Username"
                    formik={formik}
                    isRequired={true}
                  />
                </div>
                {/* Password */}
                <div>
                  <FieldInput
                    name="password"
                    label="Password"
                    formik={formik}
                    isRequired={true}
                    type="password"
                  />
                </div>
                {/* Login Button */}
                <div className="text-center">
                  <Button type="submit" variant="outline-success">
                    Login
                  </Button>
                </div>
              </Stack>
            </Form>
          </Container>
        )
      }}
    </Formik>
  )
}

export default LoginForm
