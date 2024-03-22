import React, { useState } from "react"
import {
  Button,
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  Tab,
  TabContent,
  Tabs,
} from "react-bootstrap"
import { useFetchNotificationTypes } from "../../hooks/queries/NotificationQueries"
import TabPaneTable from "../../components/core/TabPaneTable"
import { useNavigate } from "react-router-dom"

const Notifications = () => {
  // States
  const [activeKey, setActiveKey] = useState("Tenders & Notices")
  const [ID, setID] = useState(1)

  // Hooks
  const navigate = useNavigate()

  // Function
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
  // Notification Queries
  const notificationTypes = useFetchNotificationTypes(onSuccess, onError)

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  return (
    <Container className="my-3">
      <h3 className="text-center mt-4 mb-5 bg-light">Notifications</h3>
      <Button
        variant="outline-success"
        className="mb-2"
        onClick={() => navigate("/notifications/admin")}
      >
        Notification Admin
      </Button>
      <Row>
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
        <Col sm={8}>
          <TabContent className="bg-light p-3">
            <Tabs fill className="custom-nav mb-3">
              <Tab eventKey="notification" title="Notification">
                <TabPaneTable ID={ID} type="notification" />
              </Tab>
              <Tab eventKey="archive" title="Archive">
                <TabPaneTable ID={ID} type="archive" />
              </Tab>
            </Tabs>
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

export default Notifications
