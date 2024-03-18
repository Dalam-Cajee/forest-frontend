import React, { useState } from 'react'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'
import ActivitiesSF from './ActivitiesSF'
import JointForestManagement from './JointForestManagement'
import GreenIndiaMission from './GreenIndiaMission'
import EcoFriendlyCrematorium from './EcoFriendlyCrematorium'
import ParksGardens from './ParksGardens'
import CherryBlossomFestival from './CherryBlossomFestival'

const SocialForestry = () => {
  // States
  const [activeKey, setActiveKey] = useState('overview')

  // Function
  const isActive = (key) => {
    return key === activeKey ? 'active' : ''
  }

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }

  return (
    <Container className='my-5'>
      <TabContainer defaultActiveKey='sf_activities'>
        <Row>
          <Col sm={3}>
            <Nav
              variant='pills'
              className='custom-nav flex-column'
              onSelect={handleSelect}
            >
              <NavItem>
                <NavLink
                  eventKey='sf_activities'
                  className={`nav-link ${isActive('sf_activities')}`}
                >
                  Activities
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='sf_jfm'
                  className={`nav-link ${isActive('sf_jfm')}`}
                >
                  Joint Forest Management
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='sf_gim'
                  className={`nav-link ${isActive('sf_gim')}`}
                >
                  Green India Mission
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='sf_crematorium'
                  className={`nav-link ${isActive('sf_crematorium')}`}
                >
                  Eco-friendly Crematorium
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='sf_parks'
                  className={`nav-link ${isActive('sf_parks')}`}
                >
                  Parks & Gardens
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='sf_cherryblsom'
                  className={`nav-link ${isActive('sf_cherryblsom')}`}
                >
                  Cherry Blossom Festival
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className='bg-light p-3'>
              <TabPane eventKey='sf_activities'>
                <ActivitiesSF />
              </TabPane>
              <TabPane eventKey='sf_jfm'>
                <JointForestManagement />
              </TabPane>
              <TabPane eventKey='sf_gim'>
                <GreenIndiaMission />
              </TabPane>
              <TabPane eventKey='sf_crematorium'>
                <EcoFriendlyCrematorium />
              </TabPane>
              <TabPane eventKey='sf_parks'>
                <ParksGardens />
              </TabPane>
              <TabPane eventKey='sf_cherryblsom'>
                <CherryBlossomFestival />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default SocialForestry
