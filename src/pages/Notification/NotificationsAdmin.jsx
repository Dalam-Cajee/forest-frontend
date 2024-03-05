import React from "react"
import { Container } from "react-bootstrap"
import NotificationForm from "../../components/forms/NotificationForm"

const NotificationsAdmin = () => {
  return (
    <Container>
      <h2>Notifications Admin Panel</h2>
      <NotificationForm />
    </Container>
  )
}

export default NotificationsAdmin
