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
import Overview from './Overview'
import ForestCover from './ForestCover'
import ReservedForest from './ReservedForest'
import ForestTypes from './ForestTypes'
import ForestFire from './ForestFire'
import WorkingPlans from './WorkingPlans'
import SacredGroves from './SacredGroves'

const Forest = () => {
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
      <TabContainer defaultActiveKey='overview'>
        <Row>
          <Col sm={3}>
            <Nav
              variant='pills'
              className='custom-nav flex-column'
              onSelect={handleSelect}
            >
              <NavItem>
                <NavLink
                  eventKey='overview'
                  className={`nav-link ${isActive('overview')}`}
                >
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_cover'
                  className={`nav-link ${isActive('forest_cover')}`}
                >
                  Forest Cover
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_reserved'
                  className={`nav-link ${isActive('forest_reserved')}`}
                >
                  Reserved Forests
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_types'
                  className={`nav-link ${isActive('forest_types')}`}
                >
                  Forest Types
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_fire'
                  className={`nav-link ${isActive('forest_fire')}`}
                >
                  Forest Fire
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_plans'
                  className={`nav-link ${isActive('forest_plans')}`}
                >
                  Working Plans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='forest_sacredgroves'
                  className={`nav-link ${isActive('forest_sacredgroves')}`}
                >
                  Sacred Groves
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className='bg-light p-3'>
              <TabPane eventKey='overview'>
                <Overview />
              </TabPane>
              <TabPane eventKey='forest_cover'>
                <ForestCover />
              </TabPane>
              <TabPane eventKey='forest_reserved'>
                <ReservedForest />
              </TabPane>
              <TabPane eventKey='forest_types'>
                <ForestTypes />
              </TabPane>
              <TabPane eventKey='forest_fire'>
                <ForestFire />
              </TabPane>
              <TabPane eventKey='forest_plans'>
                <WorkingPlans />
              </TabPane>
              <TabPane eventKey='forest_sacredgroves'>
                <SacredGroves />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
      <Outlet />
    </Container>
  )
}

export default Forest
