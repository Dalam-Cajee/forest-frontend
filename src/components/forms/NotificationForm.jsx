import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Container } from "react-bootstrap"

const NotificationForm = () => {
  // States

  // Refs

  // Functions

  // Hooks

  // Constants

  // Formik
  // Initial Values
  const initialValues = {}

  // Schema
  const validationSchema = yup.object({})

  // Handlers
  const onSubmit = (values) => {
    console.log("Notifications:", values)
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
            <Form></Form>
          </Container>
        )
      }}
    </Formik>
  )
}

export default NotificationForm
