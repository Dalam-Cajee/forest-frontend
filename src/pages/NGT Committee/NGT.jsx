import React, { useState } from "react"
import {
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap"
import Committee from "./Committee"
import Orders from "./Orders"
import MinutesNGT from "./MinutesNGT"
import InterimReports from "./InterimReports"

const NGT = () => {
  // States
  const [activeKey, setActiveKey] = useState("overview")

  // Function
  const isActive = (key) => {
    return key === activeKey ? "active" : ""
  }

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  return (
    <Container className="my-5">
      <TabContainer defaultActiveKey="ngt_about">
        <Row>
          <Col sm={3}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              <NavLink
                eventKey="ngt_about"
                className={`nav-link ${isActive("ngt_about")}`}
              >
                About NGT Committee
              </NavLink>
              <NavLink
                eventKey="ngt_orders"
                className={`nav-link ${isActive("ngt_orders")}`}
              >
                Orders
              </NavLink>
              <NavLink
                eventKey="ngt_minutes"
                className={`nav-link ${isActive("ngt_minutes")}`}
              >
                Minutes of Proceedings
              </NavLink>
              <NavLink
                eventKey="ngt_reports"
                className={`nav-link ${isActive("ngt_reports")}`}
              >
                Interim Reports
              </NavLink>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className="bg-light p-3">
              <TabPane eventKey="ngt_about">
                <Committee />
              </TabPane>
              <TabPane eventKey="ngt_orders">
                <Orders />
              </TabPane>
              <TabPane eventKey="ngt_minutes">
                <MinutesNGT />
              </TabPane>
              <TabPane eventKey="ngt_reports">
                <InterimReports />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default NGT
