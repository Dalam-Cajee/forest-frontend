import React, { useState } from "react"
import {
  Container,
  Nav,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const GuestNavbar = () => {
  // States
  const [expanded, setExpanded] = useState(false)

  // Handlers
  const toggleNavbar = () => {
    setExpanded(!expanded)
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="custom-header"
      expanded={expanded}
    >
      <Container fluid>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNavbar}
        />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink
              to="/"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              About Us
            </NavLink>
            <NavLink
              to="/public/dashboard"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Services Dashboard
            </NavLink>
            <NavLink
              to="/forest"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Forest
            </NavLink>
            <NavLink
              to="/wildlife"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Wildlife
            </NavLink>
            <NavLink
              to="/social-forestry"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Social Forestry
            </NavLink>
            <NavLink
              to="/research-training"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Research & Training
            </NavLink>
            <NavLink
              to="/public-interface"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Public Interface
            </NavLink>
            <NavLink
              to="/notifications"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Notifications
            </NavLink>
            <NavLink
              to="/publications"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Publications
            </NavLink>
            <NavLink
              to="/boards-authorities"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Boards
            </NavLink>
            <NavLink
              to="/eco-tourism"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Eco-Tourism
            </NavLink>
            <NavLink
              to="/gallery"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Gallery
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/login"
              className="nav-link text-white"
              onClick={toggleNavbar}
            >
              Login
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default GuestNavbar
