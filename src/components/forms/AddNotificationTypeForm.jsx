import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CloseButton,
  Container,
  Stack,
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import FieldInput from '../core/FieldInput'

const AddNotificationTypeForm = () => {
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
  const navigate = useNavigate()

  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    name: '',
  }

  // Schema
  const validationSchema = yup.object({
    name: yup.string().required('Notification Type is required'),
  })

  // Handlers
  const onSubmit = (values) => {
    console.log(values)
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
            <Card className='border-0 my-4'>
              <CardBody>
                <CardTitle>
                  <CloseButton
                    className='float-end'
                    onClick={() => navigate(-1)}
                  />
                  <h4 className='text-center fw-bold'>
                    Add New Notification Type
                  </h4>
                </CardTitle>
                <Form>
                  <Stack gap={2}>
                    {/* Title */}
                    <div>
                      <FieldInput
                        name='name'
                        label='Notification Type'
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Add Button */}
                    <div className='mt-2'>
                      <Button type='submit'>Add</Button>
                    </div>
                  </Stack>
                </Form>
              </CardBody>
            </Card>
          </Container>
        )
      }}
    </Formik>
  )
}

export default AddNotificationTypeForm
