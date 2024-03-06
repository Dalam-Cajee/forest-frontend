import React from "react"
import { Container } from "react-bootstrap"
import NotificationForm from "../../components/forms/NotificationForm"

const NotificationsAdmin = () => {
  return (
    <Container>
      <h3 className="text-center">Add New Notification</h3>
      <NotificationForm />
    </Container>
  )
}

export default NotificationsAdmin
