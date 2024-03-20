import React from "react"
import { Col, NavLink, Row } from "react-bootstrap"
import logo from "../assets/ForestDeptLogo.png"

const Footer = () => {
  return (
    <footer className="text-bg-dark p-2">
      <Row>
        <Col>
          <img src={logo} alt="Logo" height={150} />
        </Col>
      </Row>
      <div className="container-fluid py-3 text-center">
        <div className="fs-small">
          Contents Owned, Maintained and Updated by the Forest and Environment
          Department, Government of Meghalaya
        </div>
        <div className="fs-small">
          Headquater: Sylvan House, Lower Lachumiere, Shillong - 793001,
          Meghalaya
        </div>
        <div className="fs-small">
          Developed and hosted by National Informatics Center, Meghalaya
        </div>
        <hr />
      </div>
    </footer>
  )
}

export default Footer
