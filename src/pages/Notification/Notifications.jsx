import React from "react"
import { useFetchNotifications } from "../../hooks/queries/NotificationQueries"
import { Table, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Notifications = () => {
  // States

  // Constants

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
  // Notification Queries
  const notifications = useFetchNotifications(onSuccess, onError)

  // Handlers
  const handleCreateNotification = () => {
    navigate("update")
  }
  return (
    <Container>
      <h3 className="text-center my-4 bg-light">NOTIFICATIONS</h3>
      <Button
        className="float-end my-2"
        onClick={() => handleCreateNotification()}
      >
        Add
      </Button>

      <Table striped bordered hover className="my-2">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Notification Type</th>
            <th>isActive</th>
            <th>isArchive</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notifications?.data?.data?.data?.map((notification) => {
            return (
              <tr key={notification.id}>
                <td>{notification.title}</td>
                <td>{notification.notificationTypeName}</td>
                <td>{notification.isActive}</td>
                <td>{notification.isArchive}</td>
                <td>{notification.createdDate}</td>
                <td>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Notifications
