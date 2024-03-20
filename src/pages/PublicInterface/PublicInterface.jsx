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
import MTPA from "./MTPA"
import TreeFelling from "./TreeFelling"
import NOC from "./NOC"
import Quarry from "./Quarry"
import Seedlings from "./Seedlings"
import StoneCrushers from "./StoneCrushers"
import SawMills from "./SawMills"
import TimberDept from "./TimberDept"
import ConflictCompensation from "./ConflictCompensation"

const PublicInterface = () => {
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
      <TabContainer defaultActiveKey="pi_mipa">
        <Row>
          <Col sm={3}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              <NavLink
                eventKey="pi_mipa"
                className={`nav-link ${isActive("pi_mipa")}`}
              >
                Permission to fell Trees in Shillong under MTPA 1976
              </NavLink>
              <NavLink
                eventKey="pi_permission"
                className={`nav-link ${isActive("pi_permission")}`}
              >
                Tree Felling Permission outside Shillong
              </NavLink>
              <NavLink
                eventKey="pi_noc"
                className={`nav-link ${isActive("pi_noc")}`}
              >
                Non-Forest Land Certificate / NOC
              </NavLink>
              <NavLink
                eventKey="pi_quarry"
                className={`nav-link ${isActive("pi_quarry")}`}
              >
                Mining Lease / Quarry permits for extracting Minor Minerals
              </NavLink>
              <NavLink
                eventKey="pi_seedlings"
                className={`nav-link ${isActive("pi_seedlings")}`}
              >
                Seedlings for Public Distribution
              </NavLink>
              <NavLink
                eventKey="pi_stone"
                className={`nav-link ${isActive("pi_stone")}`}
              >
                NOC for Stone Crushers
              </NavLink>
              <NavLink
                eventKey="pi_saw"
                className={`nav-link ${isActive("pi_saw")}`}
              >
                Licenced Saw Mills
              </NavLink>
              <NavLink
                eventKey="pi_furniture"
                className={`nav-link ${isActive("pi_furniture")}`}
              >
                Furniture Unit / Timber Department
              </NavLink>
              <NavLink
                eventKey="pi_human"
                className={`nav-link ${isActive("pi_human")}`}
              >
                Human Animal Conflict & Compensation
              </NavLink>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className="bg-light p-3">
              <TabPane eventKey="pi_mipa">
                <MTPA />
              </TabPane>
              <TabPane eventKey="pi_permission">
                <TreeFelling />
              </TabPane>
              <TabPane eventKey="pi_noc">
                <NOC />
              </TabPane>
              <TabPane eventKey="pi_quarry">
                <Quarry />
              </TabPane>
              <TabPane eventKey="pi_seedlings">
                <Seedlings />
              </TabPane>
              <TabPane eventKey="pi_stone">
                <StoneCrushers />
              </TabPane>
              <TabPane eventKey="pi_saw">
                <SawMills />
              </TabPane>
              <TabPane eventKey="pi_furniture">
                <TimberDept />
              </TabPane>
              <TabPane eventKey="pi_human">
                <ConflictCompensation />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default PublicInterface
