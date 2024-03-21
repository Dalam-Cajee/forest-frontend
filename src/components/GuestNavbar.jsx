import React from "react"
import { Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const GuestNavbar = () => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="md"
      collapseOnSelect
      className="custom-header"
    >
      <div className="container-fluid">
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about-us" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/public/dashboard" className="nav-link">
              Dashboard
            </NavLink>
            {/* <NavLink to="/forest" className="nav-link">
              Forest
            </NavLink>
            <NavLink to="/wildlife" className="nav-link">
              Wildlife
            </NavLink>
            <NavLink to="/social-forestry" className="nav-link">
              Social Forestry
            </NavLink>
            <NavLink to="/research-training" className="nav-link">
              Research & Training
            </NavLink>
            <NavLink to="/public-interface" className="nav-link">
              Public Interface
            </NavLink> */}
            <NavLink to="/notifications" className="nav-link">
              Notifications
            </NavLink>
            <NavLink to="/publications" className="nav-link">
              Publications
            </NavLink>
            <NavLink to="/boards-authorities" className="nav-link">
              Boards
            </NavLink>
            <NavLink to="/eco-tourism" className="nav-link">
              Eco-Tourism
            </NavLink>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </div>
    </Navbar>
  )
}

export default GuestNavbar
