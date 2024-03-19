import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import header from "../assets/Home/header.jpg"

const Header = () => {
  return (
    <div>
      <Image src={header} className="img-fluid" alt="Header Image" />
    </div>
  )
}

export default Header
