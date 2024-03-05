import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { Container } from "react-bootstrap"
import FormInput from "../core/FormInput"
import { useFetchNotificationTypes } from "../../hooks/queries/NotificationQueries"
import FormSelect from "../core/FormSelect"

const NotificationForm = () => {
  // States

  // Refs

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }
  // Hooks
  // Notification Queries
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)
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
            <Form>
              {/* Title */}
              <FormInput
                name="title"
                label="Title"
                formik={formik}
                isRequired={true}
              />
            </Form>
            {/* Notification Type */}
            <FormSelect
              name="notificationTypes"
              label="Notification Type"
              formik={formik}
              isRequired={true}
            ></FormSelect>
          </Container>
        )
      }}
    </Formik>
  )
}

export default NotificationForm
