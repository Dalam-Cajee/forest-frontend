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
import ActivitiesRT from "./ActivitiesRT"
import Silviculture from "./Silviculture"
import WorkingPlan from "./WorkingPlan"
import FRS from "./FRS"
import Training from "./Training"
import REDD from "./REDD"
import ClimateChange from "./ClimateChange"

const ResearchTraining = () => {
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
      <TabContainer defaultActiveKey="rt_activities">
        <Row>
          <Col sm={3}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              <NavLink
                eventKey="rt_activities"
                className={`nav-link ${isActive("rt_activities")}`}
              >
                Activities
              </NavLink>
              <NavLink
                eventKey="rt_silviculture"
                className={`nav-link ${isActive("rt_silviculture")}`}
              >
                Silviculture
              </NavLink>
              <NavLink
                eventKey="rt_plan"
                className={`nav-link ${isActive("rt_plan")}`}
              >
                Working Plan
              </NavLink>
              <NavLink
                eventKey="rt_frs"
                className={`nav-link ${isActive("rt_frs")}`}
              >
                FRS
              </NavLink>
              <NavLink
                eventKey="rt_training"
                className={`nav-link ${isActive("rt_training")}`}
              >
                Training
              </NavLink>
              <NavLink
                eventKey="rt_redd"
                className={`nav-link ${isActive("rt_redd")}`}
              >
                REDD+
              </NavLink>
              <NavLink
                eventKey="rt_climate"
                className={`nav-link ${isActive("rt_climate")}`}
              >
                Climate Change
              </NavLink>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className="bg-light p-3">
              <TabPane eventKey="rt_activities">
                <ActivitiesRT />
              </TabPane>
              <TabPane eventKey="rt_silviculture">
                <Silviculture />
              </TabPane>
              <TabPane eventKey="rt_plan">
                <WorkingPlan />
              </TabPane>
              <TabPane eventKey="rt_frs">
                <FRS />
              </TabPane>
              <TabPane eventKey="rt_training">
                <Training />
              </TabPane>
              <TabPane eventKey="rt_redd">
                <REDD />
              </TabPane>
              <TabPane eventKey="rt_climate">
                <ClimateChange />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default ResearchTraining
