import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { Button, Container } from 'react-bootstrap'
import FieldInput from '../core/FieldInput'
import { useFetchNotificationTypes } from '../../hooks/queries/NotificationQueries'
import FieldSelect from '../core/FieldSelect'

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
  const initialValues = {
    title: '',
    notificationTypes: '',
  }

  // Schema
  const validationSchema = yup.object({
    title: yup.string().required('Required!'),
    notificationTypes: yup.string().required('Required!'),
  })

  // Handlers
  const onSubmit = (values) => {
    console.log('Notifications:', values)
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
              <FieldInput
                name='title'
                label='Title'
                formik={formik}
                isRequired={true}
              />
              {/* Notification Type */}
              <FieldSelect
                name='notificationTypes'
                label='Notification Type'
                formik={formik}
                isRequired={true}
              >
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </FieldSelect>
              {/* Add Button */}
              <Button type='submit'>Add</Button>
            </Form>
          </Container>
        )
      }}
    </Formik>
  )
}

export default NotificationForm
