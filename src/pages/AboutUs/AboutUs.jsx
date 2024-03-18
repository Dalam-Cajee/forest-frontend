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
import ForestDepartment from './ForestDepartment'
import Mandate from './Mandate'
import Rti from './Rti'
import WhoIsWho from './WhoIsWho'

const AboutUs = () => {
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
      <TabContainer defaultActiveKey='about_us_dept'>
        <Row>
          <Col sm={3}>
            <Nav
              variant='pills'
              className='custom-nav flex-column'
              onSelect={handleSelect}
            >
              <NavItem>
                <NavLink
                  eventKey='about_us_dept'
                  className={`nav-link ${isActive('about_us_dept')}`}
                >
                  Forest Department
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='about_us_mandate'
                  className={`nav-link ${isActive('about_us_mandate')}`}
                >
                  Mandate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='about_us_whoswho'
                  className={`nav-link ${isActive('about_us_whoswho')}`}
                >
                  Who's Who
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  eventKey='about_us_rti'
                  className={`nav-link ${isActive('about_us_rti')}`}
                >
                  RTI
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent className='bg-light p-3'>
              <TabPane eventKey='about_us_dept'>
                <ForestDepartment />
              </TabPane>
              <TabPane eventKey='about_us_mandate'>
                <Mandate />
              </TabPane>
              <TabPane eventKey='about_us_whoswho'>
                <WhoIsWho />
              </TabPane>
              <TabPane eventKey='about_us_rti'>
                <Rti />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  )
}

export default AboutUs
