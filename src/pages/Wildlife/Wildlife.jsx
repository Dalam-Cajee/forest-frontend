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
import { Outlet } from 'react-router-dom'
import WildlifeMeg from './WildlifeMeg'
import Activities from './Activities'
import Reserves from './Reserves'
import ParksSanctuaries from './ParksSanctuaries'
import AnimalRescueCentres from './AnimalRescueCentres'
import ElephantCensus from './ElephantCensus'
import ManAnimalConflict from './ManAnimalConflict'
import EcoSensitiveZones from './EcoSensitiveZones'
import MiniZoosParks from './MiniZoosParks'
import ManagementPlans from './ManagementPlans'

const Wildlife = () => {
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
      <TabContainer defaultActiveKey='wildlife'>
        <Row>
          <Col sm={3}>
            <Nav
              variant='pills'
              className='custom-nav flex-column'
              onSelect={handleSelect}
            >
              <NavItem>
                <NavLink
                  eventKey='wildlife'
                  className={`nav-link ${isActive('wildlife')}`}
                >
                  Wildlife of Meghalaya
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_activities'
                  className={`nav-link ${isActive('wildlife_activities')}`}
                >
                  Activities
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_parks'
                  className={`nav-link ${isActive('wildlife_parks')}`}
                >
                  National Parks & Sanctuaries
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_community'
                  className={`nav-link ${isActive('wildlife_community')}`}
                >
                  Community Reserves
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_rescue'
                  className={`nav-link ${isActive('wildlife_rescue')}`}
                >
                  Animal Rescue Centres
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_elephantcensus'
                  className={`nav-link ${isActive('wildlife_elephantcensus')}`}
                >
                  Elephant Census
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_conflict'
                  className={`nav-link ${isActive('wildlife_conflict')}`}
                >
                  Man-Animal Conflict
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_plans'
                  className={`nav-link ${isActive('wildlife_plans')}`}
                >
                  Management Plans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_zones'
                  className={`nav-link ${isActive('wildlife_zones')}`}
                >
                  Eco-Sensitive Zones around PA
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='wildlife_minizoos'
                  className={`nav-link ${isActive('wildlife_minizoos')}`}
                >
                  Mini Zoos & Parks
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className='bg-light p-3'>
              <TabPane eventKey='wildlife'>
                <WildlifeMeg />
              </TabPane>
              <TabPane eventKey='wildlife_activities'>
                <Activities />
              </TabPane>
              <TabPane eventKey='wildlife_parks'>
                <ParksSanctuaries />
              </TabPane>
              <TabPane eventKey='wildlife_community'>
                <Reserves />
              </TabPane>
              <TabPane eventKey='wildlife_rescue'>
                <AnimalRescueCentres />
              </TabPane>
              <TabPane eventKey='wildlife_elephantcensus'>
                <ElephantCensus />
              </TabPane>
              <TabPane eventKey='wildlife_conflict'>
                <ManAnimalConflict />
              </TabPane>
              <TabPane eventKey='wildlife_plans'>
                <ManagementPlans />
              </TabPane>
              <TabPane eventKey='wildlife_zones'>
                <EcoSensitiveZones />
              </TabPane>
              <TabPane eventKey='wildlife_minizoos'>
                <MiniZoosParks />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default Wildlife
