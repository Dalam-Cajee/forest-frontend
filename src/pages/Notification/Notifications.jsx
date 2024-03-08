import React from "react"
import { useFetchNotifications } from "../../hooks/queries/NotificationQueries"
import { Table, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BsPlus } from "react-icons/bs"

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
      <h3 className="text-center my-4 bg-light">Notification Admin Panel</h3>
      <Button
        className="float-end my-2"
        size="sm"
        onClick={() => handleCreateNotification()}
      >
        <BsPlus className="fs-4" />
        Create Notification
      </Button>

      <Table striped bordered hover className="my-2">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Notification Type</th>
            <th>Active</th>
            <th>Archive</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notifications?.data?.data?.data ? (
            notifications?.data?.data?.data?.map((notification) => {
              const active = JSON.stringify(notification.isActive)
              const archive = JSON.stringify(notification.isArchive)
              return (
                <tr key={notification.id}>
                  <td>{notification.title}</td>
                  <td>{notification.notificationTypeName}</td>
                  <td>{active}</td>
                  <td>{archive}</td>
                  <td>{notification.createdDate}</td>
                  <td>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                --- No Data Available ---
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}

export default Notifications
