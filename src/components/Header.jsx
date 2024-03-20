import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import header from '../assets/Home/header.jpg'
import GuestNavbar from '../components/GuestNavbar'

const Header = () => {
  return (
    <div>
      <Image src={header} className='img-fluid' alt='Header Image' />
      <GuestNavbar />
    </div>
  )
}

export default Header
