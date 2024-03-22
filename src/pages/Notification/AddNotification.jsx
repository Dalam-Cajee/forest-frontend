import React from "react"
import { Container } from "react-bootstrap"
import CreateNotificationForm from "../../components/forms/CreateNotificationForm"

const AddNotification = () => {
  return (
    <Container className="my-3">
      <h3 className="text-center my-4 bg-light">Add New Document</h3>
      <CreateNotificationForm />
    </Container>
  )
}

export default AddNotification
