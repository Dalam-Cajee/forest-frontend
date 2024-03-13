import React, { useState } from "react"
import {
  Container,
  Table,
  Button,
  Tabs,
  Tab,
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "react-bootstrap"
import {
  useFetchNotificationTypes,
  useFetchNotifications,
  usePutNotificationArchive,
} from "../../hooks/queries/NotificationQueries"
import { useNavigate } from "react-router-dom"
import { BsPlus } from "react-icons/bs"
import AddNotificationTypeForm from "../../components/forms/AddNotificationTypeForm"

const NotificationsAdmin = () => {
  // States
  const [show, setShow] = useState(false)

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
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)
  const putArchive = usePutNotificationArchive(onSuccess, onError)

  // Constants

  // Handlers
  // Delete
  const handleDelete = (id) => putArchive.mutate(id)
  // Show modal
  const handleShow = () => setShow(true)
  // Close Modal
  const handleClose = () => setShow(false)

  return (
    <Container>
      <h3 className="text-center mt-4 mb-5 bg-light">
        Notification Admin Panel
      </h3>
      {/* Tabs */}
      <Tabs defaultActiveKey="notifications" justify>
        {/* Create Notification */}
        <Tab eventKey="notifications" title="Notifications">
          <Button
            className="float-end my-3"
            size="sm"
            onClick={() => navigate("create")}
          >
            <BsPlus className="fs-4" />
            Create Notification
          </Button>
          {/* Notifications Table */}
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
                  const active = JSON.stringify(notification.active)
                  const archive = JSON.stringify(notification.archive)
                  return (
                    <tr key={notification.id}>
                      <td>{notification.title}</td>
                      <td>{notification.notificationTypeName}</td>
                      <td>{active}</td>
                      <td>{archive}</td>
                      <td>{notification.createdDate}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(notification.id)}
                        >
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
        </Tab>
        {/* Add Notification Type */}
        <Tab eventKey="notificationTypes" title="Notification Types">
          <Button
            className="float-end my-3"
            size="sm"
            onClick={() => handleShow()}
          >
            <BsPlus className="fs-4" />
            Add Notification Type
          </Button>
          {/* Modal for Adding Notification Types */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <ModalHeader closeButton>
              <ModalTitle className="d-flex justify-content-center w-100">
                Add New Notification Type
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <AddNotificationTypeForm setShow={setShow} />
            </ModalBody>
          </Modal>
          {/* Notification Types Table */}
          <Table striped bordered hover className="my-2">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Notification Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes?.data?.data?.data ? (
                notificationTypes?.data?.data?.data?.map((type) => {
                  return (
                    <tr key={type.id}>
                      <td>{type.id}</td>
                      <td>{type.name}</td>
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
                  <td colSpan="3" className="text-center">
                    --- No Data Available ---
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default NotificationsAdmin
