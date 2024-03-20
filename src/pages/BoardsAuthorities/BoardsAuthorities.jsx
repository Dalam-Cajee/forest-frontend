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
import MSMPB from "./MSMPB"
import FDCM from "./FDCM"
import EcoSociety from "./EcoSociety"

const BoardsAuthorities = () => {
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
      <TabContainer defaultActiveKey="boardsauth_msmpb">
        <Row>
          <Col sm={3}>
            <Nav
              fill
              variant="pills"
              className="custom-nav flex-column"
              onSelect={handleSelect}
            >
              <NavLink
                eventKey="boardsauth_msmpb"
                className={`nav-link ${isActive("boardsauth_msmpb")}`}
              >
                Meghalaya State Medicinal Plants Board (MSMPB)
              </NavLink>
              <NavLink
                eventKey="boardsauth_fdcm"
                className={`nav-link ${isActive("boardsauth_fdcm")}`}
              >
                Forest Development Corporation of Meghalaya (FDCM) Ltd.
              </NavLink>
              <a
                href="http://megspcb.gov.in/"
                title="External Website that opens in a new window"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${isActive("megspcb")}`}
              >
                Meghalaya State Pollution Control Board (MSPCB)
              </a>
              <NavLink
                eventKey="boardsauth_ecosociety"
                className={`nav-link ${isActive("boardsauth_ecosociety")}`}
              >
                Eco-Development Society of Meghalaya
              </NavLink>
              <a
                href="http://megbiodiversity.nic.in/"
                title="External Website that opens in a new window"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${isActive("megbiodiversity")}`}
              >
                Meghalaya State Biodiversity Board
              </a>
              <a
                href="https://parivesh.nic.in/"
                title="External Website that opens in a new window"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${isActive("parivesh")}`}
              >
                State Environmental Impact Assessment Authority (SEIAA)
              </a>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className="bg-light p-3">
              <TabPane eventKey="boardsauth_msmpb">
                <MSMPB />
              </TabPane>
              <TabPane eventKey="boardsauth_fdcm">
                <FDCM />
              </TabPane>
              <TabPane eventKey="boardsauth_ecosociety">
                <EcoSociety />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default BoardsAuthorities
