import React from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
import logo from '../assets/ForestDeptLogo.png'
import meg from '../assets/Home/meg.jpg'
import india from '../assets/Home/india.jpg'

const Footer = () => {
  return (
    <footer className='text-bg-dark p-2'>
      <Row className='container-fluid justify-content-center'>
        <Col md={4} className='d-none d-md-block text-center'>
          <img src={logo} alt='Logo' height={250} />
        </Col>
        <Col md={4}>
          <div className='mb-3'>
            <h4 className='mb-3'>
              <strong>Quick Links</strong>
            </h4>
            <NavLink href="/who'swho" className='mb-1'>
              Who's Who
            </NavLink>
            <NavLink href='/notifications' className='mb-1'>
              Notifications
            </NavLink>
            <NavLink href='/terms' className='mb-1'>
              Terms of Use
            </NavLink>
            <NavLink href='/accessibility' className='mb-1'>
              Accessibility
            </NavLink>
          </div>
          <div className='d-none d-md-block mb-2'>
            <a
              href='https://meghalaya.gov.in/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={meg} alt='Meghalaya Portal' width={150} />
            </a>
          </div>
          <div className='d-none d-md-block'>
            <a
              href='https://www.india.gov.in/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={india} alt='National Portal' width={150} />
            </a>
          </div>
        </Col>
        <Col md={4}>
          <h4>
            <strong>Contacts</strong>
          </h4>
          <p className='m-0'>
            <strong>Address:</strong>
          </p>
          <p className='m-0'>
            Office of the Principal Chief Conservator of Forests & HoFF
          </p>
          <p className='m-0'>Meghalaya Forest Head Quarter</p>
          <p>Sylvan House, Lower lachumiere Shillong-793001</p>
          <p>
            <strong>Phone Number: </strong> 0364 2220414
          </p>
          <p>
            <strong>Fax: </strong> 0364 2504068
          </p>
          <p>
            <strong>Email: </strong>
            <a href='mailto:pccfmegh@gmail.com'>pccfmegh@gmail.com</a>
          </p>
        </Col>
      </Row>
      <div className='container-fluid text-center'>
        <div className='d-flex justify-content-center'></div>
      </div>
      <hr />
      <div className='d-flex justify-content-between m-1'>
        <div>
          Contents Owned, Maintained and Updated by the Forest and Environment
          Department, Government of Meghalaya
        </div>
        <div className='text-center'>
          Developed and Hosted by National Informatics Center, Meghalaya
        </div>
      </div>
    </footer>
  )
}

export default Footer
