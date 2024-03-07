import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import {
  Button,
  Card,
  CardBody,
  CloseButton,
  Container,
  Stack,
} from 'react-bootstrap'
import FieldInput from '../core/FieldInput'
import {
  useAddNotification,
  useFetchNotificationTypes,
} from '../../hooks/queries/NotificationQueries'
import FieldSelect from '../core/FieldSelect'
import FieldFile from '../core/FieldFile'
import { useNavigate } from 'react-router-dom'

const NotificationForm = () => {
  // States

  // Refs
  const formRef = useRef()
  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }
  // Hooks
  const navigate = useNavigate()
  // Notification Queries
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)
  const createNotification = useAddNotification(onSuccess, onError)
  // Constants

  // Formik
  // Initial Values
  const initialValues = {
    notificationDetails: {
      title: '',
      notificationTypeId: '',
    },
    file: null,
  }

  // Schema
  const validationSchema = yup.object({
    notificationDetails: yup.object({
      title: yup.string().required('Title is required'),
      notificationTypeId: yup
        .string()
        .required('Notification Type is required'),
    }),
    file: yup.mixed().required('File is required'),
  })

  // Handlers
  const onSubmit = (values) => {
    console.log('Notifications: ', values)
    createNotification.mutate(values)
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={formRef}
    >
      {(formik) => {
        return (
          <Container>
            <Card>
              <CardBody className='shadow rounded p-3'>
                <Form>
                  <Stack gap={2}>
                    <div>
                      <CloseButton
                        className='float-end'
                        onClick={() => navigate(-1)}
                      />
                    </div>
                    {/* Title */}
                    <div>
                      <FieldInput
                        name='notificationDetails.title'
                        label='Title'
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Notification Type */}
                    <div>
                      <FieldSelect
                        name='notificationDetails.notificationTypeId'
                        label='Notification Type'
                        formik={formik}
                        isRequired={true}
                      >
                        {notificationTypes?.data?.data?.data.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                        {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                      </FieldSelect>
                    </div>
                    {/* File Upload */}
                    <div>
                      <FieldFile
                        name='file'
                        label='Upload Document(PDF)'
                        formik={formik}
                        isRequired={true}
                      />
                    </div>
                    {/* Add Button */}
                    <div className='mt-2'>
                      <Button type='submit'>Create</Button>
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

export default NotificationForm
