import React from 'react'
import { Container } from 'react-bootstrap'
import CreateNotificationForm from '../../components/forms/CreateNotificationForm'

const AddNotification = () => {
  return (
    <Container>
      <h3 className='text-center my-4 bg-light'>Create New Notification</h3>
      <CreateNotificationForm />
    </Container>
  )
}

export default AddNotification
