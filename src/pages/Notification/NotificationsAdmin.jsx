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
  Nav,
  NavLink,
  Row,
  Col,
  TabContent,
} from "react-bootstrap"
import {
  useDeleteNotification,
  useFetchNotificationByID,
  useFetchNotificationTypes,
  usePutNotificationArchive,
} from "../../hooks/queries/NotificationQueries"
import { useNavigate } from "react-router-dom"
import { BsArchive, BsPlus, BsTrashFill } from "react-icons/bs"
import AddNotificationTypeForm from "../../components/forms/AddNotificationTypeForm"

const NotificationsAdmin = () => {
  // States
  const [activeKey, setActiveKey] = useState("Tenders & Notices")
  const [ID, setID] = useState(1)
  const [show, setShow] = useState(false)
  const [showPanel, setShowPanel] = useState(true)

  // Refs

  // Functions
  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return error
  }
  const isActive = (key) => {
    return key === activeKey ? "active" : ""
  }

  // Hooks
  const navigate = useNavigate()
  // Notification Queries
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)
  const fetchNotificationByID = useFetchNotificationByID(ID)
  const putArchive = usePutNotificationArchive(onSuccess, onError)
  const deleteNotification = useDeleteNotification(onSuccess, onError)

  // Constants

  // Handlers
  const handleArchive = (id) => putArchive.mutate(id)
  const handleDelete = (id) => deleteNotification.mutate(id)
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  // Modal
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <Container className="my-3">
      <h3 className="text-center mt-4 mb-5 bg-light">
        Notification Admin Panel
      </h3>
      <Row className="justify-content-center">
        {showPanel && (
          <Col sm={4}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              {notificationTypes?.data?.data?.data?.map((type) => {
                return (
                  <NavLink
                    key={type.id}
                    eventKey={type.name}
                    className={`nav-link ${isActive(type.name)}`}
                    onClick={() => {
                      setID(type.id)
                    }}
                  >
                    {type.name}
                  </NavLink>
                )
              })}
            </Nav>
          </Col>
        )}
        <Col sm={8}>
          <TabContent className="bg-light p-3">
            <Tabs
              fill
              className="custom-nav"
              onClick={() => setShowPanel(!showPanel)}
            >
              {/* Create Notification */}
              <Tab eventKey="notifications" title="Notifications">
                <div className="row flex-column">
                  <div>
                    <Button
                      variant="outline-success"
                      className="float-end my-3"
                      size="sm"
                      onClick={() => navigate("create")}
                    >
                      <BsPlus className="fs-4" />
                      Create Notification
                    </Button>
                  </div>
                  {/* Notifications Table */}
                  <div>
                    <Table striped bordered responsive hover className="my-2">
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
                        {fetchNotificationByID?.data?.data?.data ? (
                          fetchNotificationByID?.data?.data?.data?.map(
                            (notification) => {
                              const active = JSON.stringify(notification.active)
                              const archive = JSON.stringify(
                                notification.archive
                              )
                              return (
                                <tr key={notification.id}>
                                  <td>{notification.title}</td>
                                  <td>{notification.notificationTypeName}</td>
                                  <td>{active}</td>
                                  <td>{archive}</td>
                                  <td>{notification.createdDate}</td>
                                  <td>
                                    {/* Archive Button */}
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() =>
                                        handleArchive(notification.id)
                                      }
                                    >
                                      <BsArchive title="Archive" />
                                    </Button>
                                    {/* Delete Button */}
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() =>
                                        handleDelete(notification.id)
                                      }
                                    >
                                      <BsTrashFill title="Delete" />
                                    </Button>
                                  </td>
                                </tr>
                              )
                            }
                          )
                        ) : (
                          <tr>
                            <td colSpan="6" className="text-center">
                              --- No Data Available ---
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Tab>
              {/* Add Notification Type */}
              <Tab eventKey="notificationTypes" title="Notification Types">
                <Button
                  variant="outline-success"
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
                              <Button variant="outline" size="sm">
                                <BsTrashFill title="Delete" />
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
            {/* <Tabs fill className="custom-nav mb-3">
              <Tab eventKey="notification" title="Notification">
                <TabPaneTable ID={ID} type="notification" />
              </Tab>
              <Tab eventKey="archive" title="Archive">
                <TabPaneTable ID={ID} type="archive" />
              </Tab>
            </Tabs> */}
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

export default NotificationsAdmin
