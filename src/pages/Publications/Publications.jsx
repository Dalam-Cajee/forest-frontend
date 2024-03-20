import React, { useState } from "react"
import {
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  Tab,
  TabContent,
  Tabs,
} from "react-bootstrap"
import { useFetchDocumnentTypes } from "../../hooks/queries/PublicationQueries"
import TabPaneTable from "../../components/core/TabPaneTable"

const Publications = () => {
  // States
  const [activeKey, setActiveKey] = useState("Acts & Rules")
  const [ID, setID] = useState(1)

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
  const documentTypes = useFetchDocumnentTypes(onSuccess, onError)

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  return (
    <Container>
      <h3 className="text-center mt-4 mb-5 bg-light">Publications</h3>
      <Row>
        <Col sm={4}>
          <Nav
            fill
            variant="pills"
            className="custom-nav flex-column"
            onSelect={handleSelect}
          >
            {documentTypes?.data?.data?.data?.map((type) => {
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
            <TabPaneTable ID={ID} type="publication" />
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

export default Publications
